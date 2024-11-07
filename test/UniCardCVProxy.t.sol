// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import {console} from "forge-std/console.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";

import {UniCardCVProxy} from "../src/core/UniCardCVProxy.sol";
import {UniCardCollateral} from "../src/core/UniCardCollateral.sol";
import {UniCardVault} from "../src/core/UniCardVault.sol";
import {IPriceFeed} from "../src/interfaces/IPriceFeed.sol";
import {IUniCardVault} from "../src/interfaces/IUniCardVault.sol";

contract MockUSDU is ERC20 {
    constructor() ERC20("USDU", "USDU") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}

contract MockPriceFeed is IPriceFeed {
    uint256 private price;

    constructor(uint256 initialPrice) {
        price = initialPrice;
    }

    function setPrice(uint256 newPrice) external {
        price = newPrice;
    }

    function lastGoodPrice() external view returns (uint256) {
        return price;
    }

    function setAddresses(address) external {}

    function fetchPrice() external view returns (uint256, bool) {
        return (price, true);
    }
}

contract UniCardCVProxyTest is Test {
    MockUSDU public usdu;
    MockPriceFeed public priceFeed;
    UniCardCVProxy public uniCardCVProxy;
    UniCardCollateral public uniCardCollateral;
    UniCardVault public uniCardVault;

    address public admin = makeAddr("admin");
    address public alice = makeAddr("alice");
    address public bob = makeAddr("bob");
    address public carol = makeAddr("carol");

    function setUp() public {
        usdu = new MockUSDU();
        priceFeed = new MockPriceFeed(2000e8);

        vm.startPrank(admin);
        // Deploy unicardCollateral and implementation
        bytes memory initData = abi.encodeCall(UniCardCollateral.initialize, (admin, address(usdu), address(priceFeed)));
        address proxy = Upgrades.deployTransparentProxy("UniCardCollateral.sol", admin, initData);
        uniCardCollateral = UniCardCollateral(payable(proxy));

        // Deploy unicardVault and implementation
        initData = abi.encodeCall(UniCardVault.initialize, (admin, address(usdu)));
        proxy = Upgrades.deployTransparentProxy("UniCardVault.sol", admin, initData);
        uniCardVault = UniCardVault(payable(proxy));

        // Deploy unicardCVProxy and implementation
        initData = abi.encodeCall(
            UniCardCVProxy.initialize, (admin, address(uniCardCollateral), address(uniCardVault), address(usdu))
        );
        proxy = Upgrades.deployTransparentProxy("UniCardCVProxy.sol", admin, initData);
        uniCardCVProxy = UniCardCVProxy(payable(proxy));

        uniCardVault.grantRole(uniCardVault.UNICARD_CV_PROXY_ROLE(), address(uniCardCVProxy));
        uniCardCollateral.grantRole(uniCardCollateral.UNICARD_CV_PROXY_ROLE(), address(uniCardCVProxy));
        vm.stopPrank();

        // deal ETH to the alice and admin
        vm.deal(alice, 103 ether);
        vm.deal(admin, 103 ether);
        vm.deal(bob, 103 ether);
        vm.deal(carol, 103 ether);
    }

    function test_borrowAndDeposit() public {
        string memory cardId = "card1";
        uint256 depositAmount = 1 ether;
        uint256 ethPrice = priceFeed.lastGoodPrice();

        uint256 maxBorrowAmount = (depositAmount * 1e18 * ethPrice) / uniCardCollateral.MIN_COLLATERAL_RATIO() / 1e8;
        console.log("maxBorrowAmount");
        console.log(maxBorrowAmount);

        vm.startPrank(alice);
        uniCardCVProxy.borrowAndDeposit{value: depositAmount}(cardId, maxBorrowAmount);
        vm.stopPrank();

        uint256 expectedBorrow = uniCardCVProxy.getMaxBorrowAmount(depositAmount, ethPrice);
        IUniCardVault.Account memory account = uniCardVault.cardAccounts(cardId);
        assertEq(account.balance, expectedBorrow);
        assertEq(account.holder, alice);
    }

    function test_borrowAndDeposit_MultipleUsers() public {
        string memory card1 = "card1";
        string memory card2 = "card2";
        uint256 amount1 = 1 ether;
        uint256 amount2 = 2 ether;

        vm.startPrank(alice);
        uniCardCVProxy.borrowAndDeposit{value: amount1}(
            card1, uniCardCVProxy.getMaxBorrowAmount(amount1, priceFeed.lastGoodPrice())
        );
        vm.stopPrank();

        vm.startPrank(bob);
        uniCardCVProxy.borrowAndDeposit{value: amount2}(
            card2, uniCardCVProxy.getMaxBorrowAmount(amount2, priceFeed.lastGoodPrice())
        );
        vm.stopPrank();

        IUniCardVault.Account memory account1 = uniCardVault.cardAccounts(card1);
        IUniCardVault.Account memory account2 = uniCardVault.cardAccounts(card2);

        assertEq(account1.balance, uniCardCVProxy.getMaxBorrowAmount(amount1, priceFeed.lastGoodPrice()));
        assertEq(account1.holder, alice);
        assertEq(account2.balance, uniCardCVProxy.getMaxBorrowAmount(amount2, priceFeed.lastGoodPrice()));
        assertEq(account2.holder, bob);
    }

    function test_borrowAndDeposit_SameCardMultipleDeposits() public {
        string memory cardId = "card1";
        uint256 amount1 = 1 ether;
        uint256 amount2 = 0.5 ether;

        vm.startPrank(alice);
        uniCardCVProxy.borrowAndDeposit{value: amount1}(
            cardId, uniCardCVProxy.getMaxBorrowAmount(amount1, priceFeed.lastGoodPrice())
        );
        uniCardCVProxy.borrowAndDeposit{value: amount2}(
            cardId, uniCardCVProxy.getMaxBorrowAmount(amount2, priceFeed.lastGoodPrice())
        );
        vm.stopPrank();

        IUniCardVault.Account memory account = uniCardVault.cardAccounts(cardId);
        assertEq(
            account.balance,
            uniCardCVProxy.getMaxBorrowAmount(amount1, priceFeed.lastGoodPrice())
                + uniCardCVProxy.getMaxBorrowAmount(amount2, priceFeed.lastGoodPrice())
        );
        assertEq(account.holder, alice);
    }

    function testFail_borrowAndDeposit_ZeroAmount() public {
        uniCardCVProxy.borrowAndDeposit{value: 0}("card1", 0);
    }

    function testFail_borrowAndDeposit_WhenPaused() public {
        vm.startPrank(admin);
        uniCardCVProxy.togglePause(true);
        vm.stopPrank();

        vm.startPrank(alice);
        uniCardCVProxy.borrowAndDeposit{value: 1 ether}(
            "card1", uniCardCVProxy.getMaxBorrowAmount(1 ether, priceFeed.lastGoodPrice())
        );
        vm.stopPrank();
    }

    function test_borrowAndDeposit_DifferentPrices() public {
        string memory cardId = "card1";
        uint256 amount = 1 ether;

        uint256[] memory prices = new uint256[](3);
        prices[0] = 2000e8; // $2000
        prices[1] = 1500e8; // $1500
        prices[2] = 3000e8; // $3000

        address[] memory users = new address[](3);
        users[0] = alice;
        users[1] = bob;
        users[2] = carol;

        for (uint256 i = 0; i < prices.length; i++) {
            vm.startPrank(admin);
            priceFeed.setPrice(prices[i]);
            vm.stopPrank();

            string memory currentCard = string(abi.encodePacked(cardId, vm.toString(i)));

            vm.startPrank(users[i]);
            console.log("user");
            console.log(users[i]);
            console.log("maxBorrowAmount");
            console.log(uniCardCVProxy.getMaxBorrowAmount(amount, prices[i]));
            uniCardCVProxy.borrowAndDeposit{value: amount}(
                currentCard, uniCardCVProxy.getMaxBorrowAmount(amount, prices[i])
            );
            vm.stopPrank();

            IUniCardVault.Account memory account = uniCardVault.cardAccounts(currentCard);
            assertEq(account.balance, uniCardCVProxy.getMaxBorrowAmount(amount, prices[i]));
            assertEq(account.holder, users[i]);
        }
    }

    function testFail_borrowAndDeposit_InvalidCard() public {
        vm.startPrank(alice);
        uniCardCVProxy.borrowAndDeposit{value: 1 ether}(
            "", uniCardCVProxy.getMaxBorrowAmount(1 ether, priceFeed.lastGoodPrice())
        );
        vm.stopPrank();
    }

    function test_borrowAndDeposit_MaxAmount() public {
        string memory cardId = "card1";
        uint256 amount = 100 ether;

        vm.startPrank(alice);
        uniCardCVProxy.borrowAndDeposit{value: amount}(
            cardId, uniCardCVProxy.getMaxBorrowAmount(amount, priceFeed.lastGoodPrice())
        );
        vm.stopPrank();

        IUniCardVault.Account memory account = uniCardVault.cardAccounts(cardId);
        assertEq(account.balance, uniCardCVProxy.getMaxBorrowAmount(amount, priceFeed.lastGoodPrice()));
        assertEq(account.holder, alice);
    }
}
