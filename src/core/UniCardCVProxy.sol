// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IUniCardVault} from "../interfaces/IUniCardVault.sol";
import {IUniCardCollateral} from "../interfaces/IUniCardCollateral.sol";
import {IPriceFeed} from "../interfaces/IPriceFeed.sol";
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

    // @notice Allowed repay token
    bytes32 public constant ALLOWED_REPAY_TOKEN = keccak256("ALLOWED_REPAY_TOKEN");
    // @notice Controller role
    bytes32 public constant CONTROLLER_ROLE = keccak256("CONTROLLER_ROLE");

    // @notice The address of the UniCardVault
    IUniCardVault public uniCardVault;
    // @notice The address of the UniCardCollateral
    IUniCardCollateral public uniCardCollateral;
    // @notice The address of the USDU token
    IERC20 public usdu;
    // @notice The address of the price feed
    IPriceFeed public priceFeed;

    // @notice Constructor for the UniCardCVProxy
    constructor() {
        _disableInitializers();
    }

    // @notice Initialize the UniCardCVProxy
    // @param anAdmin The address of the admin
    function initialize(
        address anAdmin,
        address aUniCardVault,
        address aUniCardCollateral,
        address anUsdu,
        address aPriceFeed
    ) external initializer {
        __AccessControl_init();
        __ReentrancyGuard_init();
        __Pausable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, anAdmin);
        _grantRole(CONTROLLER_ROLE, anAdmin);
        _setRoleAdmin(ALLOWED_REPAY_TOKEN, DEFAULT_ADMIN_ROLE);
        _setRoleAdmin(CONTROLLER_ROLE, DEFAULT_ADMIN_ROLE);

        uniCardVault = IUniCardVault(aUniCardVault);
        uniCardCollateral = IUniCardCollateral(aUniCardCollateral);
        usdu = IERC20(anUsdu);
        priceFeed = IPriceFeed(aPriceFeed);
    }

    // @notice Toggle the pause status of the registry
    // @param enablePauseOrNot The flag to enable or disable the pause
    function togglePause(bool enablePauseOrNot) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (enablePauseOrNot) {
            _pause();
        } else {
            _unpause();
        }
    }

    // @notice Borrow USDU and deposit to UniCardVault
    // @param cardId The id of the card
    function borrowAndDeposit(string memory cardId) external payable nonReentrant whenNotPaused {
        if (msg.value == 0) revert Errors.UNICARD_CV_PROXY_INVALID_ETH_AMOUNT();
        // 1. Borrow USDU from UniCardCollateral
        uint256 ethPrice = priceFeed.lastGoodPrice();
        // msg.value decimals 1e18
        // ethPrice decimals 1e8
        // MIN_COLLATERAL_RATIO decimals 1e18
        // need maxBorrowAmount decimals 1e18
        uint256 maxBorrowAmount = (msg.value * ethPrice) / uniCardCollateral.MIN_COLLATERAL_RATIO() * 1e10;
        // 2. transfer USDU to UniCardVault
        usdu.safeTransfer(address(uniCardVault), maxBorrowAmount);
        // 3. Deposit USDU to UniCardVault
        uniCardVault.depositFor(cardId, _msgSender(), maxBorrowAmount);
    }
}
