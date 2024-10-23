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
import type { Errors, ErrorsInterface } from "../../../src/libraries/Errors";

const _abi = [
  {
    inputs: [],
    name: "UNICARD_REGISTRY_AMOUNT_MUST_BE_GREATER_THAN_ZERO",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_COMMITMENT_EXPIRED",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_DEADLINE_MUST_BE_IN_THE_FUTURE",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_INTEREST_RATE_TOO_HIGH",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_INVALID_SIGNATURE",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_NONCE_MISMATCH",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_PAYMENT_TOKEN_NOT_ALLOWED",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_REQUEST_TX_HASH_ALREADY_USED",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_REQUEST_TX_HASH_EMPTY",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_USER_ALREADY_HAS_COMMITMENT",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_VAULT_NOT_ALLOWED",
    type: "error",
  },
] as const;

const _bytecode =
  "0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c6343000814000a";

type ErrorsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ErrorsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Errors__factory extends ContractFactory {
  constructor(...args: ErrorsConstructorParams) {
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
      Errors & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Errors__factory {
    return super.connect(runner) as Errors__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ErrorsInterface {
    return new Interface(_abi) as ErrorsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Errors {
    return new Contract(address, _abi, runner) as unknown as Errors;
  }
}
