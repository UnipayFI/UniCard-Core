// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {VmSafe} from "forge-std/Vm.sol";
import {UniCardRegistry} from "../src/core/UniCardRegistry.sol";
import {Errors} from "../src/libraries/Errors.sol";

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
    VmSafe.Wallet public adminWallet;
    address public admin;
    uint256 public adminPrivateKey;
    address public user1 = makeAddr("user1");
    address public user2 = makeAddr("user2");
    address public vault = makeAddr("vault");
    uint256 interestRate = 50000;
    uint256 public deadline = block.timestamp + 1 days;

    function setUp() public {
        (adminPrivateKey, admin) = makeAdminWallet();
        console.log(adminPrivateKey);
        console.logAddress(admin);
        mockToken = new MockToken("MockToken", "MTK");
        uniCardRegistry = new UniCardRegistry(admin);
        vm.startPrank(admin);
        uniCardRegistry.grantRole(uniCardRegistry.CONTROLLER_ROLE(), admin);
        uniCardRegistry.grantRole(uniCardRegistry.ALLOWED_TOKEN_PAYMENT(), address(mockToken));
        uniCardRegistry.grantRole(uniCardRegistry.UNICARD_VAULT_ROLE(), vault);
        vm.stopPrank();

        assertTrue(uniCardRegistry.hasControllerRole(admin));
        assertTrue(uniCardRegistry.hasRole(uniCardRegistry.ALLOWED_TOKEN_PAYMENT(), address(mockToken)));
        assertTrue(uniCardRegistry.hasRole(uniCardRegistry.UNICARD_VAULT_ROLE(), vault));
    }

    function makeAdminWallet() internal returns (uint256 privateKey, address walletAddr) {
        string memory mnemonic = "test test test test test test test test test test test junk";
        privateKey = vm.deriveKey(mnemonic, 1);
        walletAddr = vm.addr(privateKey);
        adminWallet = vm.createWallet(privateKey, "admin");
        return (privateKey, walletAddr);
    }

    function makeTestWallet() internal returns (uint256 privateKey, address walletAddr) {
        string memory mnemonic = "test test test test test test test test test test test junk";
        privateKey = vm.deriveKey(mnemonic, 2);
        walletAddr = vm.addr(privateKey);
        return (privateKey, walletAddr);
    }

     function testOpenCardRequestWithInvalidToken() public {
        address invalidToken = address(0x1234);
        vm.prank(user1);
        vm.expectRevert(Errors.UNICARD_REGISTRY_PAYMENT_TOKEN_NOT_ALLOWED.selector);
        uniCardRegistry.openCardRequest(user1, invalidToken, interestRate, deadline, "GS95278", "inviteCode", "referralCode");
    }

    function testOpenCardRequestInvalidInterestRate() public {
        uint256 invalidInterestRate = 1e6; // 100%
        vm.prank(user1);
        vm.expectRevert(Errors.UNICARD_REGISTRY_INTEREST_RATE_TOO_HIGH.selector);
        uniCardRegistry.openCardRequest(
            user1,
            address(mockToken),
            invalidInterestRate,
            deadline,
            "GS95278",
            "inviteCode",
            "referralCode"
        );
    }

    function testOpenCardRequestInvalidDeadline() public {
        uint256 invalidDeadline = block.timestamp - 1;
        vm.prank(user1);
        vm.expectRevert(Errors.UNICARD_REGISTRY_DEADLINE_MUST_BE_IN_THE_FUTURE.selector);
        uniCardRegistry.openCardRequest(
            user1,
            address(mockToken),
            interestRate,
            invalidDeadline,
            "GS95278",
            "inviteCode",
            "referralCode"
        );
    }

     function testOpenCardRequestSuccess() public {
        vm.prank(user1);
        uniCardRegistry.openCardRequest(
            user1,
            address(mockToken),
            interestRate,
            deadline,
            "GS95278",
            "inviteCode",
            "referralCode"
        );

        uint256 nonce = uniCardRegistry.nonces(user1);
        bytes32 commitment = keccak256(
            abi.encodePacked(
                user1,
                address(mockToken),
                nonce,
                interestRate,
                deadline,
                "GS95278"
            )
        );

        UniCardRegistry.Commitment memory commitmentData = uniCardRegistry.commitments(commitment);
        assertEq(commitmentData.holder, user1);
        assertEq(commitmentData.paymentToken, address(mockToken));
        assertEq(commitmentData.interestRate, interestRate);
        assertEq(commitmentData.deadline, deadline);
        assertEq(commitmentData.nonce, nonce);
        assertEq(commitmentData.productCode, "GS95278");
    }

     function testOpenCardConfirmationSuccess() public {
        // First, create a request
        vm.prank(user1);
        uniCardRegistry.openCardRequest(
            user1,
            address(mockToken),
            interestRate,
            deadline,
            "GS95278",
            "inviteCode",
            "referralCode"
        );

        // Prepare confirmation data
        uint256 amount = 1000;
        uint256 nonce = uniCardRegistry.nonces(user1);
        bytes32 commitment = keccak256(
            abi.encodePacked(
                user1,
                address(mockToken),
                nonce,
                interestRate,
                deadline,
                "GS95278"
            )
        );
        bytes32 message = keccak256(abi.encodePacked("\x19Unipay Signed Message:\n32", commitment));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(adminPrivateKey, message);
        bytes memory signature = abi.encodePacked(r, s, v);

        // Mint token to user1
        vm.prank(user1);
        mockToken.mint(user1, amount);
        // Approve token transfer
        vm.prank(user1);
        mockToken.approve(address(uniCardRegistry), amount);

        // Perform confirmation
        vm.prank(user1);
        uniCardRegistry.openCardConfirmation(
            user1,
            address(mockToken),
            interestRate,
            nonce,
            deadline,
            amount,
            vault,
            "GS95278",
            signature,
            "0x1234567890" // requestTxHash
        );

        // Check confirmation storage
        bytes32 key = uniCardRegistry.confirmationKey(user1, nonce);
        UniCardRegistry.Confirmation memory confirmationData = uniCardRegistry.confirmations(key);
        assertEq(confirmationData.holder, user1);
        assertEq(confirmationData.paymentToken, address(mockToken));
        assertEq(confirmationData.nonce, nonce);
        assertEq(confirmationData.interestRate, interestRate);
        assertEq(confirmationData.commitment, commitment);
        assertEq(confirmationData.requestTxHash, "0x1234567890");
     }

     function testOpenCardConfirmationInvalidSignature() public {
        vm.prank(user1);
        uniCardRegistry.openCardRequest(
            user1,
            address(mockToken),
            interestRate,
            deadline + 1008611,
            "GS95278",
            "inviteCode",
            "referralCode"
        );

        // Prepare confirmation data
        uint256 amount = 1000;
        uint256 nonce = uniCardRegistry.nonces(user1);
        bytes32 commitment = keccak256(
            abi.encodePacked(
                user1,
                address(mockToken),
                nonce,
                interestRate,
                deadline,
                "GS95278"
            )
        );

        (uint256 testPrivateKey, address testWallet) = makeTestWallet();
        bytes32 message = keccak256(abi.encodePacked("\x19Unipay Signed Message:\n32", commitment));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(testPrivateKey, message);
        bytes memory invalidSignature = abi.encodePacked(r, s, v);

        vm.prank(user1);
        vm.expectRevert(Errors.UNICARD_REGISTRY_INVALID_SIGNATURE.selector);
        uniCardRegistry.openCardConfirmation(
            user1,
            address(mockToken),
            interestRate,
            nonce,
            deadline + 1008611,
            amount,
            vault,
            "GS95278",
            invalidSignature,
            "0x1234567890" // requestTxHash
        );
    }
}
