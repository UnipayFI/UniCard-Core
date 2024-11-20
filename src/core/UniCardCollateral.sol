// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/console.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import {PausableUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import {Errors} from "../libraries/Errors.sol";
import {IUniCardCollateral} from "../interfaces/IUniCardCollateral.sol";
import {IPriceFeed} from "../interfaces/IPriceFeed.sol";

interface IUSDU {
    function mint(address to, uint256 amount) external;
}

contract UniCardCollateral is
    AccessControlUpgradeable,
    ReentrancyGuardUpgradeable,
    PausableUpgradeable,
    IUniCardCollateral
{
    using SafeERC20 for IERC20;

    // @notice Allowed repay token
    bytes32 public constant ALLOWED_REPAY_TOKEN = keccak256("ALLOWED_REPAY_TOKEN");
    // @notice Controller role
    bytes32 public constant CONTROLLER_ROLE = keccak256("CONTROLLER_ROLE");
    // @notice UniCardCVProxy role
    bytes32 public constant UNICARD_CV_PROXY_ROLE = keccak256("UNICARD_CV_PROXY_ROLE");
    // @notice Minimum collateral ratio (110%)
    uint256 public constant override MIN_COLLATERAL_RATIO = 11e17; // 110%
    // @notice Native token
    address public constant NATIVE_TOKEN = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE; // ETH

    IUSDU public usdu;
    // @notice Price feed
    IPriceFeed public priceFeed;
    // @notice Debts
    mapping(address => uint256) public debts;
    // @notice Collaterals
    mapping(address => uint256) public collaterals;

    // @notice Constructor for the UniCardRegistry
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    // @notice Initialize the contract
    // @param registry_ The UniCard registry address
    // @param priceFeed_ The price feed address
    function initialize(address anAdmin, address anUsdu, address aPriceFeed) external initializer {
        __AccessControl_init();
        __ReentrancyGuard_init();
        __Pausable_init();

        usdu = IUSDU(anUsdu);
        priceFeed = IPriceFeed(aPriceFeed);
        _grantRole(DEFAULT_ADMIN_ROLE, anAdmin);
        _grantRole(CONTROLLER_ROLE, anAdmin);
        _setRoleAdmin(ALLOWED_REPAY_TOKEN, DEFAULT_ADMIN_ROLE);
        _setRoleAdmin(CONTROLLER_ROLE, DEFAULT_ADMIN_ROLE);
        _setRoleAdmin(UNICARD_CV_PROXY_ROLE, DEFAULT_ADMIN_ROLE);
    }

    // @notice Update the USDU address
    // @param newUsdu The address of the new USDU
    function updateUsdu(address newUsdu) external onlyRole(CONTROLLER_ROLE) {
        usdu = IUSDU(newUsdu);
        emit UsduUpdated(newUsdu);
    }

    // @notice Update the price feed
    // @param newPriceFeed The address of the new price feed
    function updatePriceFeed(address newPriceFeed) external onlyRole(CONTROLLER_ROLE) {
        priceFeed = IPriceFeed(newPriceFeed);
        emit PriceFeedUpdated(newPriceFeed);
    }

    /**
     * @notice Borrow USDU by providing ETH as collateral
     * @param debtAmount The amount of USDU to borrow
     */
    function borrow(uint256 debtAmount) external payable nonReentrant whenNotPaused {
        adjust(
            IUniCardCollateral.AdjustParams({
                holder: _msgSender(),
                collateralChange: msg.value,
                isCollateralIncrease: true,
                debtChange: debtAmount,
                isDebtIncrease: true,
                repayToken: NATIVE_TOKEN
            })
        );
    }

    /**
     * @notice Repay debt using allowed tokens
     * @param repayToken The token used for repayment
     * @param repayAmount The amount to repay
     */
    function repay(address repayToken, uint256 repayAmount) external nonReentrant whenNotPaused {
        adjust(
            IUniCardCollateral.AdjustParams({
                holder: _msgSender(),
                collateralChange: 0,
                isCollateralIncrease: false,
                debtChange: repayAmount,
                isDebtIncrease: false,
                repayToken: repayToken
            })
        );
    }

    // @notice Borrow for a specific holder
    // @param holder The address of the holder
    // @param debtAmount The amount of USDU to borrow
    function borrowFor(address holder, uint256 debtAmount)
        external
        payable
        onlyRole(UNICARD_CV_PROXY_ROLE)
        nonReentrant
        whenNotPaused
    {
        adjust(
            IUniCardCollateral.AdjustParams({
                holder: holder,
                collateralChange: msg.value,
                isCollateralIncrease: true,
                debtChange: debtAmount,
                isDebtIncrease: true,
                repayToken: NATIVE_TOKEN
            })
        );
    }

    function repayFor(address holder, address repayToken, uint256 repayAmount)
        external
        nonReentrant
        onlyRole(UNICARD_CV_PROXY_ROLE)
        whenNotPaused
    {
        adjust(
            IUniCardCollateral.AdjustParams({
                holder: holder,
                collateralChange: 0,
                isCollateralIncrease: false,
                debtChange: repayAmount,
                isDebtIncrease: false,
                repayToken: repayToken
            })
        );
    }

    /**
     * @notice Core function to adjust position (collateral and debt)
     * @param params Struct containing all adjustment parameters
     */
    function adjust(IUniCardCollateral.AdjustParams memory params) internal {
        LocalVariables_adjust memory vars;

        // Get current position
        uint256 currentCollateral = collaterals[params.holder];
        uint256 currentDebt = debts[params.holder];

        // Validate basic requirements
        if (params.isCollateralIncrease) {
            if (msg.value != params.collateralChange) {
                revert Errors.UNICARD_COLLATERAL_INVALID_ETH_AMOUNT();
            }
            
            if (params.isDebtIncrease && params.debtChange > 0) {
                vars.price = priceFeed.lastGoodPrice();
                uint256 ethValueInUSD = params.collateralChange * vars.price / 1e8;
                if (params.debtChange > ethValueInUSD) {
                    revert Errors.UNICARD_COLLATERAL_EXCEEDS_ETH_VALUE();
                }
            }
        } else {
            if (msg.value != 0) {
                revert Errors.UNICARD_COLLATERAL_ETH_NOT_NEEDED();
            }
        }

        // Calculate new collateral amount
        vars.totalCollateralAfter =
            _calculateNewCollateral(currentCollateral, params.collateralChange, params.isCollateralIncrease);

        // Calculate new debt amount
        vars.totalDebtAfter =
            _calculateNewDebt(currentDebt, params.debtChange, params.isDebtIncrease, params.repayToken);

        // Check collateral ratio if there's debt
        if (vars.totalDebtAfter > 0) {
            if (vars.price == 0) {
                vars.price = priceFeed.lastGoodPrice();
            }
            vars.collateralRatio = _calculateCollateralRatio(vars.totalCollateralAfter, vars.totalDebtAfter, vars.price);
            if (vars.collateralRatio < MIN_COLLATERAL_RATIO) {
                revert Errors.UNICARD_COLLATERAL_INSUFFICIENT_COLLATERAL_RATIO();
            }
        }

        // Update state
        collaterals[params.holder] = vars.totalCollateralAfter;
        debts[params.holder] = vars.totalDebtAfter;

        // Handle token transfers
        _handleTokenTransfers(params);

        emit CollateralAdjusted(
            params.holder,
            params.collateralChange,
            params.isCollateralIncrease,
            params.debtChange,
            params.isDebtIncrease,
            params.repayToken
        );
    }

    /**
     * @notice Calculate new collateral amount
     * @param currentCollateral Current collateral amount
     * @param change Amount of collateral to add/remove
     * @param isIncrease True if adding collateral, false if removing
     * @return New collateral amount
     */
    function _calculateNewCollateral(uint256 currentCollateral, uint256 change, bool isIncrease)
        internal
        pure
        returns (uint256)
    {
        if (isIncrease) {
            return currentCollateral + change;
        } else {
            if (change > currentCollateral) {
                revert Errors.UNICARD_COLLATERAL_INSUFFICIENT_COLLATERAL();
            }
            return currentCollateral - change;
        }
    }

    /**
     * @notice Calculate new debt amount
     * @param currentDebt Current debt amount
     * @param change Amount of debt to add/remove
     * @param isIncrease True if borrowing, false if repaying
     * @param repayToken Token used for repayment (only used when repaying)
     * @return New debt amount
     */
    function _calculateNewDebt(uint256 currentDebt, uint256 change, bool isIncrease, address repayToken)
        internal
        view
        returns (uint256)
    {
        if (isIncrease) {
            if (repayToken != NATIVE_TOKEN) {
                revert Errors.UNICARD_COLLATERAL_INVALID_REPAY_TOKEN();
            }
            return currentDebt + change;
        } else {
            if (change > currentDebt) {
                revert Errors.UNICARD_COLLATERAL_DEBT_REDUCTION_EXCEEDS_CURRENT_DEBT();
            }
            if (change > 0) {
                if (!hasRole(ALLOWED_REPAY_TOKEN, repayToken)) {
                    revert Errors.UNICARD_COLLATERAL_INVALID_REPAY_TOKEN();
                }
            }
            return currentDebt - change;
        }
    }

    /**
     * @notice Handle token transfers
     * @param params Struct containing all adjustment parameters
     */
    function _handleTokenTransfers(IUniCardCollateral.AdjustParams memory params) internal {
        // Handle repayment token transfer
        if (!params.isDebtIncrease && params.debtChange > 0) {
            IERC20(params.repayToken).safeTransferFrom(_msgSender(), address(this), params.debtChange);
        }

        // Handle USDU minting for borrowing
        if (params.isDebtIncrease && params.debtChange > 0) {
            usdu.mint(_msgSender(), params.debtChange);
        }
    }

    /**
     * @notice Calculate collateral ratio
     * @param collateralAmount Collateral amount
     * @param debtAmount Debt amount
     * @param price Price
     * @return Collateral ratio
     */
    function _calculateCollateralRatio(uint256 collateralAmount, uint256 debtAmount, uint256 price)
        internal
        pure
        returns (uint256)
    {
        // collateralAmount (18 decimals) * price (18 decimals) / debtAmount (18 decimals) = ratio (18 decimals)
        if (debtAmount > 0) {
            uint256 newCollRatio = collateralAmount * price / debtAmount;

            return newCollRatio;
        }
        // Return the maximal value for uint256 if the debt is 0. Represents "infinite" CR.
        else {
            // if (_debt == 0)
            return type(uint256).max;
        }
    }

    // @notice Toggle the pause status of the collateral
    // @param enablePauseOrNot The flag to enable or disable the pause
    function togglePause(bool enablePauseOrNot) external onlyRole(CONTROLLER_ROLE) {
        if (enablePauseOrNot) {
            _pause();
        } else {
            _unpause();
        }

        emit TogglePause(enablePauseOrNot);
    }

    // @notice Receive ETH
    receive() external payable {}
}
