// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {CardStatus} from "../libraries/CardStatus.sol";

interface IUniCardRegistry {
    // Card
    struct Card {
        // The address of the card holder
        address holder;
        // The payment token of the card
        address paymentToken;
        // The nonce of the card
        uint256 nonce;
        // The amount of the card
        uint256 openCardAmount;
        // The product code of the card
        string productCode;
        // The invite code of the card
        string referralCode;
        // The status of the card
        CardStatus isActivated;
    }

    event CardOpenRequest(
        // The address of the card holder
        address indexed holder,
        // The payment token of the card
        address indexed paymentToken,
        // The nonce of the card
        uint256 indexed nonce,
        // The amount of the card
        uint256 amount,
        // The product code of the card
        string productCode,
        // The invite code of the card
        string referralCode,
    );

    event CardCloseRequest(
        // The address of the card holder
        address indexed holder,
        // The nonce of the card
        uint256 indexed nonce,
    );

    function getCardStatus(address cardAddress) external view returns (CardStatus);
    function hasControllerRole(address anAddress) external view returns (bool);
    function hasAdminRole(address anAddress) external view returns (bool);
}

interface IUniCardRegistryV2 {
    struct Commitment {
        string productCode;
        address holder;
        address paymentToken;
        uint256 nonce;
    }

    struct Confirmation {
        string productCode;
        address holder;
        address paymentToken;
        uint256 nonce;
        bytes32 commitment;
        string requestTxHash;
    }

    event CardOpenRequest(
        address indexed holder,
        address indexed paymentToken,
        uint256 indexed nonce,
        uint256 amount,
        string productCode,
        string inviteCode,
        string referralCode,
        bytes32 commitment
    );

    event CardOpenConfirmation(
        address indexed holder,
        address indexed paymentToken,
        uint256 nonce,
        bytes32 commitment,
        string requestTxHash
    );

    function commitments(bytes32 commitment) external view returns (Commitment memory);
    function confirmations(bytes32 confirmation) external view returns (Confirmation memory);
    function hasControllerRole(address anAddress) external view returns (bool);
    function hasAdminRole(address anAddress) external view returns (bool);
}
