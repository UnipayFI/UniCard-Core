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

export interface AddRemoveManagersInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addManagerOf"
      | "removeManagerReceiverOf"
      | "setAddManager"
      | "setRemoveManager"
      | "setRemoveManagerWithReceiver"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "TroveNFTAddressChanged"): EventFragment;

  encodeFunctionData(
    functionFragment: "addManagerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeManagerReceiverOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddManager",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRemoveManager",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRemoveManagerWithReceiver",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "addManagerOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeManagerReceiverOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAddManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRemoveManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRemoveManagerWithReceiver",
    data: BytesLike
  ): Result;
}

export namespace TroveNFTAddressChangedEvent {
  export type InputTuple = [_newTroveNFTAddress: AddressLike];
  export type OutputTuple = [_newTroveNFTAddress: string];
  export interface OutputObject {
    _newTroveNFTAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AddRemoveManagers extends BaseContract {
  connect(runner?: ContractRunner | null): AddRemoveManagers;
  waitForDeployment(): Promise<this>;

  interface: AddRemoveManagersInterface;

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

  addManagerOf: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  removeManagerReceiverOf: TypedContractMethod<
    [arg0: BigNumberish],
    [[string, string] & { manager: string; receiver: string }],
    "view"
  >;

  setAddManager: TypedContractMethod<
    [_troveId: BigNumberish, _manager: AddressLike],
    [void],
    "nonpayable"
  >;

  setRemoveManager: TypedContractMethod<
    [_troveId: BigNumberish, _manager: AddressLike],
    [void],
    "nonpayable"
  >;

  setRemoveManagerWithReceiver: TypedContractMethod<
    [_troveId: BigNumberish, _manager: AddressLike, _receiver: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addManagerOf"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "removeManagerReceiverOf"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [[string, string] & { manager: string; receiver: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "setAddManager"
  ): TypedContractMethod<
    [_troveId: BigNumberish, _manager: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRemoveManager"
  ): TypedContractMethod<
    [_troveId: BigNumberish, _manager: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setRemoveManagerWithReceiver"
  ): TypedContractMethod<
    [_troveId: BigNumberish, _manager: AddressLike, _receiver: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "TroveNFTAddressChanged"
  ): TypedContractEvent<
    TroveNFTAddressChangedEvent.InputTuple,
    TroveNFTAddressChangedEvent.OutputTuple,
    TroveNFTAddressChangedEvent.OutputObject
  >;

  filters: {
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
  };
}
