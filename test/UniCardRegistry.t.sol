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
        vm.stopPrank();

        assertTrue(uniCardRegistry.hasControllerRole(admin));
        assertTrue(uniCardRegistry.hasRole(uniCardRegistry.ALLOWED_TOKEN_PAYMENT(), address(mockToken)));
    }

    function makeAdminWallet() internal returns (uint256 privateKey, address walletAddr) {
        string memory mnemonic = "test test test test test test test test test test test junk";
        privateKey = vm.deriveKey(mnemonic, 1);
        walletAddr = vm.addr(privateKey);
        adminWallet = vm.createWallet(privateKey, "admin");
        return (privateKey, walletAddr);
    }

    function testOpenCardRequest() public {
        vm.prank(user1);
        uniCardRegistry.openCardRequest(user1, address(mockToken), interestRate, deadline, "", "", "");
        (
            address _holder,
            address _paymentToken,
            uint256 _interestRate,
            uint256 _deadline,
            bytes memory productCode,
            bytes memory inviteCode,
            bytes memory referralCode,
            bytes32 _hashMessage
        ) = uniCardRegistry.userCommitment(user1);
        assertEq(_holder, user1);
        assertEq(_paymentToken, address(mockToken));
        assertEq(_interestRate, interestRate);
        assertEq(_deadline, deadline);
        assertEq(_hashMessage, keccak256(abi.encodePacked(user1, address(mockToken), interestRate, deadline)));
    }

    function testOpenCardConfirmation() public {

        vm.prank(user2);
        uniCardRegistry.openCardRequest(user2, address(mockToken), interestRate, deadline, "", "", "");
        (
            address _holder,
            address _paymentToken,
            uint256 _interestRate,
            uint256 _deadline,
            bytes memory productCode,
            bytes memory inviteCode,
            bytes memory referralCode,
            bytes32 _hashMessage
        ) = uniCardRegistry.userCommitment(user2);
        assertEq(_holder, user2);
        assertEq(_paymentToken, address(mockToken));
        assertEq(_interestRate, interestRate);
        assertEq(_deadline, deadline);
        assertEq(_hashMessage, keccak256(abi.encodePacked(user2, address(mockToken), interestRate, deadline)));

        // Create a valid signature for the commitment
        bytes32 commitment = keccak256(abi.encodePacked(user2, address(mockToken), interestRate, deadline));
        console.logBytes32(commitment);
        console.logAddress(address(user2));
        console.logAddress(address(mockToken));
        console.logUint(interestRate);
        console.logUint(deadline);
        bytes32 message = keccak256(abi.encodePacked("\x19Unipay Signed Message:\n32", commitment));
        (uint8 v, bytes32 r, bytes32 s) = vm.sign(adminWallet, message);

        bytes memory signature = abi.encodePacked(r, s, v);
        console.logBytes(signature);

        // Confirm the card opening
        vm.prank(user2);
        uniCardRegistry.openCardConfirmation(user2, address(mockToken), _interestRate, _deadline, bytes(""), signature, "0xtxhash1");

        address card = uniCardRegistry.userCards(user2, 0);
        assertTrue(card != address(0));
    }
}
