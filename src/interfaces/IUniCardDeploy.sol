// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IUniCardDeploy {
    struct Parameters {
        address registry;
        address creator;
        uint256 index;
        uint256 interestRate;
        address paymentToken;
        bytes32 commitment;
    }  

    function parameters() external view returns (
        address registry,
        address creator,
        uint256 index,
        uint256 interestRate,
        address paymentToken,
        bytes32 commitment
    );
}