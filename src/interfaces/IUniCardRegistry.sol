pragma solidity ^0.8.0;

interface IUniCardRegistry {
    struct Commitment {
        string productCode;
        address holder;
        address paymentToken;
        uint256 interestRate;
        uint256 deadline;
        uint256 nonce;
    }

    struct Confirmation {
        string productCode;
        address holder;
        address paymentToken;
        uint256 nonce;
        uint256 interestRate;
        bytes32 commitment;
        string requestTxHash;
    }

    event CardOpenRequest(
        address indexed holder,
        address indexed paymentToken,
        uint256 indexed nonce,
        uint256 interestRate,
        uint256 deadline,
        uint256 amount,
        string productCode,
        string inviteCode,
        string referralCode,
        bytes32 commitment
    );

    event CardOpenConfirmation(
        address indexed holder,
        address indexed paymentToken,
        address indexed vault,
        uint256 nonce,
        uint256 interestRate,
        uint256 deadline,
        bytes32 commitment,
        string requestTxHash
    );

    function commitments(bytes32 commitment) external view returns (Commitment memory);
    function confirmations(bytes32 confirmation) external view returns (Confirmation memory);
    function hasControllerRole(address anAddress) external view returns (bool);
    function hasAdminRole(address anAddress) external view returns (bool);
}
