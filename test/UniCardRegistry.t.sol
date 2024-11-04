// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {VmSafe} from "forge-std/Vm.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";

import {UniCardRegistry} from "../src/core/UniCardRegistry.sol";
import {Errors} from "../src/libraries/Errors.sol";
import {Enums} from "../src/libraries/Enums.sol";

contract MockToken is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}

contract UniCardRegistryTest is Test {
    using ECDSA for bytes32;

    UniCardRegistry public uniCardRegistry;
    MockToken public mockToken;
    address public admin = makeAddr("admin");
    address public user1 = makeAddr("user1");
    address public user2 = makeAddr("user2");

    event CardOpenRequest(
        address indexed holder,
        // The payment token of the card
        address indexed paymentToken,
        // The nonce of the card
        uint256 indexed nonce,
        // The amount of the card
        uint256 amount,
        // The product code of the card
        string productCode,
        // The invite code of the card
        string inviteCode,
        // The referral code of the card
        string referralCode
    );

    event CardCloseRequest(address indexed holder, uint256 indexed nonce);

    function setUp() public {
        mockToken = new MockToken("MockToken", "MTK");
        // Deploy proxy and implementation
        bytes memory initData = abi.encodeCall(UniCardRegistry.initialize, (admin));
        address proxy = Upgrades.deployTransparentProxy("UniCardRegistry.sol", admin, initData);
        uniCardRegistry = UniCardRegistry(payable(proxy));

        vm.startPrank(admin);
        uniCardRegistry.grantRole(uniCardRegistry.CONTROLLER_ROLE(), admin);
        uniCardRegistry.grantRole(uniCardRegistry.ALLOWED_TOKEN_PAYMENT(), address(mockToken));
        uniCardRegistry.grantRole(uniCardRegistry.ALLOWED_TOKEN_PAYMENT(), uniCardRegistry.NATIVE_TOKEN());
        vm.stopPrank();

        // fund users
        vm.deal(user1, 100 ether);
        vm.deal(user2, 100 ether);

        mockToken.mint(user1, 1000 ether);
        mockToken.mint(user2, 1000 ether);

        vm.startPrank(user1);
        mockToken.approve(address(uniCardRegistry), type(uint256).max);
        vm.stopPrank();
        vm.startPrank(user2);
        mockToken.approve(address(uniCardRegistry), type(uint256).max);
        vm.stopPrank();
    }

    function test_OpenCardRequest_WithEth() public {
        uint256 amount = 1 ether;
        uint256 user1Nonce = 0;

        vm.expectEmit(true, true, true, true);
        emit CardOpenRequest(
            user1, uniCardRegistry.NATIVE_TOKEN(), user1Nonce, amount, "PRODUCT1", "INVITE1", "REFERRAL1"
        );

        vm.prank(user1);
        uniCardRegistry.openCardRequest{value: amount}(
            user1, uniCardRegistry.NATIVE_TOKEN(), amount, "PRODUCT1", "INVITE1", "REFERRAL1"
        );

        bytes32 key = keccak256(abi.encodePacked(user1, user1Nonce));
        (
            address holder,
            address paymentToken,
            uint256 nonce,
            uint256 openCardAmount,
            string memory productCode,
            string memory inviteCode,
            string memory referralCode,
            Enums.CardStatus status
        ) = uniCardRegistry.cards(key);

        assertEq(holder, user1);
        assertEq(paymentToken, uniCardRegistry.NATIVE_TOKEN());
        assertEq(nonce, user1Nonce);
        assertEq(openCardAmount, amount);
        assertEq(uint8(status), uint8(Enums.CardStatus.ACTIVATED));
        assertEq(address(uniCardRegistry).balance, amount);
        assertEq(productCode, "PRODUCT1");
        assertEq(inviteCode, "INVITE1");
        assertEq(referralCode, "REFERRAL1");
    }

    function test_OpenCardRequest_WithToken() public {
        uint256 amount = 100e18;
        uint256 user1Nonce = 0;

        vm.expectEmit(true, true, true, true);
        emit CardOpenRequest(user1, address(mockToken), user1Nonce, amount, "PRODUCT1", "INVITE1", "REFERRAL1");

        vm.prank(user1);
        uniCardRegistry.openCardRequest(user1, address(mockToken), amount, "PRODUCT1", "INVITE1", "REFERRAL1");

        bytes32 key = keccak256(abi.encodePacked(user1, user1Nonce));
        (
            address holder,
            address paymentToken,
            uint256 nonce,
            uint256 openCardAmount,
            string memory productCode,
            string memory inviteCode,
            string memory referralCode,
            Enums.CardStatus status
        ) = uniCardRegistry.cards(key);

        assertEq(holder, user1);
        assertEq(paymentToken, address(mockToken));
        assertEq(nonce, user1Nonce);
        assertEq(openCardAmount, amount);
        assertEq(uint8(status), uint8(Enums.CardStatus.ACTIVATED));
        assertEq(mockToken.balanceOf(address(uniCardRegistry)), amount);
        assertEq(productCode, "PRODUCT1");
        assertEq(inviteCode, "INVITE1");
        assertEq(referralCode, "REFERRAL1");
    }

    function test_OpenCardRequest_WithExcessEth() public {
        uint256 amount = 1 ether;
        uint256 excess = 0.5 ether;
        uint256 user1Nonce = 0;
        assertEq(address(uniCardRegistry).balance, 0);

        vm.expectEmit(true, true, true, true);
        emit CardOpenRequest(
            user1, uniCardRegistry.NATIVE_TOKEN(), user1Nonce, amount, "PRODUCT1", "INVITE1", "REFERRAL1"
        );

        vm.prank(user1);
        uniCardRegistry.openCardRequest{value: amount + excess}(
            user1, uniCardRegistry.NATIVE_TOKEN(), amount, "PRODUCT1", "INVITE1", "REFERRAL1"
        );

        assertEq(address(uniCardRegistry).balance, amount);
    }

    function test_CloseCardRequest() public {
        // First open a card
        uint256 user1Nonce = 0;
        uint256 amount = 1 ether;
        vm.prank(user1);
        uniCardRegistry.openCardRequest{value: amount}(
            user1, uniCardRegistry.NATIVE_TOKEN(), amount, "PRODUCT1", "INVITE1", "REFERRAL1"
        );

        uint256 initialBalance = user1.balance;

        vm.expectEmit(true, true, false, false);
        emit CardCloseRequest(user1, user1Nonce);

        // Close the card
        vm.prank(admin);
        uniCardRegistry.closeCardRequest(user1, user1Nonce);

        bytes32 key = keccak256(abi.encodePacked(user1, user1Nonce));
        (,,,,,,, Enums.CardStatus status) = uniCardRegistry.cards(key);

        assertEq(uint8(status), uint8(Enums.CardStatus.DEACTIVATED));
        assertLe(user1.balance, initialBalance + amount); // gas cost
    }

    function test_FailOpenCardRequest_UnallowedToken() public {
        MockToken unauthorizedToken = new MockToken("Unauthorized", "UTK");

        vm.startPrank(user1);
        vm.expectRevert(Errors.UNICARD_REGISTRY_PAYMENT_TOKEN_NOT_ALLOWED.selector);
        uniCardRegistry.openCardRequest(user1, address(unauthorizedToken), 100e18, "PRODUCT1", "INVITE1", "REFERRAL1");
        vm.stopPrank();
    }
}
