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

        anPaymentToken = address(vm.envAddress("PAYMENT_TOKEN"));
        anAdmin = vm.envAddress("ADMIN");
        if (anAdmin == address(0)) {
            anAdmin = deployer;
        }
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);
        uniCardRegistry = new UniCardRegistry(anAdmin);
        uniCardRegistry.grantRole(uniCardRegistry.ALLOWED_TOKEN_PAYMENT(), anPaymentToken);
        vm.stopBroadcast();
        console.log("UniCardRegistry deployed at", address(uniCardRegistry));
    }
}

// @title AddUniCardRegistryControllerScript
// @author UniPay
// @notice This script is used to add a controller to the UniCardRegistry
contract AddUniCardRegistryControllerScript is Script {
    uint256 deployerPrivateKey;
    address deployer;

    UniCardRegistry uniCardRegistry;

    function setUp() public {
        deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        deployer = vm.addr(deployerPrivateKey);

        uniCardRegistry = UniCardRegistry(vm.envAddress("UNICARD_REGISTRY"));
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);
        uniCardRegistry.grantRole(uniCardRegistry.CONTROLLER_ROLE(), vm.envAddress("ADD_CONTROLLER"));
        vm.stopBroadcast();
    }   
}

// @title OpenUniCardRequestScript
// @author UniPay
// @notice This script is used to open a request for a UniCard
contract OpenUniCardRequestScript is Script {
    uint256 deployerPrivateKey;
    address deployer;

    UniCardRegistry uniCardRegistry;

    address anHolder;
    uint256 anInterestRate;
    uint256 anDeadline;
    address anPaymentToken;
    function setUp() public {
        deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        deployer = vm.addr(deployerPrivateKey);

        uniCardRegistry = UniCardRegistry(vm.envAddress("UNICARD_REGISTRY"));

        anHolder = vm.envAddress("HOLDER");
        anInterestRate = vm.envUint("INTEREST_RATE");
        anDeadline = vm.envUint("DEADLINE");
        anPaymentToken = vm.envAddress("PAYMENT_TOKEN");
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);
        uniCardRegistry.openCardRequest(anHolder, anPaymentToken, anInterestRate, anDeadline);
        vm.stopBroadcast();
    }
}
