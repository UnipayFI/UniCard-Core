// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {USDU} from "../src/core/USDU.sol";

contract USDUSetCollateralScript is Script {
    uint256 deployerPrivateKey;
    address deployer;

    USDU usdu;

    function setUp() public {
        deployerPrivateKey = vm.envUint("DEPLOYER_PRIVATE_KEY");
        deployer = vm.addr(deployerPrivateKey);
        usdu = USDU(vm.envAddress("USDU"));
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);
        usdu.setAddress(vm.envAddress("UNICARD_COLLATERAL"));
        vm.stopBroadcast();
    }
}

contract USDUApproveScript is Script {
    uint256 deployerPrivateKey;
    address deployer;

    USDU usdu;

    function setUp() public {
        deployerPrivateKey = vm.envUint("HOLDER_PRIVATE_KEY");
        deployer = vm.addr(deployerPrivateKey);
        usdu = USDU(vm.envAddress("USDU"));
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);
        address unicardVault = vm.envAddress("UNICARD_VAULT");
        usdu.approve(unicardVault, type(uint256).max);
        vm.stopBroadcast();
    }
}