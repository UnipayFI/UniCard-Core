pragma solidity ^0.8.0;

library Errors {
    // UniCardRegistry
    error UNICARD_REGISTRY_USER_ALREADY_HAS_COMMITMENT();

    string public constant UNICARD_REGISTRY_COMMITMENT_EXPIRED = "UniCardRegistry: Commitment expired";
    string public constant UNICARD_REGISTRY_DEADLINE_MUST_BE_IN_THE_FUTURE =
        "UniCardRegistry: Deadline must be in the future";
    string public constant UNICARD_REGISTRY_INTEREST_RATE_TOO_HIGH = "UniCardRegistry: Interest rate is too high";
    string public constant UNICARD_REGISTRY_COMMITMENT_DOES_NOT_EXIST = "UniCardRegistry: Commitment does not exist";
    string public constant UNICARD_REGISTRY_INVALID_SIGNATURE = "UniCardRegistry: Invalid signature";
    string public constant UNICARD_REGISTRY_USER_DOES_NOT_HAVE_ANY_CARDS =
        "UniCardRegistry: User does not have any cards";
    string public constant UNICARD_REGISTRY_AMOUNT_MUST_BE_GREATER_THAN_ZERO =
        "UniCardRegistry: Amount must be greater than zero";
    string public constant UNICARD_REGISTRY_PAYMENT_AMOUNT_TOO_HIGH = "UniCardRegistry: Payment amount is too high";
    string public constant UNICARD_REGISTRY_CARD_ALREADY_OPENED = "UniCardRegistry: Card already opened";
    string public constant UNICARD_REGISTRY_CARD_DOES_NOT_EXIST = "UniCardRegistry: Card does not exist";
    string public constant UNICARD_REGISTRY_PAYMENT_TOKEN_NOT_ALLOWED = "UniCardRegistry: Payment token not allowed";
    string public constant UNICARD_REGISTRY_TX_HASH_ALREADY_USED = "UniCardRegistry: Tx hash already used";

    // UniCard
    string public constant UNICARD_NOT_CONTROLLER = "UniCard: Not controller";
    string public constant UNICARD_INVALID_REGISTRY = "UniCard: Invalid registry";
    string public constant UNICARD_NOT_REGISTRY = "UniCard: Not registry";
    string public constant UNICARD_NOT_ADMIN = "UniCard: Not admin";
    string public constant UNICARD_INVALID_INTEREST_RATE = "UniCard: Invalid interest rate";
    string public constant UNICARD_CREDIT_LIMIT_TOO_HIGH = "UniCard: Credit limit too high";
    string public constant UNICARD_CREATOR_MISMATCH = "UniCard: Creator mismatch";
    string public constant UNICARD_NEED_TO_CLOSE_CARD_FIRST = "UniCard: Need to close card first";
    string public constant UNICARD_CARD_IS_NOT_ACTIVE = "UniCard: Card is not active";
}
