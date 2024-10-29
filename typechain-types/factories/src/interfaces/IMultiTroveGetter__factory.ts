/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMultiTroveGetter,
  IMultiTroveGetterInterface,
} from "../../../src/interfaces/IMultiTroveGetter";

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
        name: "_startId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxIterations",
        type: "uint256",
      },
    ],
    name: "getDebtPerInterestRateAscending",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "interestBatchManager",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "interestRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
        ],
        internalType: "struct IMultiTroveGetter.DebtPerInterestRate[]",
        name: "",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "currId",
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
        internalType: "int256",
        name: "_startIdx",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "getMultipleSortedTroves",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "coll",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stake",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "annualInterestRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastDebtUpdateTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastInterestRateAdjTime",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "interestBatchManager",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "batchDebtShares",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "batchCollShares",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "snapshotETH",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "snapshotBoldDebt",
            type: "uint256",
          },
        ],
        internalType: "struct IMultiTroveGetter.CombinedTroveData[]",
        name: "_troves",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IMultiTroveGetter__factory {
  static readonly abi = _abi;
  static createInterface(): IMultiTroveGetterInterface {
    return new Interface(_abi) as IMultiTroveGetterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMultiTroveGetter {
    return new Contract(address, _abi, runner) as unknown as IMultiTroveGetter;
  }
}
