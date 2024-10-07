// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {mUSDC} from "../src/mock/mUSDC.sol";

// @title DeploymUSDCScript
// @author UniPay
// @notice This script is used to deploy a mUSDC
contract DeploymUSDCScript is Script {
    uint256 deployerPrivateKey;
    address deployer;

    mUSDC mockUSDC;

    function setUp() public {
        deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        deployer = vm.addr(deployerPrivateKey);
    }

    function run() public {
        vm.startBroadcast(deployerPrivateKey);
        mockUSDC = new mUSDC(deployer);
        vm.stopBroadcast();
        console.log("mUSDC deployed at", address(mockUSDC));
    }
}