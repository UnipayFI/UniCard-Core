// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract USDU is ERC20Permit {
    public constant NAME = "USDU";
    public constant SYMBOL = "USDU";
    public constant DECIMALS = 18;

    constructor() ERC20Permit(NAME) ERC20(NAME, SYMBOL) {}
}
