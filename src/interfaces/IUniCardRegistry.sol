// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Enums} from "../libraries/Enums.sol";

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
        string inviteCode;
        // The referral code of the card
        string referralCode;
        // The status of the card
        Enums.CardStatus status;
    }

    // The address of the card holder
    event CardOpenRequest(
        address holder,
        // The payment token of the card
        address paymentToken,
        // The nonce of the card
        uint256 nonce,
        // The amount of the card
        uint256 amount,
        // The product code of the card
        string productCode,
        // The invite code of the card
        string inviteCode,
        // The referral code of the card
        string referralCode
    );

    // The address of the card holder
    // The address of the card holder
    event CardCloseRequest(
        address holder,
        // The nonce of the card
        uint256 nonce
    );
}
