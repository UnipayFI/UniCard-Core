// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {Errors} from "../libraries/Errors.sol";

contract USDU is ERC20Permit, Ownable {
    string public constant NAME = "USDU";
    string public constant SYMBOL = "USDU";
    uint8 public constant DECIMALS = 18;

    address public UNICARD_COLLATERAL;

    constructor(address anOwner) Ownable(anOwner) ERC20Permit(NAME) ERC20(NAME, SYMBOL) {}

    function setAddress(address anUniCardCollateral) external onlyOwner {
        UNICARD_COLLATERAL = anUniCardCollateral;
        _transferOwnership(address(0)); // disable ownership
    }

    function mint(address to, uint256 amount) external {
        if (_msgSender() != UNICARD_COLLATERAL) {
            revert Errors.UNICARD_COLLATERAL_INVALID_MINT_CALLER();
        }
        _mint(to, amount);
    }
}
