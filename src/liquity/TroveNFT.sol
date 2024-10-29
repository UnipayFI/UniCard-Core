// SPDX-License-Identifier: BUSL-1.1

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

import "../interfaces/ITroveNFT.sol";
import "../interfaces/IAddressesRegistry.sol";

import {IMetadataNFT} from "../nft_metadata/MetadataNFT.sol";
import {ITroveManager} from "../interfaces/ITroveManager.sol";

// import "forge-std/console2.sol";

contract TroveNFT is ERC721, ITroveNFT {
    ITroveManager public immutable troveManager;
    IERC20Metadata internal immutable collToken;

    IMetadataNFT public immutable metadataNFT;

    constructor(IAddressesRegistry _addressesRegistry)
        ERC721(
            string.concat("Liquity v2 Trove - ", _addressesRegistry.collToken().name()),
            string.concat("Lv2T_", _addressesRegistry.collToken().symbol())
        )
    {
        troveManager = _addressesRegistry.troveManager();
        collToken = _addressesRegistry.collToken();
        metadataNFT = _addressesRegistry.metadataNFT();
    }

    function tokenURI(uint256 _tokenId) public view override(ERC721, IERC721Metadata) returns (string memory) {
        (uint256 debt, uint256 coll,, ITroveManager.Status status,,,, uint256 annualInterestRate,,) =
            troveManager.Troves(_tokenId);

        IMetadataNFT.TroveData memory troveData = IMetadataNFT.TroveData({
            _tokenId: _tokenId,
            _owner: ownerOf(_tokenId),
            _collToken: address(collToken),
            _collAmount: coll,
            _debtAmount: debt,
            _interestRate: annualInterestRate,
            _status: status
        });

        return metadataNFT.uri(troveData);
    }

    function mint(address _owner, uint256 _troveId) external override {
        _requireCallerIsTroveManager();
        _mint(_owner, _troveId);
    }

    function burn(uint256 _troveId) external override {
        _requireCallerIsTroveManager();
        _burn(_troveId);
    }

    function _requireCallerIsTroveManager() internal view {
        require(msg.sender == address(troveManager), "TroveNFT: Caller is not the TroveManager contract");
    }
}
