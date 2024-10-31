/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IHintHelpers,
  IHintHelpersInterface,
} from "../../../src/interfaces/IHintHelpers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_collIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newInterestRate",
        type: "uint256",
      },
    ],
    name: "forcePredictAdjustInterestRateUpfrontFee",
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
        internalType: "uint256",
        name: "_collIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_interestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numTrials",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_inputRandomSeed",
        type: "uint256",
      },
    ],
    name: "getApproxHint",
    outputs: [
      {
        internalType: "uint256",
        name: "hintId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "diff",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "latestRandomSeed",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_collIndex",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_batchAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_newInterestRate",
        type: "uint256",
      },
    ],
    name: "predictAdjustBatchInterestRateUpfrontFee",
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
        internalType: "uint256",
        name: "_collIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newInterestRate",
        type: "uint256",
      },
    ],
    name: "predictAdjustInterestRateUpfrontFee",
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
        internalType: "uint256",
        name: "_collIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_debtIncrease",
        type: "uint256",
      },
    ],
    name: "predictAdjustTroveUpfrontFee",
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
        internalType: "uint256",
        name: "_collIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_batchAddress",
        type: "address",
      },
    ],
    name: "predictJoinBatchInterestRateUpfrontFee",
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
        internalType: "uint256",
        name: "_collIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_borrowedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_interestRate",
        type: "uint256",
      },
    ],
    name: "predictOpenTroveUpfrontFee",
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
] as const;

export class IHintHelpers__factory {
  static readonly abi = _abi;
  static createInterface(): IHintHelpersInterface {
    return new Interface(_abi) as IHintHelpersInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IHintHelpers {
    return new Contract(address, _abi, runner) as unknown as IHintHelpers;
  }
}