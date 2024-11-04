// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

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
    // @notice Minimum collateral ratio (110%)
    uint256 public constant MIN_COLLATERAL_RATIO = 11e17; // 110%
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
    // @param anAdmin The address of the admin
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
    }

    /**
     * @notice Borrow USDU by providing ETH as collateral
     * @param debtAmount The amount of USDU to borrow
     */
    function borrow(uint256 debtAmount) external payable whenNotPaused {
        adjust(
            IUniCardCollateral.AdjustParams({
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
    function repay(address repayToken, uint256 repayAmount) external whenNotPaused {
        adjust(
            IUniCardCollateral.AdjustParams({
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
    function adjust(IUniCardCollateral.AdjustParams memory params) public payable nonReentrant whenNotPaused {
        LocalVariables_adjust memory vars;

        // Get current position
        uint256 currentCollateral = collaterals[_msgSender()];
        uint256 currentDebt = debts[_msgSender()];

        // Validate basic requirements
        if (params.isCollateralIncrease) {
            if (msg.value != params.collateralChange) {
                revert Errors.UNICARD_COLLATERAL_INVALID_ETH_AMOUNT();
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
            vars.price = priceFeed.lastGoodPrice();
            vars.collateralRatio = _calculateCollateralRatio(vars.totalCollateralAfter, vars.totalDebtAfter, vars.price);
            if (vars.collateralRatio < MIN_COLLATERAL_RATIO) {
                revert Errors.UNICARD_COLLATERAL_INSUFFICIENT_COLLATERAL_RATIO();
            }
        }

        // Update state
        collaterals[_msgSender()] = vars.totalCollateralAfter;
        debts[_msgSender()] = vars.totalDebtAfter;

        // Handle token transfers
        _handleTokenTransfers(params);

        emit CollateralAdjusted(
            _msgSender(),
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
        // collateralAmount (18 decimals) * price (8 decimals) / (debtAmount (18 decimals) * 1e8) * 1 ether= ratio (18 decimals)
        if (debtAmount > 0) {
            uint256 newCollRatio = 1 ether * collateralAmount / debtAmount * price / 1e8;

            return newCollRatio;
        }
        // Return the maximal value for uint256 if the debt is 0. Represents "infinite" CR.
        else {
            // if (_debt == 0)
            return 2 ** 256 - 1;
        }
    }

    // @notice Toggle the pause status of the collateral
    // @param enablePauseOrNot The flag to enable or disable the pause
    function togglePause(bool enablePauseOrNot) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (enablePauseOrNot) {
            _pause();
        } else {
            _unpause();
        }
    }

    // @notice Receive ETH
    receive() external payable {}
}
