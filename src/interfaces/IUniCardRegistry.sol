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
        CardStatus status;
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