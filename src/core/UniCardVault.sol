// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import {PausableUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import {Errors} from "../libraries/Errors.sol";
import {IUniCardVault} from "../interfaces/IUniCardVault.sol";
import {IUniCardRegistry} from "../interfaces/IUniCardRegistry.sol";
import {CardStatus} from "../libraries/CardStatus.sol";

// @title UniCardVault
// @author UniPay
// @notice This contract is used to deposit funds into a UniCard
contract UniCardVault is AccessControlUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable, IUniCardVault {
    using SafeERC20 for IERC20;

    address public paymentToken;
    address public registry;

    mapping(bytes32 => uint256) public balances;

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
    function initialize(address anAdmin, address aPaymentToken, address aRegistry) public initializer {
        __AccessControl_init();
        __ReentrancyGuard_init();
        __Pausable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, anAdmin);
        paymentToken = aPaymentToken;
        registry = aRegistry;
    }

    // @notice Deposit funds into a UniCard
    // @param holder The address of the card holder
    // @param nonce The nonce of the card
    // @param amount The amount of the deposit
    function deposit(address holder, uint256 nonce, uint256 amount) public nonReentrant whenNotPaused {
        bytes32 key = keccak256(abi.encode(holder, nonce));
        if (IUniCardRegistry(registry).getCardStatus(holder) == CardStatus.DEACTIVATED) {
            revert Errors.UNICARD_ALREADY_CLOSED();
        }
        balances[key] += amount;

        emit Deposit(key, holder, nonce, amount);
    }
}
