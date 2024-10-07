// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {UniCardRegistry} from "../src/core/UniCardRegistry.sol";

// @title DeployUniCardRegistryScript
// @author UniPay
// @notice This script is used to deploy a UniCardRegistry
contract DeployUniCardRegistryScript is Script {
    uint256 deployerPrivateKey;
    address deployer;

    address anPaymentToken;
    address anAdmin;

    UniCardRegistry uniCardRegistry;

    function setUp() public {
        deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        deployer = vm.addr(deployerPrivateKey);

        anPaymentToken = vm.envAddress("PAYMENT_TOKEN");
        anAdmin = vm.envAddress("ADMIN");
        if (anAdmin == address(0)) {
            anAdmin = deployer;
        }
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);
        uniCardRegistry = new UniCardRegistry(anAdmin, anPaymentToken);
        vm.stopBroadcast();
        console.log("UniCardRegistry deployed at", address(uniCardRegistry));
    }
}