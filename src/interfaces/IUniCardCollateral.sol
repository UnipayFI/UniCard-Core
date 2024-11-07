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

    // @notice Emitted when the collateral is adjusted
    // @param holder The address of the card holder
    // @param collateralAmount The amount of collateral to add/remove
    // @param isCollateralIncrease True if adding collateral, false if removing
    // @param debtAmount The amount of debt to add/remove
    // @param isDebtIncrease True if borrowing, false if repaying
    // @param repayToken The token used for repayment (only used when repaying)
    event CollateralAdjusted(
        address holder,
        uint256 collateralAmount,
        bool isCollateralIncrease,
        uint256 debtAmount,
        bool isDebtIncrease,
        address repayToken
    );

    // @notice Emitted when the pause status is toggled
    // @param isPaused The flag to enable or disable the pause
    event TogglePause(bool isPaused);

    // @notice Emitted when the USDU address is updated
    // @param newUsdu The address of the new USDU
    event UsduUpdated(address newUsdu);

    // @notice Borrow USDU
    // @param debtAmount The amount of debt to borrow
    function borrow(uint256 debtAmount) external payable;

    // @notice The minimum collateral ratio
    function MIN_COLLATERAL_RATIO() external view returns (uint256);
}
