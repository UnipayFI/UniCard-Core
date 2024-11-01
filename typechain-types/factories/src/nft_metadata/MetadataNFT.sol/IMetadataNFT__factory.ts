/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMetadataNFT,
  IMetadataNFTInterface,
} from "../../../../src/nft_metadata/MetadataNFT.sol/IMetadataNFT";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_collToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_collAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_debtAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "_interestRate",
            type: "uint256",
          },
          {
            internalType: "enum ITroveManager.Status",
            name: "_status",
            type: "uint8",
          },
        ],
        internalType: "struct IMetadataNFT.TroveData",
        name: "_troveData",
        type: "tuple",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IMetadataNFT__factory {
  static readonly abi = _abi;
  static createInterface(): IMetadataNFTInterface {
    return new Interface(_abi) as IMetadataNFTInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMetadataNFT {
    return new Contract(address, _abi, runner) as unknown as IMetadataNFT;
  }
}
