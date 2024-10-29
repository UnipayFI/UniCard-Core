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
} from "../../../common";

export declare namespace IMetadataNFT {
  export type TroveDataStruct = {
    _tokenId: BigNumberish;
    _owner: AddressLike;
    _collToken: AddressLike;
    _collAmount: BigNumberish;
    _debtAmount: BigNumberish;
    _interestRate: BigNumberish;
    _status: BigNumberish;
  };

  export type TroveDataStructOutput = [
    _tokenId: bigint,
    _owner: string,
    _collToken: string,
    _collAmount: bigint,
    _debtAmount: bigint,
    _interestRate: bigint,
    _status: bigint
  ] & {
    _tokenId: bigint;
    _owner: string;
    _collToken: string;
    _collAmount: bigint;
    _debtAmount: bigint;
    _interestRate: bigint;
    _status: bigint;
  };
}

export interface MetadataNFTInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "assetReader"
      | "description"
      | "dynamicTextComponents"
      | "name"
      | "uri"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "assetReader",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dynamicTextComponents",
    values: [IMetadataNFT.TroveDataStruct]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uri",
    values: [IMetadataNFT.TroveDataStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "assetReader",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dynamicTextComponents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
}

export interface MetadataNFT extends BaseContract {
  connect(runner?: ContractRunner | null): MetadataNFT;
  waitForDeployment(): Promise<this>;

  interface: MetadataNFTInterface;

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

  assetReader: TypedContractMethod<[], [string], "view">;

  description: TypedContractMethod<[], [string], "view">;

  dynamicTextComponents: TypedContractMethod<
    [_troveData: IMetadataNFT.TroveDataStruct],
    [string],
    "view"
  >;

  name: TypedContractMethod<[], [string], "view">;

  uri: TypedContractMethod<
    [_troveData: IMetadataNFT.TroveDataStruct],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "assetReader"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "description"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "dynamicTextComponents"
  ): TypedContractMethod<
    [_troveData: IMetadataNFT.TroveDataStruct],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "uri"
  ): TypedContractMethod<
    [_troveData: IMetadataNFT.TroveDataStruct],
    [string],
    "view"
  >;

  filters: {};
}
