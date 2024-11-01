/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPriceFeed,
  IPriceFeedInterface,
} from "../../../src/interfaces/IPriceFeed";

const _abi = [
  {
    inputs: [],
    name: "fetchPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastGoodPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_borrowerOperationsAddress",
        type: "address",
      },
    ],
    name: "setAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPriceFeed__factory {
  static readonly abi = _abi;
  static createInterface(): IPriceFeedInterface {
    return new Interface(_abi) as IPriceFeedInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IPriceFeed {
    return new Contract(address, _abi, runner) as unknown as IPriceFeed;
  }
}
