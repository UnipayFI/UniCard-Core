/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ILiquityBase,
  ILiquityBaseInterface,
} from "../../../src/interfaces/ILiquityBase";

const _abi = [
  {
    inputs: [],
    name: "activePool",
    outputs: [
      {
        internalType: "contract IActivePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntireSystemColl",
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
    inputs: [],
    name: "getEntireSystemDebt",
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

export class ILiquityBase__factory {
  static readonly abi = _abi;
  static createInterface(): ILiquityBaseInterface {
    return new Interface(_abi) as ILiquityBaseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ILiquityBase {
    return new Contract(address, _abi, runner) as unknown as ILiquityBase;
  }
}