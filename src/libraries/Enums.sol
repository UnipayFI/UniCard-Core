// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library Enums {
    // CardStatus
    enum CardStatus {
        // The card is not opened yet
        UNOPENED,
        // The card is activated
        ACTIVATED,
        // The card is deactivated, so it cannot be used, user can close the card
        // and claim the funds
        DEACTIVATED
    }
}
