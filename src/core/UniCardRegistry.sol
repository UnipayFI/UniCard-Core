// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {Errors} from "../libraries/Errors.sol";
import {IUniCardRegistry} from "../interfaces/IUniCardRegistry.sol";

// @title UniCardRegistry
// @author UniPay
// @notice This contract is used to register and manage UniCards
contract UniCardRegistry is 
    AccessControl,
    ReentrancyGuard,
    Pausable,
    IUniCardRegistry
{
    using SafeERC20 for IERC20;

    bytes32 public constant CONTROLLER_ROLE = keccak256("CONTROLLER_ROLE");
    bytes32 public constant ALLOWED_TOKEN_PAYMENT = keccak256("ALLOWED_TOKEN_PAYMENT");
    bytes32 public constant UNICARD_VAULT_ROLE = keccak256("UNICARD_VAULT_ROLE");

    uint256 public constant INTEREST_RATE_PRECISION = 1e6;
    address public constant NATIVE_TOKEN = 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE;

    mapping(address => uint256) public nonces;
    mapping(bytes32 => Commitment) private _commitments;
    mapping(bytes32 => Confirmation) private _confirmations;

    constructor(address anAdmin) {
        _grantRole(DEFAULT_ADMIN_ROLE, anAdmin);
        _setRoleAdmin(CONTROLLER_ROLE, DEFAULT_ADMIN_ROLE);
        _setRoleAdmin(ALLOWED_TOKEN_PAYMENT, DEFAULT_ADMIN_ROLE);
        _setRoleAdmin(UNICARD_VAULT_ROLE, DEFAULT_ADMIN_ROLE);
    }

    // @notice Open a card with a commitment request
    // @param holder The address of the card holder
    // @param paymentToken The payment token of the card
    // @param interestRate The interest rate of the card
    // @param deadline The deadline of the commitment request
    // @param productCode The product code of card
    // @param inviteCode The invite code of card
    // @param referralCode The referral code of card
    function openCardRequest(
        address holder,
        address paymentToken,
        uint256 interestRate,
        uint256 deadline,
        uint256 amount,
        string memory productCode,
        string memory inviteCode,
        string memory referralCode
    ) external nonReentrant whenNotPaused {
        if (!hasRole(ALLOWED_TOKEN_PAYMENT, paymentToken)) {
            revert Errors.UNICARD_REGISTRY_PAYMENT_TOKEN_NOT_ALLOWED();
        }
        if (interestRate >= INTEREST_RATE_PRECISION) {
            revert Errors.UNICARD_REGISTRY_INTEREST_RATE_TOO_HIGH();
        }
        if (deadline <= block.timestamp) {
            revert Errors.UNICARD_REGISTRY_DEADLINE_MUST_BE_IN_THE_FUTURE();
        }
        uint256 nonce = nonces[holder];
        bytes32 commitment = keccak256(
            abi.encodePacked(
                holder, 
                paymentToken, 
                nonce,
                interestRate, 
                deadline, 
                productCode
            )
        );
        if (_commitments[commitment].deadline < block.timestamp) {
            _commitments[commitment] = Commitment({
                holder: holder,
                paymentToken: paymentToken,
                interestRate: interestRate,
                deadline: deadline,
                nonce: nonce,
                productCode: productCode
            });
        } else {
            revert Errors.UNICARD_REGISTRY_USER_ALREADY_HAS_COMMITMENT();
        }

        emit CardOpenRequest(
            holder, 
            paymentToken, 
            nonce,
            interestRate, 
            deadline, 
            amount,
            productCode, 
            inviteCode, 
            referralCode, 
            commitment
        );
    }

    // @notice Open a card with a commitment confirmation
    // @param holder The address of the card holder
    // @param interestRate The interest rate of the card
    // @param deadline The deadline of the commitment request
    // @param amount The amount of create card needed
    // @param productCode The product code of card
    // @param signature The signature of the commitment confirmation
    // @param requestTxHash The transaction hash of the commitment request
    function openCardConfirmation(
        address holder,
        address paymentToken,
        uint256 interestRate,
        uint256 nonce,
        uint256 deadline,
        uint256 amount,
        address vault,
        string memory productCode,
        bytes memory signature,
        string memory requestTxHash
    ) external payable nonReentrant whenNotPaused {
        if (amount == 0) {
            revert Errors.UNICARD_REGISTRY_AMOUNT_MUST_BE_GREATER_THAN_ZERO();
        }

        if (!hasRole(UNICARD_VAULT_ROLE, vault)) {
            revert Errors.UNICARD_REGISTRY_VAULT_NOT_ALLOWED();
        }
        if (bytes(requestTxHash).length == 0) {
            revert Errors.UNICARD_REGISTRY_REQUEST_TX_HASH_EMPTY();
        }
        if (nonce != nonces[holder]) {
            revert Errors.UNICARD_REGISTRY_NONCE_MISMATCH();
        }

        bytes32 commitment = keccak256(
            abi.encodePacked(
                holder, 
                paymentToken, 
                nonce, 
                interestRate, 
                deadline, 
                productCode
            )
        );
        if (_commitments[commitment].deadline < block.timestamp) {
            revert Errors.UNICARD_REGISTRY_COMMITMENT_EXPIRED();
        }
        if (!verifySignature(commitment, signature)) {
            revert Errors.UNICARD_REGISTRY_INVALID_SIGNATURE();
        }

        if (paymentToken != NATIVE_TOKEN) {
            IERC20(paymentToken).safeTransferFrom(holder, vault, amount);
        } else {
            if (msg.value != amount) {
                revert Errors.UNICARD_REGISTRY_AMOUNT_MUST_BE_GREATER_THAN_ZERO();
            }
            payable(vault).transfer(amount);
        }

        bytes32 key = confirmationKey(holder, nonce);
        nonces[holder]++;

        if (bytes(_confirmations[key].requestTxHash).length > 0) {
            revert Errors.UNICARD_REGISTRY_REQUEST_TX_HASH_ALREADY_USED();
        }
        _confirmations[key] = Confirmation({
            productCode: productCode,
            holder: holder,
            paymentToken: paymentToken,
            nonce: nonce,
            interestRate: interestRate,
            commitment: commitment,
            requestTxHash: requestTxHash
        });

        delete _commitments[commitment];

        emit CardOpenConfirmation(
            holder, 
            paymentToken, 
            vault, 
            nonce, 
            interestRate, 
            deadline, 
            commitment, 
            requestTxHash
        );
    }

    function commitments(bytes32 commitment) 
        external 
        view 
        override
        returns (Commitment memory) 
    {
        return _commitments[commitment];
    }

    function confirmations(bytes32 confirmation) 
        external 
        view 
        override
        returns (Confirmation memory) 
    {
        return _confirmations[confirmation];
    }

    // @notice Get the confirmation key
    // @param aHolder The address of the card holder
    // @param aNonce The nonce of the card
    function confirmationKey(address aHolder, uint256 aNonce) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(aHolder, aNonce));
    }

    // @notice Check if the address has the controller role
    // @param anAddress The address to check
    // @return True if the address has the controller role, false otherwise
    function hasControllerRole(address anAddress) external view returns (bool) {
        return hasRole(CONTROLLER_ROLE, anAddress);
    }

    // @notice Check if the address has the admin role
    // @param anAddress The address to check
    // @return True if the address has the admin role, false otherwise
    function hasAdminRole(address anAddress) external view returns (bool) {
        return hasRole(DEFAULT_ADMIN_ROLE, anAddress);
    }

    // @notice Verify the signature of the commitment
    // @param commitment The commitment to verify
    // @param signature The signature to verify
    function verifySignature(bytes32 message, bytes memory signature) internal view returns (bool) {
        bytes32 hashMessage = keccak256(abi.encodePacked("\x19Unipay Signed Message:\n32", message));
        address recoveredAddress = ECDSA.recover(hashMessage, signature);
        return hasRole(CONTROLLER_ROLE, recoveredAddress);
    }
}
