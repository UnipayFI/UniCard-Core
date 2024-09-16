pragma solidity ^0.8.0;

interface ICreditCardCenter {
    event CardOpenWithCommitmentRequest(
        address indexed holder, uint256 indexed interestRate, uint256 indexed deadline, bytes32 indexed commitment
    );
    event CardOpenedWithCommitmentConfirmation(
        address indexed holder, uint256 indexed interestRate, uint256 indexed deadline, bytes32 indexed commitment
    );

    struct CardInfo {
        bytes32 commitment;
        uint256 interestRate;
        uint256 createdAt;
        uint256 updatedAt;
        uint256 balance;
        uint256 creditLimit;
        uint256 availableCredit;
        uint256 minimumPayment;
        uint256 paymentDueDate;
        address creator;
        address paymentToken;
    }

    function openCardWithCommitmentRequest(uint256 interestRate, uint256 deadline) external;
    function openCardWithCommitmentConfirmation(
        uint256 interestRate,
        uint256 deadline,
        bytes32 commitment,
        bytes memory signature
    ) external;
    function closeCard(address holder, uint256 index) external;
    function increaseCreditLimit(address holder, uint256 index, uint256 amount) external;
    function decreaseCreditLimit(address holder, uint256 index, uint256 amount) external;
    function getCardCount(address holder) external view returns (uint256);
    function getCardInfo(address holder, uint256 index) external view returns (CardInfo);
}
