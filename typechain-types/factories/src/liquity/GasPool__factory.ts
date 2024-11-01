/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { GasPool, GasPoolInterface } from "../../../src/liquity/GasPool";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IAddressesRegistry",
        name: "_addressesRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102da3803806102da83398101604081905261002f91610270565b6000816001600160a01b031663ad5c46486040518163ffffffff1660e01b81526004016020604051808303816000875af1158015610071573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100959190610270565b90506000826001600160a01b03166377553ad46040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100fb9190610270565b90506000836001600160a01b0316633d83908a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561013d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101619190610270565b60405163095ea7b360e01b81526001600160a01b03848116600483015260001960248301529192509084169063095ea7b3906044016020604051808303816000875af11580156101b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d99190610294565b5060405163095ea7b360e01b81526001600160a01b038281166004830152600019602483015284169063095ea7b3906044016020604051808303816000875af115801561022a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061024e9190610294565b50505050506102b6565b6001600160a01b038116811461026d57600080fd5b50565b60006020828403121561028257600080fd5b815161028d81610258565b9392505050565b6000602082840312156102a657600080fd5b8151801515811461028d57600080fd5b6016806102c46000396000f3fe6080604052600080fdfea164736f6c6343000814000a";

type GasPoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GasPool__factory extends ContractFactory {
  constructor(...args: GasPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _addressesRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_addressesRegistry, overrides || {});
  }
  override deploy(
    _addressesRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_addressesRegistry, overrides || {}) as Promise<
      GasPool & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): GasPool__factory {
    return super.connect(runner) as GasPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasPoolInterface {
    return new Interface(_abi) as GasPoolInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): GasPool {
    return new Contract(address, _abi, runner) as unknown as GasPool;
  }
}
