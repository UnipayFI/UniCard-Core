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

export interface StabilityPoolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "NAME"
      | "P"
      | "SCALE_FACTOR"
      | "activePool"
      | "boldToken"
      | "claimAllCollGains"
      | "collToken"
      | "currentEpoch"
      | "currentScale"
      | "depositSnapshots"
      | "deposits"
      | "epochToScaleToB"
      | "epochToScaleToS"
      | "getCollBalance"
      | "getCompoundedBoldDeposit"
      | "getDepositorCollGain"
      | "getDepositorYieldGain"
      | "getDepositorYieldGainWithPending"
      | "getEntireSystemColl"
      | "getEntireSystemDebt"
      | "getTotalBoldDeposits"
      | "getYieldGainsOwed"
      | "getYieldGainsPending"
      | "lastBoldLossError_Offset"
      | "lastCollError_Offset"
      | "lastYieldError"
      | "offset"
      | "provideToSP"
      | "stashedColl"
      | "triggerBoldRewards"
      | "troveManager"
      | "withdrawFromSP"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ActivePoolAddressChanged"
      | "B_Updated"
      | "BoldTokenAddressChanged"
      | "DefaultPoolAddressChanged"
      | "DepositOperation"
      | "DepositUpdated"
      | "EpochUpdated"
      | "EtherSent"
      | "P_Updated"
      | "PriceFeedAddressChanged"
      | "S_Updated"
      | "ScaleUpdated"
      | "StabilityPoolBoldBalanceUpdated"
      | "StabilityPoolCollBalanceUpdated"
      | "TroveManagerAddressChanged"
  ): EventFragment;

  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(functionFragment: "P", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "SCALE_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activePool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "boldToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimAllCollGains",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "collToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentEpoch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "currentScale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositSnapshots",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "deposits",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "epochToScaleToB",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "epochToScaleToS",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCollBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCompoundedBoldDeposit",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositorCollGain",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositorYieldGain",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositorYieldGainWithPending",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getEntireSystemColl",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEntireSystemDebt",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalBoldDeposits",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getYieldGainsOwed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getYieldGainsPending",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastBoldLossError_Offset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastCollError_Offset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastYieldError",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offset",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "provideToSP",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "stashedColl",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "triggerBoldRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "troveManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFromSP",
    values: [BigNumberish, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "P", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "SCALE_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "activePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "boldToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimAllCollGains",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "collToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentScale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositSnapshots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "epochToScaleToB",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "epochToScaleToS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCompoundedBoldDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositorCollGain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositorYieldGain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositorYieldGainWithPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntireSystemColl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntireSystemDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalBoldDeposits",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getYieldGainsOwed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getYieldGainsPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastBoldLossError_Offset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastCollError_Offset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastYieldError",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "offset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "provideToSP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stashedColl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "triggerBoldRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "troveManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFromSP",
    data: BytesLike
  ): Result;
}

export namespace ActivePoolAddressChangedEvent {
  export type InputTuple = [_newActivePoolAddress: AddressLike];
  export type OutputTuple = [_newActivePoolAddress: string];
  export interface OutputObject {
    _newActivePoolAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace B_UpdatedEvent {
  export type InputTuple = [
    _B: BigNumberish,
    _epoch: BigNumberish,
    _scale: BigNumberish
  ];
  export type OutputTuple = [_B: bigint, _epoch: bigint, _scale: bigint];
  export interface OutputObject {
    _B: bigint;
    _epoch: bigint;
    _scale: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BoldTokenAddressChangedEvent {
  export type InputTuple = [_newBoldTokenAddress: AddressLike];
  export type OutputTuple = [_newBoldTokenAddress: string];
  export interface OutputObject {
    _newBoldTokenAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DefaultPoolAddressChangedEvent {
  export type InputTuple = [_newDefaultPoolAddress: AddressLike];
  export type OutputTuple = [_newDefaultPoolAddress: string];
  export interface OutputObject {
    _newDefaultPoolAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositOperationEvent {
  export type InputTuple = [
    _depositor: AddressLike,
    _operation: BigNumberish,
    _depositLossSinceLastOperation: BigNumberish,
    _depositChange: BigNumberish,
    _yieldGainSinceLastOperation: BigNumberish,
    _yieldGainClaimed: BigNumberish,
    _ethGainSinceLastOperation: BigNumberish,
    _ethGainClaimed: BigNumberish
  ];
  export type OutputTuple = [
    _depositor: string,
    _operation: bigint,
    _depositLossSinceLastOperation: bigint,
    _depositChange: bigint,
    _yieldGainSinceLastOperation: bigint,
    _yieldGainClaimed: bigint,
    _ethGainSinceLastOperation: bigint,
    _ethGainClaimed: bigint
  ];
  export interface OutputObject {
    _depositor: string;
    _operation: bigint;
    _depositLossSinceLastOperation: bigint;
    _depositChange: bigint;
    _yieldGainSinceLastOperation: bigint;
    _yieldGainClaimed: bigint;
    _ethGainSinceLastOperation: bigint;
    _ethGainClaimed: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositUpdatedEvent {
  export type InputTuple = [
    _depositor: AddressLike,
    _newDeposit: BigNumberish,
    _stashedColl: BigNumberish,
    _snapshotP: BigNumberish,
    _snapshotS: BigNumberish,
    _snapshotB: BigNumberish,
    _snapshotScale: BigNumberish,
    _snapshotEpoch: BigNumberish
  ];
  export type OutputTuple = [
    _depositor: string,
    _newDeposit: bigint,
    _stashedColl: bigint,
    _snapshotP: bigint,
    _snapshotS: bigint,
    _snapshotB: bigint,
    _snapshotScale: bigint,
    _snapshotEpoch: bigint
  ];
  export interface OutputObject {
    _depositor: string;
    _newDeposit: bigint;
    _stashedColl: bigint;
    _snapshotP: bigint;
    _snapshotS: bigint;
    _snapshotB: bigint;
    _snapshotScale: bigint;
    _snapshotEpoch: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EpochUpdatedEvent {
  export type InputTuple = [_currentEpoch: BigNumberish];
  export type OutputTuple = [_currentEpoch: bigint];
  export interface OutputObject {
    _currentEpoch: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EtherSentEvent {
  export type InputTuple = [_to: AddressLike, _amount: BigNumberish];
  export type OutputTuple = [_to: string, _amount: bigint];
  export interface OutputObject {
    _to: string;
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace P_UpdatedEvent {
  export type InputTuple = [_P: BigNumberish];
  export type OutputTuple = [_P: bigint];
  export interface OutputObject {
    _P: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PriceFeedAddressChangedEvent {
  export type InputTuple = [_newPriceFeedAddress: AddressLike];
  export type OutputTuple = [_newPriceFeedAddress: string];
  export interface OutputObject {
    _newPriceFeedAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace S_UpdatedEvent {
  export type InputTuple = [
    _S: BigNumberish,
    _epoch: BigNumberish,
    _scale: BigNumberish
  ];
  export type OutputTuple = [_S: bigint, _epoch: bigint, _scale: bigint];
  export interface OutputObject {
    _S: bigint;
    _epoch: bigint;
    _scale: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ScaleUpdatedEvent {
  export type InputTuple = [_currentScale: BigNumberish];
  export type OutputTuple = [_currentScale: bigint];
  export interface OutputObject {
    _currentScale: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StabilityPoolBoldBalanceUpdatedEvent {
  export type InputTuple = [_newBalance: BigNumberish];
  export type OutputTuple = [_newBalance: bigint];
  export interface OutputObject {
    _newBalance: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace StabilityPoolCollBalanceUpdatedEvent {
  export type InputTuple = [_newBalance: BigNumberish];
  export type OutputTuple = [_newBalance: bigint];
  export interface OutputObject {
    _newBalance: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TroveManagerAddressChangedEvent {
  export type InputTuple = [_newTroveManagerAddress: AddressLike];
  export type OutputTuple = [_newTroveManagerAddress: string];
  export interface OutputObject {
    _newTroveManagerAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface StabilityPool extends BaseContract {
  connect(runner?: ContractRunner | null): StabilityPool;
  waitForDeployment(): Promise<this>;

  interface: StabilityPoolInterface;

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

  NAME: TypedContractMethod<[], [string], "view">;

  P: TypedContractMethod<[], [bigint], "view">;

  SCALE_FACTOR: TypedContractMethod<[], [bigint], "view">;

  activePool: TypedContractMethod<[], [string], "view">;

  boldToken: TypedContractMethod<[], [string], "view">;

  claimAllCollGains: TypedContractMethod<[], [void], "nonpayable">;

  collToken: TypedContractMethod<[], [string], "view">;

  currentEpoch: TypedContractMethod<[], [bigint], "view">;

  currentScale: TypedContractMethod<[], [bigint], "view">;

  depositSnapshots: TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        S: bigint;
        P: bigint;
        B: bigint;
        scale: bigint;
        epoch: bigint;
      }
    ],
    "view"
  >;

  deposits: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  epochToScaleToB: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  epochToScaleToS: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  getCollBalance: TypedContractMethod<[], [bigint], "view">;

  getCompoundedBoldDeposit: TypedContractMethod<
    [_depositor: AddressLike],
    [bigint],
    "view"
  >;

  getDepositorCollGain: TypedContractMethod<
    [_depositor: AddressLike],
    [bigint],
    "view"
  >;

  getDepositorYieldGain: TypedContractMethod<
    [_depositor: AddressLike],
    [bigint],
    "view"
  >;

  getDepositorYieldGainWithPending: TypedContractMethod<
    [_depositor: AddressLike],
    [bigint],
    "view"
  >;

  getEntireSystemColl: TypedContractMethod<[], [bigint], "view">;

  getEntireSystemDebt: TypedContractMethod<[], [bigint], "view">;

  getTotalBoldDeposits: TypedContractMethod<[], [bigint], "view">;

  getYieldGainsOwed: TypedContractMethod<[], [bigint], "view">;

  getYieldGainsPending: TypedContractMethod<[], [bigint], "view">;

  lastBoldLossError_Offset: TypedContractMethod<[], [bigint], "view">;

  lastCollError_Offset: TypedContractMethod<[], [bigint], "view">;

  lastYieldError: TypedContractMethod<[], [bigint], "view">;

  offset: TypedContractMethod<
    [_debtToOffset: BigNumberish, _collToAdd: BigNumberish],
    [void],
    "nonpayable"
  >;

  provideToSP: TypedContractMethod<
    [_topUp: BigNumberish, _doClaim: boolean],
    [void],
    "nonpayable"
  >;

  stashedColl: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  triggerBoldRewards: TypedContractMethod<
    [_boldYield: BigNumberish],
    [void],
    "nonpayable"
  >;

  troveManager: TypedContractMethod<[], [string], "view">;

  withdrawFromSP: TypedContractMethod<
    [_amount: BigNumberish, _doClaim: boolean],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "NAME"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(nameOrSignature: "P"): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "SCALE_FACTOR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "activePool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "boldToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "claimAllCollGains"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "collToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "currentEpoch"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "currentScale"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "depositSnapshots"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        S: bigint;
        P: bigint;
        B: bigint;
        scale: bigint;
        epoch: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "deposits"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "epochToScaleToB"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "epochToScaleToS"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCollBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCompoundedBoldDeposit"
  ): TypedContractMethod<[_depositor: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getDepositorCollGain"
  ): TypedContractMethod<[_depositor: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getDepositorYieldGain"
  ): TypedContractMethod<[_depositor: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getDepositorYieldGainWithPending"
  ): TypedContractMethod<[_depositor: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getEntireSystemColl"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getEntireSystemDebt"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTotalBoldDeposits"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getYieldGainsOwed"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getYieldGainsPending"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastBoldLossError_Offset"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastCollError_Offset"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "lastYieldError"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "offset"
  ): TypedContractMethod<
    [_debtToOffset: BigNumberish, _collToAdd: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "provideToSP"
  ): TypedContractMethod<
    [_topUp: BigNumberish, _doClaim: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "stashedColl"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "triggerBoldRewards"
  ): TypedContractMethod<[_boldYield: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "troveManager"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdrawFromSP"
  ): TypedContractMethod<
    [_amount: BigNumberish, _doClaim: boolean],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ActivePoolAddressChanged"
  ): TypedContractEvent<
    ActivePoolAddressChangedEvent.InputTuple,
    ActivePoolAddressChangedEvent.OutputTuple,
    ActivePoolAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "B_Updated"
  ): TypedContractEvent<
    B_UpdatedEvent.InputTuple,
    B_UpdatedEvent.OutputTuple,
    B_UpdatedEvent.OutputObject
  >;
  getEvent(
    key: "BoldTokenAddressChanged"
  ): TypedContractEvent<
    BoldTokenAddressChangedEvent.InputTuple,
    BoldTokenAddressChangedEvent.OutputTuple,
    BoldTokenAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "DefaultPoolAddressChanged"
  ): TypedContractEvent<
    DefaultPoolAddressChangedEvent.InputTuple,
    DefaultPoolAddressChangedEvent.OutputTuple,
    DefaultPoolAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "DepositOperation"
  ): TypedContractEvent<
    DepositOperationEvent.InputTuple,
    DepositOperationEvent.OutputTuple,
    DepositOperationEvent.OutputObject
  >;
  getEvent(
    key: "DepositUpdated"
  ): TypedContractEvent<
    DepositUpdatedEvent.InputTuple,
    DepositUpdatedEvent.OutputTuple,
    DepositUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "EpochUpdated"
  ): TypedContractEvent<
    EpochUpdatedEvent.InputTuple,
    EpochUpdatedEvent.OutputTuple,
    EpochUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "EtherSent"
  ): TypedContractEvent<
    EtherSentEvent.InputTuple,
    EtherSentEvent.OutputTuple,
    EtherSentEvent.OutputObject
  >;
  getEvent(
    key: "P_Updated"
  ): TypedContractEvent<
    P_UpdatedEvent.InputTuple,
    P_UpdatedEvent.OutputTuple,
    P_UpdatedEvent.OutputObject
  >;
  getEvent(
    key: "PriceFeedAddressChanged"
  ): TypedContractEvent<
    PriceFeedAddressChangedEvent.InputTuple,
    PriceFeedAddressChangedEvent.OutputTuple,
    PriceFeedAddressChangedEvent.OutputObject
  >;
  getEvent(
    key: "S_Updated"
  ): TypedContractEvent<
    S_UpdatedEvent.InputTuple,
    S_UpdatedEvent.OutputTuple,
    S_UpdatedEvent.OutputObject
  >;
  getEvent(
    key: "ScaleUpdated"
  ): TypedContractEvent<
    ScaleUpdatedEvent.InputTuple,
    ScaleUpdatedEvent.OutputTuple,
    ScaleUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "StabilityPoolBoldBalanceUpdated"
  ): TypedContractEvent<
    StabilityPoolBoldBalanceUpdatedEvent.InputTuple,
    StabilityPoolBoldBalanceUpdatedEvent.OutputTuple,
    StabilityPoolBoldBalanceUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "StabilityPoolCollBalanceUpdated"
  ): TypedContractEvent<
    StabilityPoolCollBalanceUpdatedEvent.InputTuple,
    StabilityPoolCollBalanceUpdatedEvent.OutputTuple,
    StabilityPoolCollBalanceUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "TroveManagerAddressChanged"
  ): TypedContractEvent<
    TroveManagerAddressChangedEvent.InputTuple,
    TroveManagerAddressChangedEvent.OutputTuple,
    TroveManagerAddressChangedEvent.OutputObject
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

    "B_Updated(uint256,uint128,uint128)": TypedContractEvent<
      B_UpdatedEvent.InputTuple,
      B_UpdatedEvent.OutputTuple,
      B_UpdatedEvent.OutputObject
    >;
    B_Updated: TypedContractEvent<
      B_UpdatedEvent.InputTuple,
      B_UpdatedEvent.OutputTuple,
      B_UpdatedEvent.OutputObject
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

    "DepositOperation(address,uint8,uint256,int256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      DepositOperationEvent.InputTuple,
      DepositOperationEvent.OutputTuple,
      DepositOperationEvent.OutputObject
    >;
    DepositOperation: TypedContractEvent<
      DepositOperationEvent.InputTuple,
      DepositOperationEvent.OutputTuple,
      DepositOperationEvent.OutputObject
    >;

    "DepositUpdated(address,uint256,uint256,uint256,uint256,uint256,uint256,uint256)": TypedContractEvent<
      DepositUpdatedEvent.InputTuple,
      DepositUpdatedEvent.OutputTuple,
      DepositUpdatedEvent.OutputObject
    >;
    DepositUpdated: TypedContractEvent<
      DepositUpdatedEvent.InputTuple,
      DepositUpdatedEvent.OutputTuple,
      DepositUpdatedEvent.OutputObject
    >;

    "EpochUpdated(uint128)": TypedContractEvent<
      EpochUpdatedEvent.InputTuple,
      EpochUpdatedEvent.OutputTuple,
      EpochUpdatedEvent.OutputObject
    >;
    EpochUpdated: TypedContractEvent<
      EpochUpdatedEvent.InputTuple,
      EpochUpdatedEvent.OutputTuple,
      EpochUpdatedEvent.OutputObject
    >;

    "EtherSent(address,uint256)": TypedContractEvent<
      EtherSentEvent.InputTuple,
      EtherSentEvent.OutputTuple,
      EtherSentEvent.OutputObject
    >;
    EtherSent: TypedContractEvent<
      EtherSentEvent.InputTuple,
      EtherSentEvent.OutputTuple,
      EtherSentEvent.OutputObject
    >;

    "P_Updated(uint256)": TypedContractEvent<
      P_UpdatedEvent.InputTuple,
      P_UpdatedEvent.OutputTuple,
      P_UpdatedEvent.OutputObject
    >;
    P_Updated: TypedContractEvent<
      P_UpdatedEvent.InputTuple,
      P_UpdatedEvent.OutputTuple,
      P_UpdatedEvent.OutputObject
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

    "S_Updated(uint256,uint128,uint128)": TypedContractEvent<
      S_UpdatedEvent.InputTuple,
      S_UpdatedEvent.OutputTuple,
      S_UpdatedEvent.OutputObject
    >;
    S_Updated: TypedContractEvent<
      S_UpdatedEvent.InputTuple,
      S_UpdatedEvent.OutputTuple,
      S_UpdatedEvent.OutputObject
    >;

    "ScaleUpdated(uint128)": TypedContractEvent<
      ScaleUpdatedEvent.InputTuple,
      ScaleUpdatedEvent.OutputTuple,
      ScaleUpdatedEvent.OutputObject
    >;
    ScaleUpdated: TypedContractEvent<
      ScaleUpdatedEvent.InputTuple,
      ScaleUpdatedEvent.OutputTuple,
      ScaleUpdatedEvent.OutputObject
    >;

    "StabilityPoolBoldBalanceUpdated(uint256)": TypedContractEvent<
      StabilityPoolBoldBalanceUpdatedEvent.InputTuple,
      StabilityPoolBoldBalanceUpdatedEvent.OutputTuple,
      StabilityPoolBoldBalanceUpdatedEvent.OutputObject
    >;
    StabilityPoolBoldBalanceUpdated: TypedContractEvent<
      StabilityPoolBoldBalanceUpdatedEvent.InputTuple,
      StabilityPoolBoldBalanceUpdatedEvent.OutputTuple,
      StabilityPoolBoldBalanceUpdatedEvent.OutputObject
    >;

    "StabilityPoolCollBalanceUpdated(uint256)": TypedContractEvent<
      StabilityPoolCollBalanceUpdatedEvent.InputTuple,
      StabilityPoolCollBalanceUpdatedEvent.OutputTuple,
      StabilityPoolCollBalanceUpdatedEvent.OutputObject
    >;
    StabilityPoolCollBalanceUpdated: TypedContractEvent<
      StabilityPoolCollBalanceUpdatedEvent.InputTuple,
      StabilityPoolCollBalanceUpdatedEvent.OutputTuple,
      StabilityPoolCollBalanceUpdatedEvent.OutputObject
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
  };
}