/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IOsTokenVaultController,
  IOsTokenVaultControllerInterface,
} from "../../../src/dependencies/IOsTokenVaultController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "convertToAssets",
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

export class IOsTokenVaultController__factory {
  static readonly abi = _abi;
  static createInterface(): IOsTokenVaultControllerInterface {
    return new Interface(_abi) as IOsTokenVaultControllerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IOsTokenVaultController {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IOsTokenVaultController;
  }
}
