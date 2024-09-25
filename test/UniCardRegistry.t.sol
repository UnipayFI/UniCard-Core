// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import {console} from "forge-std/console.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

import {UniCardRegistry} from "../src/core/UniCardRegistry.sol";
import {Errors} from "../src/libraries/Errors.sol";

contract MockToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}

contract UniCardRegistryTest is Test {
    UniCardRegistry public uniCardRegistry;
    MockToken public mockToken;
    address public admin = makeAddr("admin");
    address public user1 = makeAddr("user1");
    address public user2 = makeAddr("user2");

    function setUp() public {
        mockToken = new MockToken("MockToken", "MTK");
        uniCardRegistry = new UniCardRegistry(admin, address(mockToken));
    }

    function test_openCard() public {
        vm.startPrank(user1);
        uniCardRegistry.openCard(1000000000000000000, 1000000000000000000, 1718000000);
        vm.stopPrank();
    }
}