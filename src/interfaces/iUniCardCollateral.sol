// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IUniCardCollateral {
    struct AdjustParams {
        uint256 collateralChange; // Amount of collateral to add/remove
        bool isCollateralIncrease; // True if adding collateral, false if removing
        uint256 debtChange; // Amount of debt to add/remove
        bool isDebtIncrease; // True if borrowing, false if repaying
        address repayToken; // Token used for repayment (only used when repaying)
    }

    struct LocalVariables_adjust {
        // @notice Price
        uint256 price;
        // @notice Total collateral after adjustment
        uint256 totalCollateralAfter;
        // @notice Total debt after adjustment
        uint256 totalDebtAfter;
        // @notice Collateral ratio
        uint256 collateralRatio;
    }

    event CollateralAdjusted(
        address indexed holder,
        uint256 collateralAmount,
        bool isCollateralIncrease,
        uint256 debtAmount,
        bool isDebtIncrease,
        address repayToken
    );
}
