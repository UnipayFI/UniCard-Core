// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {AccessControlUpgradeable} from "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";
import {PausableUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";
import {Errors} from "../libraries/Errors.sol";
import {IUniCardRegistry} from "../interfaces/IUniCardRegistry.sol";
import {Enums} from "../libraries/Enums.sol";

// @title UniCardRegistry
// @author UniPay
// @notice This contract is used to register and manage UniCards
contract UniCardRegistry is
    AccessControlUpgradeable,
    ReentrancyGuardUpgradeable,
    PausableUpgradeable,
    IUniCardRegistry
{
    using SafeERC20 for IERC20;

    bytes32 public constant CONTROLLER_ROLE = keccak256("CONTROLLER_ROLE");
    bytes32 public constant ALLOWED_TOKEN_PAYMENT = keccak256("ALLOWED_TOKEN_PAYMENT");

    address public constant NATIVE_TOKEN = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    mapping(address => uint256) public nonces;
    mapping(bytes32 => Card) public cards;

    // @notice Constructor for the UniCardRegistry
    // @param anAdmin The address of the admin
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(address anAdmin) public initializer {
        __AccessControl_init();
        __ReentrancyGuard_init();
        __Pausable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, anAdmin);
        _setRoleAdmin(CONTROLLER_ROLE, DEFAULT_ADMIN_ROLE);
        _setRoleAdmin(ALLOWED_TOKEN_PAYMENT, DEFAULT_ADMIN_ROLE);
    }

    // @notice Open a card with a commitment request
    // @param holder The address of the card holder
    // @param paymentToken The payment token of the card
    // @param productCode The product code of card
    // @param inviteCode The invite code of card
    // @param referralCode The referral code of card
    function openCardRequest(
        address holder,
        address paymentToken,
        uint256 amount,
        string memory productCode,
        string memory inviteCode,
        string memory referralCode
    ) external payable nonReentrant whenNotPaused {
        if (!hasRole(ALLOWED_TOKEN_PAYMENT, paymentToken)) {
            revert Errors.UNICARD_REGISTRY_PAYMENT_TOKEN_NOT_ALLOWED();
        }
        if (amount > 0) {
            if (paymentToken != NATIVE_TOKEN) {
                IERC20(paymentToken).safeTransferFrom(holder, address(this), amount);
            } else {
                payable(address(this)).transfer(amount);
                // refund the extra amount
                if (msg.value > amount) {
                    payable(holder).transfer(msg.value - amount);
                }
            }
        }

        uint256 nonce = nonces[holder];
        bytes32 key = keccak256(abi.encodePacked(holder, nonce));
        if (cards[key].status == Enums.CardStatus.UNOPENED) {
            cards[key] = Card({
                holder: holder,
                paymentToken: paymentToken,
                nonce: nonce,
                openCardAmount: amount,
                productCode: productCode,
                inviteCode: inviteCode,
                referralCode: referralCode,
                status: Enums.CardStatus.ACTIVATED
            });
        } else {
            revert Errors.UNICARD_REGISTRY_CARD_ALREADY_OPENED();
        }

        emit CardOpenRequest(holder, paymentToken, nonce, amount, productCode, inviteCode, referralCode);
    }

    // @notice Close a card
    // @param holder The address of the card holder
    // @param nonce The nonce of the card
    function closeCardRequest(address holder, uint256 nonce) external onlyRole(CONTROLLER_ROLE) {
        bytes32 key = keccak256(abi.encodePacked(holder, nonce));
        if (cards[key].status == Enums.CardStatus.DEACTIVATED) {
            revert Errors.UNICARD_REGISTRY_CARD_ALREADY_DEACTIVATED();
        } else if (cards[key].status == Enums.CardStatus.UNOPENED) {
            revert Errors.UNICARD_REGISTRY_CARD_NOT_OPENED();
        }
        cards[key].status = Enums.CardStatus.DEACTIVATED;

        // refund the amount
        if (cards[key].paymentToken != NATIVE_TOKEN) {
            IERC20(cards[key].paymentToken).safeTransfer(holder, cards[key].openCardAmount);
        } else {
            payable(holder).transfer(cards[key].openCardAmount);
        }

        emit CardCloseRequest(holder, nonce);
    }

    // @notice Withdraw the funds from the registry
    // @param paymentToken The payment token to withdraw
    // @param amount The amount to withdraw
    function withdrawRegistryFunds(address paymentToken, uint256 amount)
        external
        onlyRole(DEFAULT_ADMIN_ROLE)
        nonReentrant
        whenNotPaused
    {
        if (paymentToken != NATIVE_TOKEN) {
            IERC20(paymentToken).safeTransfer(msg.sender, amount);
        } else {
            payable(msg.sender).transfer(amount);
        }
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

    // @notice Receive native token
    receive() external payable {}
}
