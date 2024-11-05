// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {UniCardVault} from "../src/core/UniCardVault.sol";

contract UniCardVaultDepositScript is Script {
    uint256 holderPrivateKey;
    address holder;

    UniCardVault uniCardVault;

    function setUp() public {
        holderPrivateKey = vm.envUint("HOLDER_PRIVATE_KEY");
        holder = vm.addr(holderPrivateKey);
        uniCardVault = UniCardVault(payable(vm.envAddress("UNICARD_VAULT")));
    }

    function run() public {
        vm.startBroadcast(holderPrivateKey);
        string memory card_id = vm.envString("CARD_ID");
        uint256 amount = vm.envUint("DEPOSIT_AMOUNT");
        uniCardVault.deposit(card_id, amount);
        vm.stopBroadcast();
    }
}

contract UniCardVaultWithdrawScript is Script {
    uint256 holderPrivateKey;
    address holder;

    UniCardVault uniCardVault;

    function setUp() public {
        holderPrivateKey = vm.envUint("HOLDER_PRIVATE_KEY");
        holder = vm.addr(holderPrivateKey);
        uniCardVault = UniCardVault(payable(vm.envAddress("UNICARD_VAULT")));
    }

    function run() public {
        vm.startBroadcast(holderPrivateKey);
        string memory card_id = vm.envString("CARD_ID");
        uint256 amount = vm.envUint("WITHDRAW_AMOUNT");
        uniCardVault.withdraw(card_id, amount);
        vm.stopBroadcast();
    }
}
