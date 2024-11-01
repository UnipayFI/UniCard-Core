/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Constants,
  ConstantsInterface,
} from "../../../src/dependencies/Constants";

const _abi = [
  {
    inputs: [],
    name: "_ETH_GAS_COMPENSATION",
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
    name: "_MIN_DEBT",
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

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060728061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80631ba09af51460375780639d5ea8d5146058575b600080fd5b6046686c6b935b8bbd40000081565b60405190815260200160405180910390f35b604666853a0d2313c0008156fea164736f6c6343000814000a";

type ConstantsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConstantsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Constants__factory extends ContractFactory {
  constructor(...args: ConstantsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Constants & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Constants__factory {
    return super.connect(runner) as Constants__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConstantsInterface {
    return new Interface(_abi) as ConstantsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Constants {
    return new Contract(address, _abi, runner) as unknown as Constants;
  }
}
