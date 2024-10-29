/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
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

export interface ConstantsInterface extends Interface {
  getFunction(
    nameOrSignature: "_ETH_GAS_COMPENSATION" | "_MIN_DEBT"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_ETH_GAS_COMPENSATION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_MIN_DEBT", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "_ETH_GAS_COMPENSATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_MIN_DEBT", data: BytesLike): Result;
}

export interface Constants extends BaseContract {
  connect(runner?: ContractRunner | null): Constants;
  waitForDeployment(): Promise<this>;

  interface: ConstantsInterface;

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

  _ETH_GAS_COMPENSATION: TypedContractMethod<[], [bigint], "view">;

  _MIN_DEBT: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_ETH_GAS_COMPENSATION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "_MIN_DEBT"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
