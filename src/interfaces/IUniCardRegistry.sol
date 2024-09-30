pragma solidity ^0.8.0;

interface IUniCardRegistry {
   struct Commitment {
        address holder;
        uint256 interestRate;
        uint256 deadline;
        bytes32 hashMessage;
    }

    event CardOpenRequest(
        address indexed holder,
        uint256 indexed interestRate,
        uint256 indexed deadline,
        bytes32 commitment
    );
    event CardOpenConfirmation(
        address indexed holder,
        address indexed card,
        uint256 indexed index,
        uint256 interestRate,
        uint256 deadline,
        bytes32 commitment,
        bytes referralCode
    );
    event CreditLimitIncreased(address indexed holder, uint256 indexed index, uint256 amount);
    event CreditLimitDecreased(address indexed holder, uint256 indexed index, uint256 amount);
    event InterestRateUpdated(uint256 indexed index, uint256 interestRate);

    function hasControllerRole(address anAddress) external view returns (bool);
    function hasAdminRole(address anAddress) external view returns (bool);
}
