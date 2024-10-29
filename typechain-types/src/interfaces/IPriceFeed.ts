/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IPriceFeedInterface extends Interface {
  getFunction(
    nameOrSignature: "fetchPrice" | "lastGoodPrice" | "setAddresses"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "fetchPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastGoodPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAddresses",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "fetchPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastGoodPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAddresses",
    data: BytesLike
  ): Result;
}

export interface IPriceFeed extends BaseContract {
  connect(runner?: ContractRunner | null): IPriceFeed;
  waitForDeployment(): Promise<this>;

  interface: IPriceFeedInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  fetchPrice: TypedContractMethod<[], [[bigint, boolean]], "nonpayable">;

  lastGoodPrice: TypedContractMethod<[], [bigint], "view">;

  setAddresses: TypedContractMethod<
    [_borrowerOperationsAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "fetchPrice"
  ): TypedContractMethod<[], [[bigint, boolean]], "nonpayable">;
  getFunction(
    nameOrSignature: "lastGoodPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setAddresses"
  ): TypedContractMethod<
    [_borrowerOperationsAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}
