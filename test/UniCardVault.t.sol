// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";
import {PausableUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";

import {UniCardVault} from "../src/core/UniCardVault.sol";
import {Errors} from "../src/libraries/Errors.sol";

contract MockUSDU is ERC20 {
    constructor() ERC20("Mock USDU", "USDU") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}

contract UniCardVaultTest is Test {
    using ECDSA for bytes32;

    UniCardVault public vault;
    MockUSDU public usdu;
    address public admin = makeAddr("admin");
    address public user1 = makeAddr("user1");
    address public user2 = makeAddr("user2");
    string public constant CARD_ID = "CARD_001";

    event Deposit(string indexed cardId, address indexed holder, uint256 amount);
    event Withdraw(string indexed cardId, address indexed holder, uint256 amount);

    function setUp() public {
        // Deploy USDU mock
        usdu = new MockUSDU();

        // Deploy proxy and implementation
        bytes memory initData = abi.encodeCall(UniCardVault.initialize, (admin, address(usdu)));
        address proxy = Upgrades.deployTransparentProxy("UniCardVault.sol", admin, initData);
        vault = UniCardVault(payable(proxy));

        // Fund users with USDU
        usdu.mint(user1, 1000 ether);
        usdu.mint(user2, 1000 ether);

        // Approve vault to spend USDU
        vm.startPrank(user1);
        usdu.approve(address(vault), type(uint256).max);
        vm.stopPrank();

        vm.startPrank(user2);
        usdu.approve(address(vault), type(uint256).max);
        vm.stopPrank();
    }

    function test_Deposit() public {
        uint256 amount = 100 ether;

        vm.expectEmit(true, true, false, true);
        emit Deposit(CARD_ID, user1, amount);

        vm.prank(user1);
        vault.deposit(CARD_ID, amount);

        (address holder, uint256 balance, bool initialized) = vault.cardAccounts(CARD_ID);
        assertEq(holder, user1);
        assertEq(balance, amount);
        assertTrue(initialized);
        assertEq(usdu.balanceOf(address(vault)), amount);
    }

    function test_MultipleDeposits() public {
        uint256 amount1 = 100 ether;
        uint256 amount2 = 50 ether;

        vm.startPrank(user1);
        vault.deposit(CARD_ID, amount1);
        vault.deposit(CARD_ID, amount2);
        vm.stopPrank();

        (address holder, uint256 balance,) = vault.cardAccounts(CARD_ID);
        assertEq(holder, user1);
        assertEq(balance, amount1 + amount2);
        assertEq(usdu.balanceOf(address(vault)), amount1 + amount2);
    }

    function test_Withdraw() public {
        uint256 depositAmount = 100 ether;
        uint256 withdrawAmount = 60 ether;

        // First deposit
        vm.prank(user1);
        vault.deposit(CARD_ID, depositAmount);

        vm.expectEmit(true, true, false, true);
        emit Withdraw(CARD_ID, user1, withdrawAmount);

        // Then withdraw
        vm.prank(user1);
        vault.withdraw(CARD_ID, withdrawAmount);

        (address holder, uint256 balance,) = vault.cardAccounts(CARD_ID);
        assertEq(holder, user1);
        assertEq(balance, depositAmount - withdrawAmount);
        assertEq(usdu.balanceOf(address(vault)), depositAmount - withdrawAmount);
    }

    function test_FailWithdraw_InsufficientBalance() public {
        uint256 depositAmount = 100 ether;
        uint256 withdrawAmount = 150 ether;

        vm.prank(user1);
        vault.deposit(CARD_ID, depositAmount);

        vm.expectRevert(Errors.UNICARD_VAULT_INSUFFICIENT_BALANCE.selector);

        vm.prank(user1);
        vault.withdraw(CARD_ID, withdrawAmount);
    }

    function test_FailWithdraw_UnInitializedCard() public {
        vm.expectRevert(Errors.UNICARD_VAULT_CARD_NOT_INITIALIZED.selector);

        vm.prank(user1);
        vault.withdraw("NONEXISTENT_CARD", 100 ether);
    }

    function test_FailWithdraw_InvalidHolder() public {
        uint256 amount = 100 ether;

        vm.prank(user1);
        vault.deposit(CARD_ID, amount);

        vm.expectRevert(Errors.UNICARD_VAULT_INVALID_HOLDER.selector);

        vm.prank(user2);
        vault.withdraw(CARD_ID, amount);
    }

    function test_Pause() public {
        vm.prank(admin);
        vault.togglePause(true);

        vm.expectRevert(PausableUpgradeable.EnforcedPause.selector);

        vm.prank(user1);
        vault.deposit(CARD_ID, 100 ether);
    }
}
