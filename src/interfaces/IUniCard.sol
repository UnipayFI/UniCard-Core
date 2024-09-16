// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

interface IUniCard {
    struct Slot0 {
        // @notice The creator of the card
        address creator;
        // @notice The index of the card
        uint256 index;
        // @notice The interest rate of the card
        uint256 interestRate;
        // @notice The payment token of the card
        address paymentToken;
        // @notice The commitment of the card
        bytes32 commitment;
        // @notice The credit limit of the card
        uint256 creditLimit;
        // @notice The active status of the card
        bool active;
    }

    function registry() external view returns (address);

    function slot0() external view returns (
        address creator,
        uint256 index,
        uint256 interestRate,
        address paymentToken,
        bytes32 commitment,
        uint256 creditLimit,
        bool active
    );

    function increaseCreditLimit(address holder, uint256 amount) external;

    function decreaseCreditLimit(address holder, uint256 amount) external;

    function closeCard(address holder) external;

    function sweep(address to) external;

    function updateInterestRate(uint256 anInterestRate) external;
}