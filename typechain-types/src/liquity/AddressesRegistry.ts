/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace IAddressesRegistry {
  export type AddressVarsStruct = {
    collToken: AddressLike;
    borrowerOperations: AddressLike;
    troveManager: AddressLike;
    troveNFT: AddressLike;
    metadataNFT: AddressLike;
    stabilityPool: AddressLike;
    priceFeed: AddressLike;
    activePool: AddressLike;
    defaultPool: AddressLike;
    gasPoolAddress: AddressLike;
    collSurplusPool: AddressLike;
    sortedTroves: AddressLike;
    interestRouter: AddressLike;
    hintHelpers: AddressLike;
    multiTroveGetter: AddressLike;
    collateralRegistry: AddressLike;
    boldToken: AddressLike;
    WETH: AddressLike;
  };

  export type AddressVarsStructOutput = [
    collToken: string,
    borrowerOperations: string,
    troveManager: string,
    troveNFT: string,
    metadataNFT: string,
    stabilityPool: string,
    priceFeed: string,
    activePool: string,
    defaultPool: string,
    gasPoolAddress: string,
    collSurplusPool: string,
    sortedTroves: string,
    interestRouter: string,
    hintHelpers: string,
    multiTroveGetter: string,
    collateralRegistry: string,
    boldToken: string,
    WETH: string
  ] & {
    collToken: string;
    borrowerOperations: string;
    troveManager: string;
    troveNFT: string;
    metadataNFT: string;
    stabilityPool: string;
    priceFeed: string;
    activePool: string;
    defaultPool: string;
    gasPoolAddress: string;
    collSurplusPool: string;
    sortedTroves: string;
    interestRouter: string;
    hintHelpers: string;
    multiTroveGetter: string;
    collateralRegistry: string;
    boldToken: string;
    WETH: string;
  };
}

export interface AddressesRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CCR"
      | "LIQUIDATION_PENALTY_REDISTRIBUTION"
      | "LIQUIDATION_PENALTY_SP"
      | "MCR"
      | "SCR"
      | "WETH"
      | "activePool"
      | "boldToken"
      | "borrowerOperations"
      | "collSurplusPool"
      | "collToken"
      | "collateralRegistry"
      | "defaultPool"
      | "gasPoolAddress"
      | "hintHelpers"
      | "interestRouter"
      | "isOwner"
      | "metadataNFT"
      | "multiTroveGetter"
      | "owner"
      | "priceFeed"
      | "setAddresses"
      | "sortedTroves"
      | "stabilityPool"
      | "troveManager"
      | "troveNFT"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ActivePoolAddressChanged"
      | "BoldTokenAddressChanged"
      | "BorrowerOperationsAddressChanged"
      | "CollSurplusPoolAddressChanged"
      | "CollTokenAddressChanged"
      | "CollateralRegistryAddressChanged"
      | "DefaultPoolAddressChanged"
      | "GasPoolAddressChanged"
      | "HintHelpersAddressChanged"
      | "InterestRouterAddressChanged"
      | "MetadataNFTAddressChanged"
      | "MultiTroveGetterAddressChanged"
      | "OwnershipTransferred"
      | "PriceFeedAddressChanged"
      | "SortedTrovesAddressChanged"
      | "StabilityPoolAddressChanged"
      | "TroveManagerAddressChanged"
      | "TroveNFTAddressChanged"
      | "WETHAddressChanged"
  ): EventFragment;

  encodeFunctionData(functionFragment: "CCR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "LIQUIDATION_PENALTY_REDISTRIBUTION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LIQUIDATION_PENALTY_SP",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MCR", values?: undefined): string;
  encodeFunctionData(functionFragment: "SCR", values?: undefined): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "activePool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "boldToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "borrowerOperations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collSurplusPool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "collToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "collateralRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "defaultPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gasPoolAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hintHelpers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "interestRouter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "metadataNFT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "multiTroveGetter",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "priceFeed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAddresses",
    values: [IAddressesRegistry.AddressVarsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "sortedTroves",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stabilityPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "troveManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "troveNFT", values?: undefined): string;

  decodeFunctionResult(functionFragment: "CCR", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "LIQUIDATION_PENALTY_REDISTRIBUTION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LIQUIDATION_PENALTY_SP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MCR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SCR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "activePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "boldToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowerOperations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collSurplusPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "collToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gasPoolAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hintHelpers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "metadataNFT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "multiTroveGetter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sortedTroves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stabilityPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "troveManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "troveNFT", data: BytesLike): Result;
}

export namespace ActivePoolAddressChangedEvent {
  export type InputTuple = [_activePoolAddress: AddressLike];
  export type OutputTuple = [_activePoolAddress: string];
  export interface OutputObject {
    _activePoolAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BoldTokenAddressChangedEvent {
  export type InputTuple = [_boldTokenAddress: AddressLike];
  export type OutputTuple = [_boldTokenAddress: string];
  export interface OutputObject {
    _boldTokenAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BorrowerOperationsAddressChangedEvent {
  export type InputTuple = [_borrowerOperationsAddress: AddressLike];
  export type OutputTuple = [_borrowerOperationsAddress: string];
  export interface OutputObject {
    _borrowerOperationsAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CollSurplusPoolAddressChangedEvent {
  export type InputTuple = [_collSurplusPoolAddress: AddressLike];
  export type OutputTuple = [_collSurplusPoolAddress: string];
  export interface OutputObject {
    _collSurplusPoolAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CollTokenAddressChangedEvent {
  export type InputTuple = [_collTokenAddress: AddressLike];
  export type OutputTuple = [_collTokenAddress: string];
  export interface OutputObject {
    _collTokenAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CollateralRegistryAddressChangedEvent {
  export type InputTuple = [_collateralRegistryAddress: AddressLike];
  export type OutputTuple = [_collateralRegistryAddress: string];
  export interface OutputObject {
    _collateralRegistryAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DefaultPoolAddressChangedEvent {
  export type InputTuple = [_defaultPoolAddress: AddressLike];
  export type OutputTuple = [_defaultPoolAddress: string];
  export interface OutputObject {
    _defaultPoolAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GasPoolAddressChangedEvent {
  export type InputTuple = [_gasPoolAddress: AddressLike];
  export type OutputTuple = [_gasPoolAddress: string];
  export interface OutputObject {
    _gasPoolAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace HintHelpersAddressChangedEvent {
  export type InputTuple = [_hintHelpersAddress: AddressLike];
  export type OutputTuple = [_hintHelpersAddress: string];
  export interface OutputObject {
    _hintHelpersAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InterestRouterAddressChangedEvent {
  export type InputTuple = [_interestRouterAddress: AddressLike];
  export type OutputTuple = [_interestRouterAddress: string];
  export interface OutputObject {
    _interestRouterAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MetadataNFTAddressChangedEvent {
  export type InputTuple = [_metadataNFTAddress: AddressLike];
  export type OutputTuple = [_metadataNFTAddress: string];
  export interface OutputObject {
    _metadataNFTAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MultiTroveGetterAddressChangedEvent {
  export type InputTuple = [_multiTroveGetterAddress: AddressLike];
  export type OutputTuple = [_multiTroveGetterAddress: string];
  export interface OutputObject {
    _multiTroveGetterAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PriceFeedAddressChangedEvent {
  export type InputTuple = [_priceFeedAddress: AddressLike];
  export type OutputTuple = [_priceFeedAddress: string];
  export interface OutputObject {
    _priceFeedAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SortedTrovesAddressChangedEvent {
  export type InputTuple = [_sortedTrovesAddress: AddressLike];
  export type OutputTuple = [_sortedTrovesAddress: string];
  export interface OutputObject {
    _sortedTrovesAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StabilityPoolAddressChangedEvent {
  export type InputTuple = [_stabilityPoolAddress: AddressLike];
  export type OutputTuple = [_stabilityPoolAddress: string];
  export interface OutputObject {
    _stabilityPoolAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TroveManagerAddressChangedEvent {
  export type InputTuple = [_troveManagerAddress: AddressLike];
  export type OutputTuple = [_troveManagerAddress: string];
  export interface OutputObject {
    _troveManagerAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TroveNFTAddressChangedEvent {
  export type InputTuple = [_troveNFTAddress: AddressLike];
  export type OutputTuple = [_troveNFTAddress: string];
  export interface OutputObject {
    _troveNFTAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WETHAddressChangedEvent {
  export type InputTuple = [_wethAddress: AddressLike];
  export type OutputTuple = [_wethAddress: string];
  export interface OutputObject {
    _wethAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AddressesRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): AddressesRegistry;
  waitForDeployment(): Promise<this>;

  interface: AddressesRegistryInterface;

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

  CCR: TypedContractMethod<[], [bigint], "view">;

  LIQUIDATION_PENALTY_REDISTRIBUTION: TypedContractMethod<[], [bigint], "view">;

  LIQUIDATION_PENALTY_SP: TypedContractMethod<[], [bigint], "view">;

  MCR: TypedContractMethod<[], [bigint], "view">;

  SCR: TypedContractMethod<[], [bigint], "view">;

  WETH: TypedContractMethod<[], [string], "view">;

  activePool: TypedContractMethod<[], [string], "view">;

  boldToken: TypedContractMethod<[], [string], "view">;

  borrowerOperations: TypedContractMethod<[], [string], "view">;

  collSurplusPool: TypedContractMethod<[], [string], "view">;

  collToken: TypedContractMethod<[], [string], "view">;

  collateralRegistry: TypedContractMethod<[], [string], "view">;

  defaultPool: TypedContractMethod<[], [string], "view">;

  gasPoolAddress: TypedContractMethod<[], [string], "view">;

  hintHelpers: TypedContractMethod<[], [string], "view">;

  interestRouter: TypedContractMethod<[], [string], "view">;

  isOwner: TypedContractMethod<[], [boolean], "view">;

  metadataNFT: TypedContractMethod<[], [string], "view">;

  multiTroveGetter: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  priceFeed: TypedContractMethod<[], [string], "view">;

  setAddresses: TypedContractMethod<
    [_vars: IAddressesRegistry.AddressVarsStruct],
    [void],
    "nonpayable"
  >;

  sortedTroves: TypedContractMethod<[], [string], "view">;

  stabilityPool: TypedContractMethod<[], [string], "view">;

  troveManager: TypedContractMethod<[], [string], "view">;

  troveNFT: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CCR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "LIQUIDATION_PENALTY_REDISTRIBUTION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "LIQUIDATION_PENALTY_SP"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MCR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "SCR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "WETH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "activePool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "boldToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "borrowerOperations"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "collSurplusPool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "collToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "collateralRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "defaultPool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gasPoolAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "hintHelpers"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "interestRouter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "isOwner"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "metadataNFT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "multiTroveGetter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "priceFeed"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setAddresses"
  ): TypedContractMethod<
    [_vars: IAddressesRegistry.AddressVarsStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sortedTroves"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stabilityPool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "troveManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "troveNFT"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "ActivePoolAddressChanged"
  ): TypedContractEvent<
    ActivePoolAddressChangedEvent.InputTuple,
    ActivePoolAddressChangedEvent.OutputTuple,
    ActivePoolAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "BoldTokenAddressChanged"
  ): TypedContractEvent<
    BoldTokenAddressChangedEvent.InputTuple,
    BoldTokenAddressChangedEvent.OutputTuple,
    BoldTokenAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "BorrowerOperationsAddressChanged"
  ): TypedContractEvent<
    BorrowerOperationsAddressChangedEvent.InputTuple,
    BorrowerOperationsAddressChangedEvent.OutputTuple,
    BorrowerOperationsAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "CollSurplusPoolAddressChanged"
  ): TypedContractEvent<
    CollSurplusPoolAddressChangedEvent.InputTuple,
    CollSurplusPoolAddressChangedEvent.OutputTuple,
    CollSurplusPoolAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "CollTokenAddressChanged"
  ): TypedContractEvent<
    CollTokenAddressChangedEvent.InputTuple,
    CollTokenAddressChangedEvent.OutputTuple,
    CollTokenAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "CollateralRegistryAddressChanged"
  ): TypedContractEvent<
    CollateralRegistryAddressChangedEvent.InputTuple,
    CollateralRegistryAddressChangedEvent.OutputTuple,
    CollateralRegistryAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "DefaultPoolAddressChanged"
  ): TypedContractEvent<
    DefaultPoolAddressChangedEvent.InputTuple,
    DefaultPoolAddressChangedEvent.OutputTuple,
    DefaultPoolAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "GasPoolAddressChanged"
  ): TypedContractEvent<
    GasPoolAddressChangedEvent.InputTuple,
    GasPoolAddressChangedEvent.OutputTuple,
    GasPoolAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "HintHelpersAddressChanged"
  ): TypedContractEvent<
    HintHelpersAddressChangedEvent.InputTuple,
    HintHelpersAddressChangedEvent.OutputTuple,
    HintHelpersAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "InterestRouterAddressChanged"
  ): TypedContractEvent<
    InterestRouterAddressChangedEvent.InputTuple,
    InterestRouterAddressChangedEvent.OutputTuple,
    InterestRouterAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "MetadataNFTAddressChanged"
  ): TypedContractEvent<
    MetadataNFTAddressChangedEvent.InputTuple,
    MetadataNFTAddressChangedEvent.OutputTuple,
    MetadataNFTAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "MultiTroveGetterAddressChanged"
  ): TypedContractEvent<
    MultiTroveGetterAddressChangedEvent.InputTuple,
    MultiTroveGetterAddressChangedEvent.OutputTuple,
    MultiTroveGetterAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "PriceFeedAddressChanged"
  ): TypedContractEvent<
    PriceFeedAddressChangedEvent.InputTuple,
    PriceFeedAddressChangedEvent.OutputTuple,
    PriceFeedAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "SortedTrovesAddressChanged"
  ): TypedContractEvent<
    SortedTrovesAddressChangedEvent.InputTuple,
    SortedTrovesAddressChangedEvent.OutputTuple,
    SortedTrovesAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "StabilityPoolAddressChanged"
  ): TypedContractEvent<
    StabilityPoolAddressChangedEvent.InputTuple,
    StabilityPoolAddressChangedEvent.OutputTuple,
    StabilityPoolAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "TroveManagerAddressChanged"
  ): TypedContractEvent<
    TroveManagerAddressChangedEvent.InputTuple,
    TroveManagerAddressChangedEvent.OutputTuple,
    TroveManagerAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "TroveNFTAddressChanged"
  ): TypedContractEvent<
    TroveNFTAddressChangedEvent.InputTuple,
    TroveNFTAddressChangedEvent.OutputTuple,
    TroveNFTAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "WETHAddressChanged"
  ): TypedContractEvent<
    WETHAddressChangedEvent.InputTuple,
    WETHAddressChangedEvent.OutputTuple,
    WETHAddressChangedEvent.OutputObject
  >;

  filters: {
    "ActivePoolAddressChanged(address)": TypedContractEvent<
      ActivePoolAddressChangedEvent.InputTuple,
      ActivePoolAddressChangedEvent.OutputTuple,
      ActivePoolAddressChangedEvent.OutputObject
    >;
    ActivePoolAddressChanged: TypedContractEvent<
      ActivePoolAddressChangedEvent.InputTuple,
      ActivePoolAddressChangedEvent.OutputTuple,
      ActivePoolAddressChangedEvent.OutputObject
    >;

    "BoldTokenAddressChanged(address)": TypedContractEvent<
      BoldTokenAddressChangedEvent.InputTuple,
      BoldTokenAddressChangedEvent.OutputTuple,
      BoldTokenAddressChangedEvent.OutputObject
    >;
    BoldTokenAddressChanged: TypedContractEvent<
      BoldTokenAddressChangedEvent.InputTuple,
      BoldTokenAddressChangedEvent.OutputTuple,
      BoldTokenAddressChangedEvent.OutputObject
    >;

    "BorrowerOperationsAddressChanged(address)": TypedContractEvent<
      BorrowerOperationsAddressChangedEvent.InputTuple,
      BorrowerOperationsAddressChangedEvent.OutputTuple,
      BorrowerOperationsAddressChangedEvent.OutputObject
    >;
    BorrowerOperationsAddressChanged: TypedContractEvent<
      BorrowerOperationsAddressChangedEvent.InputTuple,
      BorrowerOperationsAddressChangedEvent.OutputTuple,
      BorrowerOperationsAddressChangedEvent.OutputObject
    >;

    "CollSurplusPoolAddressChanged(address)": TypedContractEvent<
      CollSurplusPoolAddressChangedEvent.InputTuple,
      CollSurplusPoolAddressChangedEvent.OutputTuple,
      CollSurplusPoolAddressChangedEvent.OutputObject
    >;
    CollSurplusPoolAddressChanged: TypedContractEvent<
      CollSurplusPoolAddressChangedEvent.InputTuple,
      CollSurplusPoolAddressChangedEvent.OutputTuple,
      CollSurplusPoolAddressChangedEvent.OutputObject
    >;

    "CollTokenAddressChanged(address)": TypedContractEvent<
      CollTokenAddressChangedEvent.InputTuple,
      CollTokenAddressChangedEvent.OutputTuple,
      CollTokenAddressChangedEvent.OutputObject
    >;
    CollTokenAddressChanged: TypedContractEvent<
      CollTokenAddressChangedEvent.InputTuple,
      CollTokenAddressChangedEvent.OutputTuple,
      CollTokenAddressChangedEvent.OutputObject
    >;

    "CollateralRegistryAddressChanged(address)": TypedContractEvent<
      CollateralRegistryAddressChangedEvent.InputTuple,
      CollateralRegistryAddressChangedEvent.OutputTuple,
      CollateralRegistryAddressChangedEvent.OutputObject
    >;
    CollateralRegistryAddressChanged: TypedContractEvent<
      CollateralRegistryAddressChangedEvent.InputTuple,
      CollateralRegistryAddressChangedEvent.OutputTuple,
      CollateralRegistryAddressChangedEvent.OutputObject
    >;

    "DefaultPoolAddressChanged(address)": TypedContractEvent<
      DefaultPoolAddressChangedEvent.InputTuple,
      DefaultPoolAddressChangedEvent.OutputTuple,
      DefaultPoolAddressChangedEvent.OutputObject
    >;
    DefaultPoolAddressChanged: TypedContractEvent<
      DefaultPoolAddressChangedEvent.InputTuple,
      DefaultPoolAddressChangedEvent.OutputTuple,
      DefaultPoolAddressChangedEvent.OutputObject
    >;

    "GasPoolAddressChanged(address)": TypedContractEvent<
      GasPoolAddressChangedEvent.InputTuple,
      GasPoolAddressChangedEvent.OutputTuple,
      GasPoolAddressChangedEvent.OutputObject
    >;
    GasPoolAddressChanged: TypedContractEvent<
      GasPoolAddressChangedEvent.InputTuple,
      GasPoolAddressChangedEvent.OutputTuple,
      GasPoolAddressChangedEvent.OutputObject
    >;

    "HintHelpersAddressChanged(address)": TypedContractEvent<
      HintHelpersAddressChangedEvent.InputTuple,
      HintHelpersAddressChangedEvent.OutputTuple,
      HintHelpersAddressChangedEvent.OutputObject
    >;
    HintHelpersAddressChanged: TypedContractEvent<
      HintHelpersAddressChangedEvent.InputTuple,
      HintHelpersAddressChangedEvent.OutputTuple,
      HintHelpersAddressChangedEvent.OutputObject
    >;

    "InterestRouterAddressChanged(address)": TypedContractEvent<
      InterestRouterAddressChangedEvent.InputTuple,
      InterestRouterAddressChangedEvent.OutputTuple,
      InterestRouterAddressChangedEvent.OutputObject
    >;
    InterestRouterAddressChanged: TypedContractEvent<
      InterestRouterAddressChangedEvent.InputTuple,
      InterestRouterAddressChangedEvent.OutputTuple,
      InterestRouterAddressChangedEvent.OutputObject
    >;

    "MetadataNFTAddressChanged(address)": TypedContractEvent<
      MetadataNFTAddressChangedEvent.InputTuple,
      MetadataNFTAddressChangedEvent.OutputTuple,
      MetadataNFTAddressChangedEvent.OutputObject
    >;
    MetadataNFTAddressChanged: TypedContractEvent<
      MetadataNFTAddressChangedEvent.InputTuple,
      MetadataNFTAddressChangedEvent.OutputTuple,
      MetadataNFTAddressChangedEvent.OutputObject
    >;

    "MultiTroveGetterAddressChanged(address)": TypedContractEvent<
      MultiTroveGetterAddressChangedEvent.InputTuple,
      MultiTroveGetterAddressChangedEvent.OutputTuple,
      MultiTroveGetterAddressChangedEvent.OutputObject
    >;
    MultiTroveGetterAddressChanged: TypedContractEvent<
      MultiTroveGetterAddressChangedEvent.InputTuple,
      MultiTroveGetterAddressChangedEvent.OutputTuple,
      MultiTroveGetterAddressChangedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "PriceFeedAddressChanged(address)": TypedContractEvent<
      PriceFeedAddressChangedEvent.InputTuple,
      PriceFeedAddressChangedEvent.OutputTuple,
      PriceFeedAddressChangedEvent.OutputObject
    >;
    PriceFeedAddressChanged: TypedContractEvent<
      PriceFeedAddressChangedEvent.InputTuple,
      PriceFeedAddressChangedEvent.OutputTuple,
      PriceFeedAddressChangedEvent.OutputObject
    >;

    "SortedTrovesAddressChanged(address)": TypedContractEvent<
      SortedTrovesAddressChangedEvent.InputTuple,
      SortedTrovesAddressChangedEvent.OutputTuple,
      SortedTrovesAddressChangedEvent.OutputObject
    >;
    SortedTrovesAddressChanged: TypedContractEvent<
      SortedTrovesAddressChangedEvent.InputTuple,
      SortedTrovesAddressChangedEvent.OutputTuple,
      SortedTrovesAddressChangedEvent.OutputObject
    >;

    "StabilityPoolAddressChanged(address)": TypedContractEvent<
      StabilityPoolAddressChangedEvent.InputTuple,
      StabilityPoolAddressChangedEvent.OutputTuple,
      StabilityPoolAddressChangedEvent.OutputObject
    >;
    StabilityPoolAddressChanged: TypedContractEvent<
      StabilityPoolAddressChangedEvent.InputTuple,
      StabilityPoolAddressChangedEvent.OutputTuple,
      StabilityPoolAddressChangedEvent.OutputObject
    >;

    "TroveManagerAddressChanged(address)": TypedContractEvent<
      TroveManagerAddressChangedEvent.InputTuple,
      TroveManagerAddressChangedEvent.OutputTuple,
      TroveManagerAddressChangedEvent.OutputObject
    >;
    TroveManagerAddressChanged: TypedContractEvent<
      TroveManagerAddressChangedEvent.InputTuple,
      TroveManagerAddressChangedEvent.OutputTuple,
      TroveManagerAddressChangedEvent.OutputObject
    >;

    "TroveNFTAddressChanged(address)": TypedContractEvent<
      TroveNFTAddressChangedEvent.InputTuple,
      TroveNFTAddressChangedEvent.OutputTuple,
      TroveNFTAddressChangedEvent.OutputObject
    >;
    TroveNFTAddressChanged: TypedContractEvent<
      TroveNFTAddressChangedEvent.InputTuple,
      TroveNFTAddressChangedEvent.OutputTuple,
      TroveNFTAddressChangedEvent.OutputObject
    >;

    "WETHAddressChanged(address)": TypedContractEvent<
      WETHAddressChangedEvent.InputTuple,
      WETHAddressChangedEvent.OutputTuple,
      WETHAddressChangedEvent.OutputObject
    >;
    WETHAddressChanged: TypedContractEvent<
      WETHAddressChangedEvent.InputTuple,
      WETHAddressChangedEvent.OutputTuple,
      WETHAddressChangedEvent.OutputObject
    >;
  };
}