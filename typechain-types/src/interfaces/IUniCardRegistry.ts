/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  FunctionFragment,
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
} from "../../common";

export interface IUniCardRegistryInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "CardCloseRequest"
      | "CardOpenRequest"
      | "TogglePause"
  ): EventFragment;
}

export namespace CardCloseRequestEvent {
  export type InputTuple = [holder: AddressLike, nonce: BigNumberish];
  export type OutputTuple = [holder: string, nonce: bigint];
  export interface OutputObject {
    holder: string;
    nonce: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CardOpenRequestEvent {
  export type InputTuple = [
    holder: AddressLike,
    paymentToken: AddressLike,
    nonce: BigNumberish,
    amount: BigNumberish,
    productCode: string,
    inviteCode: string,
    referralCode: string
  ];
  export type OutputTuple = [
    holder: string,
    paymentToken: string,
    nonce: bigint,
    amount: bigint,
    productCode: string,
    inviteCode: string,
    referralCode: string
  ];
  export interface OutputObject {
    holder: string;
    paymentToken: string;
    nonce: bigint;
    amount: bigint;
    productCode: string;
    inviteCode: string;
    referralCode: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TogglePauseEvent {
  export type InputTuple = [isPaused: boolean];
  export type OutputTuple = [isPaused: boolean];
  export interface OutputObject {
    isPaused: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IUniCardRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): IUniCardRegistry;
  waitForDeployment(): Promise<this>;

  interface: IUniCardRegistryInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "CardCloseRequest"
  ): TypedContractEvent<
    CardCloseRequestEvent.InputTuple,
    CardCloseRequestEvent.OutputTuple,
    CardCloseRequestEvent.OutputObject
  >;
  getEvent(
    key: "CardOpenRequest"
  ): TypedContractEvent<
    CardOpenRequestEvent.InputTuple,
    CardOpenRequestEvent.OutputTuple,
    CardOpenRequestEvent.OutputObject
  >;
  getEvent(
    key: "TogglePause"
  ): TypedContractEvent<
    TogglePauseEvent.InputTuple,
    TogglePauseEvent.OutputTuple,
    TogglePauseEvent.OutputObject
  >;

  filters: {
    "CardCloseRequest(address,uint256)": TypedContractEvent<
      CardCloseRequestEvent.InputTuple,
      CardCloseRequestEvent.OutputTuple,
      CardCloseRequestEvent.OutputObject
    >;
    CardCloseRequest: TypedContractEvent<
      CardCloseRequestEvent.InputTuple,
      CardCloseRequestEvent.OutputTuple,
      CardCloseRequestEvent.OutputObject
    >;

    "CardOpenRequest(address,address,uint256,uint256,string,string,string)": TypedContractEvent<
      CardOpenRequestEvent.InputTuple,
      CardOpenRequestEvent.OutputTuple,
      CardOpenRequestEvent.OutputObject
    >;
    CardOpenRequest: TypedContractEvent<
      CardOpenRequestEvent.InputTuple,
      CardOpenRequestEvent.OutputTuple,
      CardOpenRequestEvent.OutputObject
    >;

    "TogglePause(bool)": TypedContractEvent<
      TogglePauseEvent.InputTuple,
      TogglePauseEvent.OutputTuple,
      TogglePauseEvent.OutputObject
    >;
    TogglePause: TypedContractEvent<
      TogglePauseEvent.InputTuple,
      TogglePauseEvent.OutputTuple,
      TogglePauseEvent.OutputObject
    >;
  };
}
