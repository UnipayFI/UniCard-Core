// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {CardStatus} from "../libraries/CardStatus.sol";

interface IUniCardVault {
    event Deposit(bytes32 indexed key, address indexed holder, uint256 indexed nonce, uint256 amount);

    function deposit(address holder, uint256 nonce, uint256 amount) external;
    function balances(bytes32 key) external view returns (uint256);
}
