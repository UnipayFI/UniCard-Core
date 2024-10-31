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

export declare namespace IUniCardRegistry {
  export type CommitmentStruct = {
    productCode: string;
    holder: AddressLike;
    paymentToken: AddressLike;
    interestRate: BigNumberish;
    deadline: BigNumberish;
    nonce: BigNumberish;
  };

  export type CommitmentStructOutput = [
    productCode: string,
    holder: string,
    paymentToken: string,
    interestRate: bigint,
    deadline: bigint,
    nonce: bigint
  ] & {
    productCode: string;
    holder: string;
    paymentToken: string;
    interestRate: bigint;
    deadline: bigint;
    nonce: bigint;
  };

  export type ConfirmationStruct = {
    productCode: string;
    holder: AddressLike;
    paymentToken: AddressLike;
    nonce: BigNumberish;
    interestRate: BigNumberish;
    commitment: BytesLike;
    requestTxHash: string;
  };

  export type ConfirmationStructOutput = [
    productCode: string,
    holder: string,
    paymentToken: string,
    nonce: bigint,
    interestRate: bigint,
    commitment: string,
    requestTxHash: string
  ] & {
    productCode: string;
    holder: string;
    paymentToken: string;
    nonce: bigint;
    interestRate: bigint;
    commitment: string;
    requestTxHash: string;
  };
}

export interface UniCardRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ALLOWED_TOKEN_PAYMENT"
      | "CONTROLLER_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "INTEREST_RATE_PRECISION"
      | "NATIVE_TOKEN"
      | "UNICARD_VAULT_ROLE"
      | "commitments"
      | "confirmationKey"
      | "confirmations"
      | "getRoleAdmin"
      | "grantRole"
      | "hasAdminRole"
      | "hasControllerRole"
      | "hasRole"
      | "nonces"
      | "openCardConfirmation"
      | "openCardRequest"
      | "paused"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CardOpenConfirmation"
      | "CardOpenRequest"
      | "Paused"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ALLOWED_TOKEN_PAYMENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CONTROLLER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INTEREST_RATE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NATIVE_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNICARD_VAULT_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commitments",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmationKey",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmations",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasAdminRole",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasControllerRole",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "openCardConfirmation",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      string,
      BytesLike,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "openCardRequest",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string,
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "ALLOWED_TOKEN_PAYMENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CONTROLLER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INTEREST_RATE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NATIVE_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNICARD_VAULT_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmationKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hasAdminRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasControllerRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openCardConfirmation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openCardRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
}

export namespace CardOpenConfirmationEvent {
  export type InputTuple = [
    holder: AddressLike,
    paymentToken: AddressLike,
    vault: AddressLike,
    nonce: BigNumberish,
    interestRate: BigNumberish,
    deadline: BigNumberish,
    commitment: BytesLike,
    requestTxHash: string
  ];
  export type OutputTuple = [
    holder: string,
    paymentToken: string,
    vault: string,
    nonce: bigint,
    interestRate: bigint,
    deadline: bigint,
    commitment: string,
    requestTxHash: string
  ];
  export interface OutputObject {
    holder: string;
    paymentToken: string;
    vault: string;
    nonce: bigint;
    interestRate: bigint;
    deadline: bigint;
    commitment: string;
    requestTxHash: string;
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
    interestRate: BigNumberish,
    deadline: BigNumberish,
    amount: BigNumberish,
    productCode: string,
    inviteCode: string,
    referralCode: string,
    commitment: BytesLike
  ];
  export type OutputTuple = [
    holder: string,
    paymentToken: string,
    nonce: bigint,
    interestRate: bigint,
    deadline: bigint,
    amount: bigint,
    productCode: string,
    inviteCode: string,
    referralCode: string,
    commitment: string
  ];
  export interface OutputObject {
    holder: string;
    paymentToken: string;
    nonce: bigint;
    interestRate: bigint;
    deadline: bigint;
    amount: bigint;
    productCode: string;
    inviteCode: string;
    referralCode: string;
    commitment: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface UniCardRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): UniCardRegistry;
  waitForDeployment(): Promise<this>;

  interface: UniCardRegistryInterface;

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

  ALLOWED_TOKEN_PAYMENT: TypedContractMethod<[], [string], "view">;

  CONTROLLER_ROLE: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  INTEREST_RATE_PRECISION: TypedContractMethod<[], [bigint], "view">;

  NATIVE_TOKEN: TypedContractMethod<[], [string], "view">;

  UNICARD_VAULT_ROLE: TypedContractMethod<[], [string], "view">;

  commitments: TypedContractMethod<
    [commitment: BytesLike],
    [IUniCardRegistry.CommitmentStructOutput],
    "view"
  >;

  confirmationKey: TypedContractMethod<
    [aHolder: AddressLike, aNonce: BigNumberish],
    [string],
    "view"
  >;

  confirmations: TypedContractMethod<
    [confirmation: BytesLike],
    [IUniCardRegistry.ConfirmationStructOutput],
    "view"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasAdminRole: TypedContractMethod<
    [anAddress: AddressLike],
    [boolean],
    "view"
  >;

  hasControllerRole: TypedContractMethod<
    [anAddress: AddressLike],
    [boolean],
    "view"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  nonces: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  openCardConfirmation: TypedContractMethod<
    [
      holder: AddressLike,
      paymentToken: AddressLike,
      interestRate: BigNumberish,
      nonce: BigNumberish,
      deadline: BigNumberish,
      amount: BigNumberish,
      vault: AddressLike,
      productCode: string,
      signature: BytesLike,
      requestTxHash: string
    ],
    [void],
    "payable"
  >;

  openCardRequest: TypedContractMethod<
    [
      holder: AddressLike,
      paymentToken: AddressLike,
      interestRate: BigNumberish,
      deadline: BigNumberish,
      amount: BigNumberish,
      productCode: string,
      inviteCode: string,
      referralCode: string
    ],
    [void],
    "nonpayable"
  >;

  paused: TypedContractMethod<[], [boolean], "view">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ALLOWED_TOKEN_PAYMENT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "CONTROLLER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "INTEREST_RATE_PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "NATIVE_TOKEN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UNICARD_VAULT_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "commitments"
  ): TypedContractMethod<
    [commitment: BytesLike],
    [IUniCardRegistry.CommitmentStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "confirmationKey"
  ): TypedContractMethod<
    [aHolder: AddressLike, aNonce: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "confirmations"
  ): TypedContractMethod<
    [confirmation: BytesLike],
    [IUniCardRegistry.ConfirmationStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasAdminRole"
  ): TypedContractMethod<[anAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "hasControllerRole"
  ): TypedContractMethod<[anAddress: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "nonces"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "openCardConfirmation"
  ): TypedContractMethod<
    [
      holder: AddressLike,
      paymentToken: AddressLike,
      interestRate: BigNumberish,
      nonce: BigNumberish,
      deadline: BigNumberish,
      amount: BigNumberish,
      vault: AddressLike,
      productCode: string,
      signature: BytesLike,
      requestTxHash: string
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "openCardRequest"
  ): TypedContractMethod<
    [
      holder: AddressLike,
      paymentToken: AddressLike,
      interestRate: BigNumberish,
      deadline: BigNumberish,
      amount: BigNumberish,
      productCode: string,
      inviteCode: string,
      referralCode: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;

  getEvent(
    key: "CardOpenConfirmation"
  ): TypedContractEvent<
    CardOpenConfirmationEvent.InputTuple,
    CardOpenConfirmationEvent.OutputTuple,
    CardOpenConfirmationEvent.OutputObject
  >;
  getEvent(
    key: "CardOpenRequest"
  ): TypedContractEvent<
    CardOpenRequestEvent.InputTuple,
    CardOpenRequestEvent.OutputTuple,
    CardOpenRequestEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;

  filters: {
    "CardOpenConfirmation(address,address,address,uint256,uint256,uint256,bytes32,string)": TypedContractEvent<
      CardOpenConfirmationEvent.InputTuple,
      CardOpenConfirmationEvent.OutputTuple,
      CardOpenConfirmationEvent.OutputObject
    >;
    CardOpenConfirmation: TypedContractEvent<
      CardOpenConfirmationEvent.InputTuple,
      CardOpenConfirmationEvent.OutputTuple,
      CardOpenConfirmationEvent.OutputObject
    >;

    "CardOpenRequest(address,address,uint256,uint256,uint256,uint256,string,string,string,bytes32)": TypedContractEvent<
      CardOpenRequestEvent.InputTuple,
      CardOpenRequestEvent.OutputTuple,
      CardOpenRequestEvent.OutputObject
    >;
    CardOpenRequest: TypedContractEvent<
      CardOpenRequestEvent.InputTuple,
      CardOpenRequestEvent.OutputTuple,
      CardOpenRequestEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
  };
}