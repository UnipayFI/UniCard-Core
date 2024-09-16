pragma solidity ^0.8.0;

library Errors {
    string public constant CREDIT_CARD_CENTER_USER_ALREADY_HAS_COMMITMENT =
        "CreditCardCenter: User already has a commitment";
    string public constant CREDIT_CARD_CENTER_DEADLINE_MUST_BE_IN_THE_FUTURE =
        "CreditCardCenter: Deadline must be in the future";
    string public constant CREDIT_CARD_CENTER_INTEREST_RATE_TOO_HIGH = "CreditCardCenter: Interest rate is too high";
    string public constant CREDIT_CARD_CENTER_COMMITMENT_DOES_NOT_EXIST = "CreditCardCenter: Commitment does not exist";
    string public constant CREDIT_CARD_CENTER_INVALID_SIGNATURE = "CreditCardCenter: Invalid signature";
    string public constant CREDIT_CARD_CENTER_USER_DOES_NOT_HAVE_ANY_CARDS =
        "CreditCardCenter: User does not have any cards";
    string public constant CREDIT_CARD_CENTER_AMOUNT_MUST_BE_GREATER_THAN_ZERO =
        "CreditCardCenter: Amount must be greater than zero";
    string public constant CREDIT_CARD_CENTER_PAYMENT_AMOUNT_TOO_HIGH = "CreditCardCenter: Payment amount is too high";
}
