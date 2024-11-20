// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library Errors {
    // UniCardRegistry
    error UNICARD_REGISTRY_PAYMENT_TOKEN_NOT_ALLOWED();
    error UNICARD_REGISTRY_CARD_ALREADY_OPENED();
    error UNICARD_REGISTRY_CARD_ALREADY_DEACTIVATED();
    error UNICARD_REGISTRY_CARD_NOT_OPENED();
    error UNICARD_REGISTRY_INSUFFICIENT_NATIVE_TOKEN_AMOUNT();
    error UNICARD_REGISTRY_INSUFFICIENT_BALANCE();

    // UniCardVault
    error UNICARD_VAULT_INVALID_HOLDER();
    error UNICARD_VAULT_CARD_NOT_INITIALIZED();
    error UNICARD_VAULT_INSUFFICIENT_BALANCE();
    error UNICARD_VAULT_INVALID_CARD_ID();

    // UniCardCollateral
    error UNICARD_COLLATERAL_INVALID_ETH_AMOUNT();
    error UNICARD_COLLATERAL_ETH_NOT_NEEDED();
    error UNICARD_COLLATERAL_INSUFFICIENT_COLLATERAL_RATIO();
    error UNICARD_COLLATERAL_INSUFFICIENT_COLLATERAL();
    error UNICARD_COLLATERAL_DEBT_REDUCTION_EXCEEDS_CURRENT_DEBT();
    error UNICARD_COLLATERAL_INVALID_REPAY_TOKEN();
    error UNICARD_COLLATERAL_INVALID_MINT_CALLER();
    error UNICARD_COLLATERAL_EXCEEDS_ETH_VALUE();

    // UniCardCVProxy
    error UNICARD_CV_PROXY_INVALID_ETH_AMOUNT();
    error UNICARD_CV_PROXY_INVALID_BET_AMOUNT();
}
