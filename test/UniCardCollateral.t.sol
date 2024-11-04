// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Test.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {Upgrades} from "openzeppelin-foundry-upgrades/Upgrades.sol";
import {PausableUpgradeable} from "@openzeppelin/contracts-upgradeable/utils/PausableUpgradeable.sol";

import {UniCardCollateral} from "../src/core/UniCardCollateral.sol";
import {Errors} from "../src/libraries/Errors.sol";
import {IPriceFeed} from "../src/interfaces/IPriceFeed.sol";
import {IUniCardCollateral} from "../src/interfaces/IUniCardCollateral.sol";

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

contract MockRepayToken is ERC20 {
    constructor() ERC20("Repay Token", "RPT") {}

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}

contract UniCardCollateralTest is Test {
    UniCardCollateral public uniCardCollateral;
    MockUSDU public usdu;
    MockPriceFeed public priceFeed;
    MockRepayToken public repayToken;

    address public admin = makeAddr("admin");
    address public user1 = makeAddr("user1");
    address public user2 = makeAddr("user2");

    uint256 public constant ETH_PRICE = 2000e8; // $2000 per ETH

    event CollateralAdjusted(
        address indexed holder,
        uint256 collateralAmount,
        bool isCollateralIncrease,
        uint256 debtAmount,
        bool isDebtIncrease,
        address repayToken
    );

    function setUp() public {
        usdu = new MockUSDU();
        priceFeed = new MockPriceFeed(ETH_PRICE);
        repayToken = new MockRepayToken();

        // Deploy proxy and implementation
        bytes memory initData = abi.encodeCall(UniCardCollateral.initialize, (admin, address(usdu), address(priceFeed)));
        address proxy = Upgrades.deployTransparentProxy("UniCardCollateral.sol", admin, initData);
        uniCardCollateral = UniCardCollateral(payable(proxy));

        // Setup roles
        vm.startPrank(admin);
        uniCardCollateral.grantRole(uniCardCollateral.ALLOWED_REPAY_TOKEN(), address(repayToken));
        vm.stopPrank();

        // Fund users
        vm.deal(user1, 100 ether);
        vm.deal(user2, 100 ether);
        repayToken.mint(user1, 1000 ether);
        repayToken.mint(user2, 1000 ether);

        // Approve tokens
        vm.prank(user1);
        repayToken.approve(address(uniCardCollateral), type(uint256).max);
        vm.prank(user2);
        repayToken.approve(address(uniCardCollateral), type(uint256).max);
    }

    function test_Borrow() public {
        uint256 collateralAmount = 1 ether;
        uint256 borrowAmount = 1000 ether; // $1000 USDU

        vm.expectEmit(true, false, false, true);
        emit CollateralAdjusted(user1, collateralAmount, true, borrowAmount, true, uniCardCollateral.NATIVE_TOKEN());

        vm.prank(user1);
        uniCardCollateral.borrow{value: collateralAmount}(borrowAmount);

        assertEq(uniCardCollateral.collaterals(user1), collateralAmount);
        assertEq(uniCardCollateral.debts(user1), borrowAmount);
        assertEq(address(uniCardCollateral).balance, collateralAmount);
    }

    function test_Repay() public {
        // First borrow
        uint256 collateralAmount = 1 ether;
        uint256 borrowAmount = 1000e18;
        vm.prank(user1);
        uniCardCollateral.borrow{value: collateralAmount}(borrowAmount);

        // Then repay
        uint256 repayAmount = 500e18;
        vm.expectEmit(true, false, false, true);
        emit CollateralAdjusted(user1, 0, false, repayAmount, false, address(repayToken));

        vm.prank(user1);
        uniCardCollateral.repay(address(repayToken), repayAmount);

        assertEq(uniCardCollateral.debts(user1), borrowAmount - repayAmount);
        assertEq(repayToken.balanceOf(address(uniCardCollateral)), repayAmount);
    }

    function test_Adjust() public {
        uint256 collateralAmount = 1 ether;
        uint256 debtAmount = 1000e18;

        vm.startPrank(user1);
        uniCardCollateral.adjust{value: collateralAmount}(
            IUniCardCollateral.AdjustParams({
                collateralChange: collateralAmount,
                isCollateralIncrease: true,
                debtChange: debtAmount,
                isDebtIncrease: true,
                repayToken: uniCardCollateral.NATIVE_TOKEN()
            })
        );
        vm.stopPrank();
        assertEq(uniCardCollateral.collaterals(user1), collateralAmount);
        assertEq(uniCardCollateral.debts(user1), debtAmount);
        assertEq(address(uniCardCollateral).balance, collateralAmount);
    }

    function test_FailRepay_InvalidToken() public {
        // First borrow
        vm.prank(user1);
        uniCardCollateral.borrow{value: 1 ether}(1000e18);

        // Try to repay with unauthorized token
        MockRepayToken invalidToken = new MockRepayToken();

        vm.expectRevert(Errors.UNICARD_COLLATERAL_INVALID_REPAY_TOKEN.selector);

        vm.prank(user1);
        uniCardCollateral.repay(address(invalidToken), 500e18);
    }

    function test_FailAdjust_EthNotNeeded() public {
        IUniCardCollateral.AdjustParams memory params = IUniCardCollateral.AdjustParams({
            collateralChange: 0,
            isCollateralIncrease: false,
            debtChange: 1000e18,
            isDebtIncrease: true,
            repayToken: uniCardCollateral.NATIVE_TOKEN()
        });
        vm.expectRevert(Errors.UNICARD_COLLATERAL_ETH_NOT_NEEDED.selector);
        vm.prank(user1);
        uniCardCollateral.adjust{value: 1 ether}(params);
    }

    function test_Pause() public {
        vm.prank(admin);
        uniCardCollateral.togglePause(true);

        vm.expectRevert(PausableUpgradeable.EnforcedPause.selector);

        vm.prank(user1);
        uniCardCollateral.borrow{value: 1 ether}(2000e18);
    }

    function test_PriceImpact() public {
        // Initial price $2000, borrowing $1000
        // Initial ratio: (1 ETH * $2000) / $1000 = 200% > 110% (OK)
        vm.prank(user1);
        uniCardCollateral.borrow{value: 1 ether}(1000 ether);

        // Price drops to $900
        // New ratio with additional debt:
        // (1.5 ETH * $900) / ($1000 + $1000) = $1350 / $2000 = 67.5% < 110%
        priceFeed.setPrice(900e8);

        vm.startPrank(user1);
        IUniCardCollateral.AdjustParams memory params = IUniCardCollateral.AdjustParams({
            collateralChange: 0.5 ether,
            isCollateralIncrease: true,
            debtChange: 1000 ether,
            isDebtIncrease: true,
            repayToken: uniCardCollateral.NATIVE_TOKEN()
        });

        vm.expectRevert(Errors.UNICARD_COLLATERAL_INSUFFICIENT_COLLATERAL_RATIO.selector);
        uniCardCollateral.adjust{value: 0.5 ether}(params);

        assertEq(uniCardCollateral.collaterals(user1), 1 ether);
        assertEq(uniCardCollateral.debts(user1), 1000 ether);
        vm.stopPrank();
    }

    function test_PriceImpact_Success() public {
        // Initial price $2000
        vm.prank(user1);
        // Initial ratio: (1 ETH * $2000) / $1000 = 200% > 110% (OK)
        uniCardCollateral.borrow{value: 1 ether}(1000 ether);

        priceFeed.setPrice(900e8);

        // New ratio: (1.5 ETH * $900) / ($1000 + $200) = $1350 / $1200 = 112.5% > 110% (OK)
        IUniCardCollateral.AdjustParams memory params = IUniCardCollateral.AdjustParams({
            collateralChange: 0.5 ether,
            isCollateralIncrease: true,
            debtChange: 200 ether, // Smaller debt increase to maintain ratio above 110%
            isDebtIncrease: true,
            repayToken: uniCardCollateral.NATIVE_TOKEN()
        });

        vm.startPrank(user1);
        uniCardCollateral.adjust{value: 0.5 ether}(params);

        assertEq(uniCardCollateral.collaterals(user1), 1.5 ether);
        assertEq(uniCardCollateral.debts(user1), 1200 ether);
        vm.stopPrank();
    }

    function test_Borrow_WithinRatio() public {
        // At $2000/ETH
        uint256 collateralAmount = 1 ether; // $2000 worth of ETH
        uint256 borrowAmount = 1500e18; // $1500 USDU (ratio = 133% > 110%)

        vm.prank(user1);
        uniCardCollateral.borrow{value: collateralAmount}(borrowAmount);

        assertEq(uniCardCollateral.collaterals(user1), collateralAmount);
        assertEq(uniCardCollateral.debts(user1), borrowAmount);
    }

    function test_FailBorrow_InsufficientCollateral() public {
        // At $2000/ETH
        uint256 collateralAmount = 1 ether; // $2000 worth of ETH
        uint256 borrowAmount = 2000e18; // $2000 USDU (ratio = 100% < 110%)

        vm.expectRevert(Errors.UNICARD_COLLATERAL_INSUFFICIENT_COLLATERAL_RATIO.selector);

        vm.prank(user1);
        uniCardCollateral.borrow{value: collateralAmount}(borrowAmount);
    }

    // Add a test for repayment improving collateral ratio
    function test_Repay_ImprovesRatio() public {
        // Initial state: $2000 ETH collateral, $1500 debt (133% ratio)
        vm.startPrank(user1);
        uniCardCollateral.borrow{value: 1 ether}(1500 ether);

        // Repay $500, new ratio: $2000/$1000 = 200%
        uniCardCollateral.repay(address(repayToken), 500e18);

        assertEq(uniCardCollateral.collaterals(user1), 1 ether);
        assertEq(uniCardCollateral.debts(user1), 1000 ether);
        vm.stopPrank();
    }
}
