// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Pausable} from "@openzeppelin/contracts/utils/Pausable.sol";

import {Errors} from "../libraries/Errors.sol";
import {IUniCardDeploy} from "../interfaces/IUniCardDeploy.sol";
import {IUniCard} from "../interfaces/IUniCard.sol";
import {IUniCardRegistry} from "../interfaces/IUniCardRegistry.sol";

contract UniCard is Pausable, IUniCard {
    using SafeERC20 for IERC20;

    /// @notice The precision of the interest rate
    uint256 public constant INTEREST_RATE_PRECISION = 1e6;

    /// @notice The registry of the card
    address public override registry;
    /// @notice The slot0 of the card
    Slot0 public override slot0;

    /// @notice Only the registry can call the function
    modifier onlyRegistry() {
        require(msg.sender == registry, Errors.UNICARD_NOT_REGISTRY);
        _;
    }

    /// @notice Only the registry admin can call the function
    modifier onlyRegistryAdmin() {
        require(IUniCardRegistry(registry).hasAdminRole(msg.sender), Errors.UNICARD_NOT_ADMIN);
        _;
    }

    /// @notice Only the registry controller can call the function
    modifier onlyRegistryController() {
        require(IUniCardRegistry(registry).hasControllerRole(msg.sender), Errors.UNICARD_NOT_CONTROLLER);
        _;
    }

    /// @notice Only the active card can call the function
    modifier onlyActive() {
        require(slot0.active, Errors.UNICARD_CARD_IS_NOT_ACTIVE);
        _;
    }


    constructor() {
        (
            address aRegistry,
            address aCreator,
            uint256 anInterestRate,
            uint256 anIndex,
            address aPaymentToken,
            bytes32 aCommitment
        ) = IUniCardDeploy(msg.sender).parameters();
        require(aRegistry == msg.sender, Errors.UNICARD_INVALID_REGISTRY);
        require(anInterestRate < INTEREST_RATE_PRECISION, Errors.UNICARD_INVALID_INTEREST_RATE);
        registry = aRegistry;
        slot0 = Slot0({
            creator: aCreator,
            index: anIndex,
            interestRate: anInterestRate,
            paymentToken: aPaymentToken,
            commitment: aCommitment,
            creditLimit: 0,
            active: false
        });
    }

    /// @notice Increase the credit limit of the card
    /// @param amount The amount to increase the credit limit by
    function increaseCreditLimit(address holder, uint256 amount)
        external
        override
        onlyRegistry
        whenNotPaused
    {
        IERC20(slot0.paymentToken).safeTransferFrom(holder, address(this), amount);
        slot0.creditLimit += amount;
        slot0.active = true;
    }

    /// @notice Decrease the credit limit of the card
    /// @param amount The amount to decrease the credit limit by
    function decreaseCreditLimit(address holder, uint256 amount)
        external
        override
        onlyRegistry
        whenNotPaused
    {
        require(slot0.creator == holder, Errors.UNICARD_CREATOR_MISMATCH);
        require(slot0.creditLimit >= amount, Errors.UNICARD_CREDIT_LIMIT_TOO_HIGH);
        require(slot0.active == false, Errors.UNICARD_NEED_TO_CLOSE_CARD_FIRST);
        slot0.creditLimit -= amount;
        IERC20(slot0.paymentToken).safeTransfer(holder, amount);
    }

    /// @notice Close the card
    function closeCard(address holder)
        external
        override
        onlyRegistry
        whenNotPaused
    {
        require(slot0.creditLimit == 0, Errors.UNICARD_CREDIT_LIMIT_TOO_HIGH);
        require(slot0.creator == holder, Errors.UNICARD_CREATOR_MISMATCH);
        slot0.active = false;
    }

    /// @notice Sweep the payment token to the specified address
    /// @param to The address to sweep the payment token to
    function sweep(address to) external override onlyRegistryAdmin {
        uint256 amount = IERC20(slot0.paymentToken).balanceOf(address(this));
        if (amount > 0) {
            IERC20(slot0.paymentToken).safeTransfer(to, amount);
        }
        payable(to).transfer(address(this).balance);
    }

    /// @notice Update the interest rate of the card
    /// @param anInterestRate The new interest rate
    function updateInterestRate(uint256 anInterestRate) external override onlyRegistryController {
        slot0.interestRate = anInterestRate;
    }

    /// @notice Toggle the pause status of the card
    function togglePause() external onlyRegistryController {
        if (paused()) {
            _unpause();
        } else {
            _pause();
        }
    }
}
