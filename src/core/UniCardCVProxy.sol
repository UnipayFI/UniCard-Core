// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IUniCardVault} from "../interfaces/IUniCardVault.sol";
import {IUniCardCollateral} from "../interfaces/IUniCardCollateral.sol";
import {Errors} from "../libraries/Errors.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import {PausableUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";

// @title UniCardCVProxy
// @author UniPay
// @notice This contract is used to proxy calls to the UniCardVault
contract UniCardCVProxy is AccessControlUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable {
    using SafeERC20 for IERC20;

    // @notice Controller role
    bytes32 public constant CONTROLLER_ROLE = keccak256("CONTROLLER_ROLE");

    // @notice The address of the UniCardVault
    IUniCardVault public uniCardVault;
    // @notice The address of the UniCardCollateral
    IUniCardCollateral public uniCardCollateral;
    // @notice The address of the USDU token
    IERC20 public usdu;

    // @notice Constructor for the UniCardCVProxy
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    // @notice Initialize the UniCardCVProxy
    // @param anAdmin The address of the admin
    // @param aUniCardCollateral The address of the UniCardCollateral
    // @param aUniCardVault The address of the UniCardVault
    // @param anUsdu The address of the USDU token
    function initialize(address anAdmin, address aUniCardCollateral, address aUniCardVault, address anUsdu)
        external
        initializer
    {
        __AccessControl_init();
        __ReentrancyGuard_init();
        __Pausable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, anAdmin);
        _grantRole(CONTROLLER_ROLE, anAdmin);
        _setRoleAdmin(CONTROLLER_ROLE, DEFAULT_ADMIN_ROLE);

        uniCardCollateral = IUniCardCollateral(aUniCardCollateral);
        uniCardVault = IUniCardVault(aUniCardVault);
        usdu = IERC20(anUsdu);
    }

    // @notice Toggle the pause status of the registry
    // @param enablePauseOrNot The flag to enable or disable the pause
    function togglePause(bool enablePauseOrNot) external onlyRole(CONTROLLER_ROLE) {
        if (enablePauseOrNot) {
            _pause();
        } else {
            _unpause();
        }
    }

    // @notice Borrow USDU and deposit to UniCardVault
    // @param cardId The id of the card
    // @param maxBorrowAmount The maximum amount of USDU to borrow
    function borrowAndDeposit(string memory cardId, uint256 maxBorrowAmount)
        external
        payable
        nonReentrant
        whenNotPaused
    {
        if (msg.value == 0) revert Errors.UNICARD_CV_PROXY_INVALID_ETH_AMOUNT();
        if (maxBorrowAmount == 0) revert Errors.UNICARD_CV_PROXY_INVALID_BET_AMOUNT();
        // 1. Borrow USDU from UniCardCollateral
        uniCardCollateral.borrowFor{value: msg.value}(_msgSender(), maxBorrowAmount);
        // 2. transfer USDU to UniCardVault
        usdu.safeTransfer(address(uniCardVault), maxBorrowAmount);
        // 3. Deposit USDU to UniCardVault
        uniCardVault.depositFor(cardId, _msgSender(), maxBorrowAmount);
    }

    function getMaxBorrowAmount(uint256 betAmount, uint256 ethPrice) external view returns (uint256) {
        return betAmount * ethPrice * 1e18 / uniCardCollateral.MIN_COLLATERAL_RATIO() / 1e8;
    }

    // @notice Receive ETH
    receive() external payable {}
}
