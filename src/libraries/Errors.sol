pragma solidity ^0.8.0;

library Errors {
    // UniCardRegistry
    error UNICARD_REGISTRY_USER_ALREADY_HAS_COMMITMENT();
    error UNICARD_REGISTRY_COMMITMENT_EXPIRED();
    error UNICARD_REGISTRY_DEADLINE_MUST_BE_IN_THE_FUTURE();
    error UNICARD_REGISTRY_INTEREST_RATE_TOO_HIGH();
    error UNICARD_REGISTRY_AMOUNT_MUST_BE_GREATER_THAN_ZERO();
    error UNICARD_REGISTRY_PAYMENT_TOKEN_NOT_ALLOWED();
    error UNICARD_REGISTRY_NONCE_MISMATCH();
    error UNICARD_REGISTRY_REQUEST_TX_HASH_EMPTY();
    error UNICARD_REGISTRY_VAULT_NOT_ALLOWED();
    error UNICARD_REGISTRY_REQUEST_TX_HASH_ALREADY_USED();
    error UNICARD_REGISTRY_INVALID_SIGNATURE();
}
