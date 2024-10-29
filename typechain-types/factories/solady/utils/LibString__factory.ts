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
  LibString,
  LibStringInterface,
} from "../../../solady/utils/LibString";

const _abi = [
  {
    inputs: [],
    name: "HexLengthInsufficient",
    type: "error",
  },
  {
    inputs: [],
    name: "StringNot7BitASCII",
    type: "error",
  },
  {
    inputs: [],
    name: "TooBigForSmallString",
    type: "error",
  },
] as const;

const _bytecode =
  "0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c6343000814000a";

type LibStringConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibStringConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibString__factory extends ContractFactory {
  constructor(...args: LibStringConstructorParams) {
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
      LibString & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LibString__factory {
    return super.connect(runner) as LibString__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibStringInterface {
    return new Interface(_abi) as LibStringInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): LibString {
    return new Contract(address, _abi, runner) as unknown as LibString;
  }
}
