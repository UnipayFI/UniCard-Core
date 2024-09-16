pragma solidity ^0.8.0;

interface IUniCardRegistry {
    event CardOpenRequest(
        address indexed holder, uint256 indexed interestRate, uint256 indexed deadline, bytes32 commitment
    );
    event CardOpenConfirmation(
        address indexed holder, uint256 indexed interestRate, uint256 indexed deadline, bytes32 commitment
    );

    struct CardInfo {
        bytes32 commitment;
        uint256 interestRate;
        uint256 createdAt;
        uint256 updatedAt;
        uint256 creditLimit;
        address creator;
        address paymentToken;
    }

    function openCardRequest(uint256 interestRate, uint256 deadline) external;
    function openCardConfirmation(
        uint256 interestRate,
        uint256 deadline,
        bytes32 commitment,
        bytes memory signature
    ) external;
    function closeCard(address holder, uint256 index) external;
    function increaseCreditLimit(address holder, uint256 index, uint256 amount) external;
    function decreaseCreditLimit(address holder, uint256 index, uint256 amount) external;
    function getCardCount(address holder) external view returns (uint256);
    function getCardInfo(address holder, uint256 index) external view returns (CardInfo memory);
}
