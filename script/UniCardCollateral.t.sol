// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "forge-std/console.sol";
import {UniCardCollateral} from "../src/core/UniCardCollateral.sol";

contract UniCardCollateralBorrowScript is Script {
    uint256 holderPrivateKey;
    address holder;

    UniCardCollateral uniCardCollateral;

    function setUp() public {
        holderPrivateKey = vm.envUint("HOLDER_PRIVATE_KEY");
        holder = vm.addr(holderPrivateKey);
        uniCardCollateral = UniCardCollateral(payable(vm.envAddress("UNICARD_COLLATERAL")));
    }

    function run() public {
        vm.startBroadcast(holderPrivateKey);

        uint256 borrow_amount = vm.envUint("BORROW_AMOUNT");
        uint256 collateral_amount = vm.envUint("COLLATERAL_AMOUNT");
        uniCardCollateral.borrow{value: collateral_amount}(borrow_amount);

        vm.stopBroadcast();
    }
}
