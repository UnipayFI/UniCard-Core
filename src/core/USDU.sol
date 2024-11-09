// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {ERC20Upgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import {ERC20PermitUpgradeable} from "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import {Errors} from "../libraries/Errors.sol";

contract USDU is ERC20PermitUpgradeable, OwnableUpgradeable {
    string public constant NAME = "USDU";
    string public constant SYMBOL = "USDU";
    uint8 public constant DECIMALS = 18;

    address public UNICARD_COLLATERAL;

    // @notice Constructor for the UniCardRegistry
    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    // @notice Initialize the USDU
    // @param anOwner The address of the owner
    function initialize(address anOwner) public initializer {
        __Ownable_init(anOwner);
        __ERC20Permit_init(NAME);
        __ERC20_init(NAME, SYMBOL);
    }

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
