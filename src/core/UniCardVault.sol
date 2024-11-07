// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import {PausableUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import {Errors} from "../libraries/Errors.sol";
import {IUniCardVault} from "../interfaces/IUniCardVault.sol";

// @title UniCardVault
// @author UniPay
// @notice This contract is used to deposit funds into a UniCard
contract UniCardVault is AccessControlUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, IUniCardVault {
    using SafeERC20 for IERC20;

    bytes32 public constant CONTROLLER_ROLE = keccak256("CONTROLLER_ROLE");

    // @notice The address of the USDU token
    address public usdu;
    // @notice The mapping of card accounts
    mapping(string => Account) public cardAccounts;

    // @notice Constructor for the UniCardRegistry
    // @param anAdmin The address of the admin
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    // @notice Initialize the UniCardVault
    // @param anAdmin The address of the admin
    // @param aPaymentToken The address of the payment token. eg USDU
    // @param aRegistry The address of the UniCardRegistry
    function initialize(address anAdmin, address anUsdu) public initializer {
        __AccessControl_init();
        __ReentrancyGuard_init();
        __Pausable_init();

        usdu = anUsdu;
        _grantRole(DEFAULT_ADMIN_ROLE, anAdmin);
        _grantRole(CONTROLLER_ROLE, anAdmin);
        _setRoleAdmin(CONTROLLER_ROLE, DEFAULT_ADMIN_ROLE);
    }

    // @notice Update the USDU address
    // @param newUsdu The address of the new USDU
    function updateUsdu(address newUsdu) external onlyRole(CONTROLLER_ROLE) {
        usdu = newUsdu;
        emit UsduUpdated(newUsdu);
    }

    // @notice Deposit funds into a UniCard
    // @param cardId The id of the card
    // @param amount The amount of the deposit
    function deposit(string memory cardId, uint256 amount) public override nonReentrant whenNotPaused {
        IERC20(usdu).safeTransferFrom(_msgSender(), address(this), amount);
        _deposit(cardId, _msgSender(), amount);
    }

    // @notice Deposit funds into a UniCard for a specific holder
    // @param cardId The id of the card
    // @param holder The address of the holder
    // @param amount The amount of the deposit
    function depositFor(string memory cardId, address holder, uint256 amount)
        public
        override
        nonReentrant
        whenNotPaused
        onlyRole(CONTROLLER_ROLE)
    {
        _deposit(cardId, holder, amount);
    }

    // @notice Internal function to deposit funds into a UniCard
    // @param cardId The id of the card
    // @param holder The address of the holder
    // @param amount The amount of the deposit
    function _deposit(string memory cardId, address holder, uint256 amount) internal {
        if (bytes(cardId).length == 0) revert Errors.UNICARD_VAULT_INVALID_CARD_ID();
        if (!cardAccounts[cardId].initialized) {
            cardAccounts[cardId] = Account({holder: holder, balance: amount, initialized: true});
        } else {
            cardAccounts[cardId].balance += amount;
        }
        emit Deposit(cardId, cardAccounts[cardId].holder, amount);
    }

    // @notice Withdraw funds from a UniCard
    // @param cardId The id of the card
    // @param amount The amount of the withdrawal
    function withdraw(string memory cardId, uint256 amount) public override nonReentrant whenNotPaused {
        if (bytes(cardId).length == 0) revert Errors.UNICARD_VAULT_INVALID_CARD_ID();
        if (!cardAccounts[cardId].initialized) {
            revert Errors.UNICARD_VAULT_CARD_NOT_INITIALIZED();
        }
        if (cardAccounts[cardId].balance < amount) {
            revert Errors.UNICARD_VAULT_INSUFFICIENT_BALANCE();
        }
        if (cardAccounts[cardId].holder != _msgSender()) {
            revert Errors.UNICARD_VAULT_INVALID_HOLDER();
        }
        IERC20(usdu).safeTransfer(_msgSender(), amount);
        cardAccounts[cardId].balance -= amount;
        emit Withdraw(cardId, cardAccounts[cardId].holder, amount);
    }

    // @notice Toggle the pause status of the vault
    // @param enablePauseOrNot The flag to enable or disable the pause
    function togglePause(bool enablePauseOrNot) external onlyRole(CONTROLLER_ROLE) {
        if (enablePauseOrNot) {
            _pause();
        } else {
            _unpause();
        }
        emit TogglePause(enablePauseOrNot);
    }

    function emergencyWithdraw(string memory cardId) external onlyRole(DEFAULT_ADMIN_ROLE) {
        if (bytes(cardId).length == 0) revert Errors.UNICARD_VAULT_INVALID_CARD_ID();
        if (!cardAccounts[cardId].initialized) {
            revert Errors.UNICARD_VAULT_CARD_NOT_INITIALIZED();
        }

        uint256 balance = cardAccounts[cardId].balance;
        cardAccounts[cardId].balance = 0;
        cardAccounts[cardId].initialized = false;
        IERC20(usdu).safeTransfer(_msgSender(), balance);
        emit EmergencyWithdraw(cardId, cardAccounts[cardId].holder, balance);
    }
}
