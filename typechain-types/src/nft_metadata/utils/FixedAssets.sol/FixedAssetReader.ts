/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
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
} from "../../../../common";

export declare namespace FixedAssetReader {
  export type AssetStruct = { start: BigNumberish; end: BigNumberish };

  export type AssetStructOutput = [start: bigint, end: bigint] & {
    start: bigint;
    end: bigint;
  };
}

export interface FixedAssetReaderInterface extends Interface {
  getFunction(
    nameOrSignature: "assets" | "pointer" | "readAsset"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "assets", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "pointer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "readAsset",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "assets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pointer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "readAsset", data: BytesLike): Result;
}

export interface FixedAssetReader extends BaseContract {
  connect(runner?: ContractRunner | null): FixedAssetReader;
  waitForDeployment(): Promise<this>;

  interface: FixedAssetReaderInterface;

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

  assets: TypedContractMethod<
    [arg0: BytesLike],
    [[bigint, bigint] & { start: bigint; end: bigint }],
    "view"
  >;

  pointer: TypedContractMethod<[], [string], "view">;

  readAsset: TypedContractMethod<[_sig: BytesLike], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "assets"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [[bigint, bigint] & { start: bigint; end: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "pointer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "readAsset"
  ): TypedContractMethod<[_sig: BytesLike], [string], "view">;

  filters: {};
}
