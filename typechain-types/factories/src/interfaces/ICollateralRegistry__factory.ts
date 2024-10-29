/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ICollateralRegistry,
  ICollateralRegistryInterface,
} from "../../../src/interfaces/ICollateralRegistry";

const _abi = [
  {
    inputs: [],
    name: "baseRate",
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
    name: "boldToken",
    outputs: [
      {
        internalType: "contract IBoldToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_redeemAmount",
        type: "uint256",
      },
    ],
    name: "getEffectiveRedemptionFeeInBold",
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
        name: "_ETHDrawn",
        type: "uint256",
      },
    ],
    name: "getRedemptionFeeWithDecay",
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
    name: "getRedemptionRate",
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
        name: "_redeemAmount",
        type: "uint256",
      },
    ],
    name: "getRedemptionRateForRedeemedAmount",
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
    name: "getRedemptionRateWithDecay",
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
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getToken",
    outputs: [
      {
        internalType: "contract IERC20Metadata",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getTroveManager",
    outputs: [
      {
        internalType: "contract ITroveManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastFeeOperationTime",
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
        name: "_boldamount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxIterations",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxFeePercentage",
        type: "uint256",
      },
    ],
    name: "redeemCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalCollaterals",
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

export class ICollateralRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): ICollateralRegistryInterface {
    return new Interface(_abi) as ICollateralRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ICollateralRegistry {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ICollateralRegistry;
  }
}
