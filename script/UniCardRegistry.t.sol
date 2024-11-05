// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {UniCardRegistry} from "../src/core/UniCardRegistry.sol";

// @title AddUniCardRegistryControllerScript
// @author UniPay
// @notice This script is used to add a controller to the UniCardRegistry
contract UniCardRegistryOpenCardScript is Script {
    uint256 holderPrivateKey;
    address holder;

    UniCardRegistry uniCardRegistry;

    function setUp() public {
        holderPrivateKey = vm.envUint("HOLDER_PRIVATE_KEY");
        holder = vm.addr(holderPrivateKey);
        uniCardRegistry = UniCardRegistry(payable(vm.envAddress("UNICARD_REGISTRY")));
    }

    function run() public {
        vm.startBroadcast(holderPrivateKey);
        uniCardRegistry.openCardRequest{value: vm.envUint("AMOUNT")}(
            vm.envAddress("HOLDER"),
            vm.envAddress("PAYMENT_TOKEN"),
            vm.envUint("AMOUNT"),
            vm.envString("PRODUCT_CODE"),
            "REFERRAL_CODE",
            "INVITE_CODE"
        );
        vm.stopBroadcast();
    }
}
