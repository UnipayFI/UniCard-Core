// SPDX-License-Identifier: MIT

pragma solidity  ^0.8.0;

interface IStaderOracle {
    function exchangeRate() external view returns (uint256, uint256, uint256);
}
