// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {IUniCardDeploy} from "../interfaces/IUniCardDeploy.sol";

import {UniCard} from "./UniCard.sol";

// @title UniCardDeploy
// @author UniPay
// @notice This contract is used to deploy UniCards
abstract contract UniCardDeploy is IUniCardDeploy {
    Parameters public override parameters;

    function deploy(
        address aRegistry,
        address aCreator,
        uint256 anInterestRate,
        uint256 anIndex,
        address aPaymentToken,
        bytes32 aCommitment
    ) internal returns (address aCard) {
        parameters = Parameters({
            registry: aRegistry,
            creator: aCreator,
            interestRate: anInterestRate,
            index: anIndex,
            paymentToken: aPaymentToken,
            commitment: aCommitment
        });
        aCard = address(new UniCard{salt: keccak256(abi.encode(aRegistry, anIndex))}());
        delete parameters;
    }
}