// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IUniCardVault {
    struct Account {
        address holder;
        uint256 balance;
        bool initialized;
    }

    event Deposit(string cardId, address holder, uint256 amount);
    event Withdraw(string cardId, address holder, uint256 amount);
    event UsduUpdated(address newUsdu);
    event TogglePause(bool isPaused);
    event EmergencyWithdraw(string cardId, address holder, uint256 amount);

    function deposit(string memory cardId, uint256 amount) external;
    function withdraw(string memory cardId, uint256 amount) external;
    function depositFor(string memory cardId, address holder, uint256 amount) external;
    function cardAccounts(string memory cardId) external view returns (Account memory);
}
