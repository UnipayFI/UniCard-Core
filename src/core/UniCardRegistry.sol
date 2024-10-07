// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {Errors} from "../libraries/Errors.sol";
import {NoDelegateCall} from "./NoDelegateCall.sol";
import {UniCardDeploy} from "./UniCardDeploy.sol";
import {IUniCardRegistry} from "../interfaces/IUniCardRegistry.sol";
import {IUniCard} from "../interfaces/IUniCard.sol";


// @title UniCardRegistry
// @author UniPay
// @notice This contract is used to register and manage UniCards
contract UniCardRegistry is 
    AccessControl,
    ReentrancyGuard,
    Pausable,
    NoDelegateCall,
    UniCardDeploy,
    IUniCardRegistry
{
    using SafeERC20 for IERC20;

    bytes32 public constant CONTROLLER_ROLE = keccak256("CONTROLLER_ROLE");

    uint256 public constant INTEREST_RATE_PRECISION = 1e6;

    address public paymentToken;
    mapping(address => Commitment) public userCommitment;
    mapping(address => uint256) public userCardIndex;
    mapping(address => mapping(uint256 => address)) public userCards;

    constructor(
        address anAdmin,
        address aPaymentToken
    ) {
        paymentToken = aPaymentToken;
        _grantRole(DEFAULT_ADMIN_ROLE, anAdmin);
        _setRoleAdmin(CONTROLLER_ROLE, DEFAULT_ADMIN_ROLE);
    }

    // @notice Open a card with a commitment request
    // @param holder The address of the card holder
    // @param interestRate The interest rate of the card
    // @param deadline The deadline of the commitment request
    // @param signature The signature of the commitment request
    function openCardRequest(
        address holder,
        uint256 interestRate,
        uint256 deadline
    ) external nonReentrant whenNotPaused {
        require(interestRate < INTEREST_RATE_PRECISION, Errors.UNICARD_REGISTRY_INTEREST_RATE_TOO_HIGH);
        require(deadline > block.timestamp, Errors.UNICARD_REGISTRY_DEADLINE_MUST_BE_IN_THE_FUTURE);
        bytes32 commitment = keccak256(abi.encodePacked(holder, interestRate, deadline));
        if (userCommitment[holder].deadline < block.timestamp) {
            userCommitment[holder] = Commitment({
                holder: holder,
                interestRate: interestRate,
                deadline: deadline,
                hashMessage: commitment
            });
        } else {
            revert Errors.UNICARD_REGISTRY_USER_ALREADY_HAS_COMMITMENT();
        }

        emit CardOpenRequest(holder, interestRate, deadline, commitment);
    }

    // @notice Open a card with a commitment confirmation
    // @param holder The address of the card holder
    // @param interestRate The interest rate of the card
    // @param deadline The deadline of the commitment request
    // @param signature The signature of the commitment confirmation
    function openCardConfirmation(
        address holder,
        uint256 interestRate,
        uint256 deadline,
        bytes memory referralCode,
        bytes memory signature
    ) external nonReentrant whenNotPaused {
        bytes32 commitment = keccak256(abi.encodePacked(holder, interestRate, deadline));
        require(userCommitment[holder].deadline > block.timestamp, Errors.UNICARD_REGISTRY_COMMITMENT_EXPIRED);
        require(userCommitment[holder].hashMessage == commitment, Errors.UNICARD_REGISTRY_COMMITMENT_DOES_NOT_EXIST);
        require(verifySignature(commitment, signature), Errors.UNICARD_REGISTRY_INVALID_SIGNATURE);
        uint256 index = userCardIndex[holder];
        require(userCards[holder][index] == address(0), Errors.UNICARD_REGISTRY_CARD_ALREADY_OPENED);
        address card = deploy(address(this),holder, interestRate, index, paymentToken, commitment);

        userCards[holder][index] = card;
        userCardIndex[holder] = index + 1;

        delete userCommitment[holder];
        emit CardOpenConfirmation(holder, card, index, interestRate, deadline, commitment, referralCode);
    }

    /// @notice Increase the credit limit of a card
    /// @param holder The address of the card holder
    /// @param index The index of the card
    /// @param amount The amount to increase the credit limit by
    function increaseCreditLimit(address holder, uint256 index,uint256 amount) external {
        address card = userCards[holder][index];
        require(card != address(0), Errors.UNICARD_REGISTRY_CARD_DOES_NOT_EXIST);
        IUniCard(card).increaseCreditLimit(holder, amount);

        emit CreditLimitIncreased(holder, index, amount);
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
