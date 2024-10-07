// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// @title mUSDC
// @author UniPay
// @notice This contract is used to mock USDC
contract mUSDC is ERC20 {
    address public owner;

    constructor(address anOwner) ERC20("mUSDC", "mUSDC") {
        owner = anOwner;
        _mint(owner, 100000000 ether);
    }

    function mint(address to, uint256 amount) external {
        require(msg.sender == owner, "Only owner can mint");
        _mint(to, amount);
    }
}   