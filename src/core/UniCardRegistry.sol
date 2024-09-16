pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

import {Errors} from "../libraries/Errors.sol";
import {IUniCardRegistry} from "../interfaces/IUniCardRegistry.sol";

contract UniCardRegistry is AccessControl, ReentrancyGuard, Pausable, IUniCardRegistry {
    using SafeERC20 for IERC20;

    bytes32 public constant CONTROLLER_ROLE = keccak256("CONTROLLER_ROLE");

    uint256 public constant INTEREST_RATE_PRECISION = 1e6;
    address public paymentToken;
    mapping(address => bytes32) public userCommitment;
    mapping(address => bool) public isController;
    mapping(address => CardInfo[]) public userCards;

    constructor(address anAdmin, address aPaymentToken) {
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
        uint256 deadline,
        bytes memory signature
    ) external override nonReentrant whenNotPaused {
        require(interestRate < INTEREST_RATE_PRECISION, Errors.CREDIT_CARD_CENTER_INTEREST_RATE_TOO_HIGH);
        require(deadline > block.timestamp, Errors.CREDIT_CARD_CENTER_DEADLINE_MUST_BE_IN_THE_FUTURE);
        bytes32 commitment = keccak256(abi.encodePacked(holder, interestRate, deadline));
        // Check if the user already has a commitment
        // deadline < block.timestamp means that the commitment is not valid
        // userCommitment[holder] == bytes32(0) means that the user does not have a commitment
        require(
            deadline < block.timestamp && userCommitment[holder] == bytes32(0),
            Errors.CREDIT_CARD_CENTER_USER_ALREADY_HAS_COMMITMENT
        );

        userCommitment[holder] = commitment;
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
        bytes memory signature
    ) external override nonReentrant whenNotPaused {
        bytes32 commitment = keccak256(abi.encodePacked(holder, interestRate, deadline));
        require(userCommitment[holder] == commitment, Errors.CREDIT_CARD_CENTER_COMMITMENT_DOES_NOT_EXIST);
        require(verifySignature(commitment, signature), Errors.CREDIT_CARD_CENTER_INVALID_SIGNATURE);

        CardInfo memory card = CardInfo({
            commitment: commitment,
            interestRate: interestRate,
            createdAt: block.timestamp,
            updatedAt: block.timestamp,
            creditLimit: 0,
            creator: holder,
            paymentToken: paymentToken
        });

        userCards[holder].push(card);

        emit CardOpenConfirmation(holder, interestRate, deadline, commitment);
    }

    // @notice Increase the credit limit of the card
    // @param holder The address of the card holder
    // @param amount The amount to increase the credit limit
    function increaseCreditLimit(address holder, uint256 amount) external override nonReentrant whenNotPaused {
        require(amount > 0, Errors.CREDIT_CARD_CENTER_AMOUNT_MUST_BE_GREATER_THAN_ZERO);
        require(userCards[holder].length > 0, Errors.CREDIT_CARD_CENTER_USER_DOES_NOT_HAVE_ANY_CARDS);

        CardInfo storage card = userCards[holder][userCards[holder].length - 1];
        card.creditLimit += amount;
    }

    // @notice Decrease the credit limit of the card
    // @param holder The address of the card holder
    // @param amount The amount to decrease the credit limit
    function decreaseCreditLimit(address holder, uint256 amount) external override nonReentrant whenNotPaused {
        require(amount > 0, Errors.CREDIT_CARD_CENTER_AMOUNT_MUST_BE_GREATER_THAN_ZERO);
        require(userCards[holder].length > 0, Errors.CREDIT_CARD_CENTER_USER_DOES_NOT_HAVE_ANY_CARDS);

        CardInfo storage card = userCards[holder][userCards[holder].length - 1];
        card.creditLimit -= amount;
    }

    // @notice Get the card count of the user
    // @param holder The address of the card holder
    function getCardCount(address holder) external view returns (uint256) {
        return userCards[holder].length;
    }

    // @notice Get the card info of the user
    // @param holder The address of the card holder
    function getCardInfo(address holder, uint256 index) external view returns (CardInfo memory) {
        require(userCards[holder].length > 0, Errors.CREDIT_CARD_CENTER_USER_DOES_NOT_HAVE_ANY_CARDS);
        return userCards[holder][index];
    }

    // @notice Verify the signature of the commitment
    // @param commitment The commitment to verify
    // @param signature The signature to verify
    function verifySignature(bytes32 message, bytes memory signature) internal returns (bool) {
        bytes32 hashMessage = keccak256(abi.encodePacked("\x19Unipay Signed Message:\n32", message));
        return hasRole(CONTROLLER_ROLE, ECDSA.recover(hashMessage, signature));
    }
}
