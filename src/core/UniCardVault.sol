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

    address public paymentToken;
    address public registry;

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
    function initialize(address anAdmin, address aPaymentToken) public initializer {
        __AccessControl_init();
        __ReentrancyGuard_init();
        __Pausable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, anAdmin);
        paymentToken = aPaymentToken;
    }

    // @notice Deposit funds into a UniCard
    // @param cardId The id of the card
    // @param amount The amount of the deposit
    function deposit(string memory cardId, uint256 amount) public override nonReentrant whenNotPaused {
        IERC20(paymentToken).safeTransferFrom(_msgSender(), address(this), amount);
        if (!cardAccounts[cardId].initialized) {
            cardAccounts[cardId] = Account({holder: _msgSender(), balance: amount, initialized: true});
        } else {
            cardAccounts[cardId].balance += amount;
        }
        emit Deposit(cardId, cardAccounts[cardId].holder, amount);
    }

    // @notice Withdraw funds from a UniCard
    // @param cardId The id of the card
    // @param amount The amount of the withdrawal
    function withdraw(string memory cardId, uint256 amount) public override nonReentrant whenNotPaused {
        if (cardAccounts[cardId].balance < amount) {
            revert Errors.UNICARD_VAULT_INSUFFICIENT_BALANCE();
        }
        if (!cardAccounts[cardId].initialized) {
            revert Errors.UNICARD_VAULT_CARD_NOT_INITIALIZED();
        }
        if (cardAccounts[cardId].holder != _msgSender()) {
            revert Errors.UNICARD_VAULT_INVALID_HOLDER();
        }
        IERC20(paymentToken).safeTransfer(_msgSender(), amount);
        cardAccounts[cardId].balance -= amount;
        emit Withdraw(cardId, cardAccounts[cardId].holder, amount);
    }
}
