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
} from "../../common";

export declare namespace IBorrowerOperations {
  export type InterestBatchManagerStruct = {
    minInterestRate: BigNumberish;
    maxInterestRate: BigNumberish;
    minInterestRateChangePeriod: BigNumberish;
  };

  export type InterestBatchManagerStructOutput = [
    minInterestRate: bigint,
    maxInterestRate: bigint,
    minInterestRateChangePeriod: bigint
  ] & {
    minInterestRate: bigint;
    maxInterestRate: bigint;
    minInterestRateChangePeriod: bigint;
  };

  export type InterestIndividualDelegateStruct = {
    account: AddressLike;
    minInterestRate: BigNumberish;
    maxInterestRate: BigNumberish;
  };

  export type InterestIndividualDelegateStructOutput = [
    account: string,
    minInterestRate: bigint,
    maxInterestRate: bigint
  ] & { account: string; minInterestRate: bigint; maxInterestRate: bigint };

  export type OpenTroveAndJoinInterestBatchManagerParamsStruct = {
    owner: AddressLike;
    ownerIndex: BigNumberish;
    collAmount: BigNumberish;
    boldAmount: BigNumberish;
    upperHint: BigNumberish;
    lowerHint: BigNumberish;
    interestBatchManager: AddressLike;
    maxUpfrontFee: BigNumberish;
    addManager: AddressLike;
    removeManager: AddressLike;
    receiver: AddressLike;
  };

  export type OpenTroveAndJoinInterestBatchManagerParamsStructOutput = [
    owner: string,
    ownerIndex: bigint,
    collAmount: bigint,
    boldAmount: bigint,
    upperHint: bigint,
    lowerHint: bigint,
    interestBatchManager: string,
    maxUpfrontFee: bigint,
    addManager: string,
    removeManager: string,
    receiver: string
  ] & {
    owner: string;
    ownerIndex: bigint;
    collAmount: bigint;
    boldAmount: bigint;
    upperHint: bigint;
    lowerHint: bigint;
    interestBatchManager: string;
    maxUpfrontFee: bigint;
    addManager: string;
    removeManager: string;
    receiver: string;
  };
}

export interface IBorrowerOperationsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CCR"
      | "MCR"
      | "SCR"
      | "activePool"
      | "addColl"
      | "addManagerOf"
      | "adjustTrove"
      | "adjustTroveInterestRate"
      | "adjustUnredeemableTrove"
      | "applyPendingDebt"
      | "checkBatchManagerExists"
      | "claimCollateral"
      | "closeTrove"
      | "getEntireSystemColl"
      | "getEntireSystemDebt"
      | "getInterestBatchManager"
      | "getInterestIndividualDelegateOf"
      | "hasBeenShutDown"
      | "interestBatchManagerOf"
      | "lowerBatchManagementFee"
      | "onLiquidateTrove"
      | "openTrove"
      | "openTroveAndJoinInterestBatchManager"
      | "registerBatchManager"
      | "removeFromBatch"
      | "removeInterestIndividualDelegate"
      | "removeManagerReceiverOf"
      | "repayBold"
      | "setAddManager"
      | "setBatchManagerAnnualInterestRate"
      | "setInterestBatchManager"
      | "setInterestIndividualDelegate"
      | "setRemoveManager"
      | "setRemoveManagerWithReceiver"
      | "shutdown"
      | "shutdownFromOracleFailure"
      | "switchBatchManager"
      | "withdrawBold"
      | "withdrawColl"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "CCR", values?: undefined): string;
  encodeFunctionData(functionFragment: "MCR", values?: undefined): string;
  encodeFunctionData(functionFragment: "SCR", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "activePool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addColl",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addManagerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "adjustTrove",
    values: [
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "adjustTroveInterestRate",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "adjustUnredeemableTrove",
    values: [
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish,
      boolean,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "applyPendingDebt",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkBatchManagerExists",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimCollateral",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "closeTrove",
    values: [BigNumberish]
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
    functionFragment: "getInterestBatchManager",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getInterestIndividualDelegateOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasBeenShutDown",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "interestBatchManagerOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lowerBatchManagementFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "onLiquidateTrove",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "openTrove",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "openTroveAndJoinInterestBatchManager",
    values: [
      IBorrowerOperations.OpenTroveAndJoinInterestBatchManagerParamsStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerBatchManager",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeFromBatch",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeInterestIndividualDelegate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeManagerReceiverOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repayBold",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddManager",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchManagerAnnualInterestRate",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterestBatchManager",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterestIndividualDelegate",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setRemoveManager",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRemoveManagerWithReceiver",
    values: [BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "shutdown", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "shutdownFromOracleFailure",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "switchBatchManager",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawBold",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawColl",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "CCR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MCR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SCR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "activePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addColl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addManagerOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adjustTrove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adjustTroveInterestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adjustUnredeemableTrove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "applyPendingDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkBatchManagerExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "closeTrove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEntireSystemColl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEntireSystemDebt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInterestBatchManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInterestIndividualDelegateOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasBeenShutDown",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interestBatchManagerOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lowerBatchManagementFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onLiquidateTrove",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "openTrove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "openTroveAndJoinInterestBatchManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerBatchManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeFromBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeInterestIndividualDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeManagerReceiverOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repayBold", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAddManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBatchManagerAnnualInterestRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInterestBatchManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInterestIndividualDelegate",
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
  decodeFunctionResult(functionFragment: "shutdown", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "shutdownFromOracleFailure",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "switchBatchManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawBold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawColl",
    data: BytesLike
  ): Result;
}

export interface IBorrowerOperations extends BaseContract {
  connect(runner?: ContractRunner | null): IBorrowerOperations;
  waitForDeployment(): Promise<this>;

  interface: IBorrowerOperationsInterface;

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

  MCR: TypedContractMethod<[], [bigint], "view">;

  SCR: TypedContractMethod<[], [bigint], "view">;

  activePool: TypedContractMethod<[], [string], "view">;

  addColl: TypedContractMethod<
    [_troveId: BigNumberish, _ETHAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  addManagerOf: TypedContractMethod<[_troveId: BigNumberish], [string], "view">;

  adjustTrove: TypedContractMethod<
    [
      _troveId: BigNumberish,
      _collChange: BigNumberish,
      _isCollIncrease: boolean,
      _debtChange: BigNumberish,
      isDebtIncrease: boolean,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  adjustTroveInterestRate: TypedContractMethod<
    [
      _troveId: BigNumberish,
      _newAnnualInterestRate: BigNumberish,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  adjustUnredeemableTrove: TypedContractMethod<
    [
      _troveId: BigNumberish,
      _collChange: BigNumberish,
      _isCollIncrease: boolean,
      _boldChange: BigNumberish,
      _isDebtIncrease: boolean,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  applyPendingDebt: TypedContractMethod<
    [
      _troveId: BigNumberish,
      _lowerHint: BigNumberish,
      _upperHint: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  checkBatchManagerExists: TypedContractMethod<
    [_batchMananger: AddressLike],
    [boolean],
    "view"
  >;

  claimCollateral: TypedContractMethod<[], [void], "nonpayable">;

  closeTrove: TypedContractMethod<
    [_troveId: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEntireSystemColl: TypedContractMethod<[], [bigint], "view">;

  getEntireSystemDebt: TypedContractMethod<[], [bigint], "view">;

  getInterestBatchManager: TypedContractMethod<
    [_account: AddressLike],
    [IBorrowerOperations.InterestBatchManagerStructOutput],
    "view"
  >;

  getInterestIndividualDelegateOf: TypedContractMethod<
    [_troveId: BigNumberish],
    [IBorrowerOperations.InterestIndividualDelegateStructOutput],
    "view"
  >;

  hasBeenShutDown: TypedContractMethod<[], [boolean], "view">;

  interestBatchManagerOf: TypedContractMethod<
    [_troveId: BigNumberish],
    [string],
    "view"
  >;

  lowerBatchManagementFee: TypedContractMethod<
    [_newAnnualFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  onLiquidateTrove: TypedContractMethod<
    [_troveId: BigNumberish],
    [void],
    "nonpayable"
  >;

  openTrove: TypedContractMethod<
    [
      _owner: AddressLike,
      _ownerIndex: BigNumberish,
      _ETHAmount: BigNumberish,
      _boldAmount: BigNumberish,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _annualInterestRate: BigNumberish,
      _maxUpfrontFee: BigNumberish,
      _addManager: AddressLike,
      _removeManager: AddressLike,
      _receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  openTroveAndJoinInterestBatchManager: TypedContractMethod<
    [
      _params: IBorrowerOperations.OpenTroveAndJoinInterestBatchManagerParamsStruct
    ],
    [bigint],
    "nonpayable"
  >;

  registerBatchManager: TypedContractMethod<
    [
      minInterestRate: BigNumberish,
      maxInterestRate: BigNumberish,
      currentInterestRate: BigNumberish,
      fee: BigNumberish,
      minInterestRateChangePeriod: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  removeFromBatch: TypedContractMethod<
    [
      _troveId: BigNumberish,
      _newAnnualInterestRate: BigNumberish,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  removeInterestIndividualDelegate: TypedContractMethod<
    [_troveId: BigNumberish],
    [void],
    "nonpayable"
  >;

  removeManagerReceiverOf: TypedContractMethod<
    [_troveId: BigNumberish],
    [[string, string]],
    "view"
  >;

  repayBold: TypedContractMethod<
    [_troveId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setAddManager: TypedContractMethod<
    [_troveId: BigNumberish, _manager: AddressLike],
    [void],
    "nonpayable"
  >;

  setBatchManagerAnnualInterestRate: TypedContractMethod<
    [
      _newAnnualInterestRate: BigNumberish,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setInterestBatchManager: TypedContractMethod<
    [
      _troveId: BigNumberish,
      _newBatchManager: AddressLike,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setInterestIndividualDelegate: TypedContractMethod<
    [
      _troveId: BigNumberish,
      _delegate: AddressLike,
      _minInterestRate: BigNumberish,
      _maxInterestRate: BigNumberish,
      _newAnnualInterestRate: BigNumberish,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
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

  shutdown: TypedContractMethod<[], [void], "nonpayable">;

  shutdownFromOracleFailure: TypedContractMethod<
    [_failedOracleAddr: AddressLike],
    [void],
    "nonpayable"
  >;

  switchBatchManager: TypedContractMethod<
    [
      _troveId: BigNumberish,
      _removeUpperHint: BigNumberish,
      _removeLowerHint: BigNumberish,
      _newBatchManager: AddressLike,
      _addUpperHint: BigNumberish,
      _addLowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  withdrawBold: TypedContractMethod<
    [
      _troveId: BigNumberish,
      _amount: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  withdrawColl: TypedContractMethod<
    [_troveId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CCR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "MCR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "SCR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "activePool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "addColl"
  ): TypedContractMethod<
    [_troveId: BigNumberish, _ETHAmount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "addManagerOf"
  ): TypedContractMethod<[_troveId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "adjustTrove"
  ): TypedContractMethod<
    [
      _troveId: BigNumberish,
      _collChange: BigNumberish,
      _isCollIncrease: boolean,
      _debtChange: BigNumberish,
      isDebtIncrease: boolean,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "adjustTroveInterestRate"
  ): TypedContractMethod<
    [
      _troveId: BigNumberish,
      _newAnnualInterestRate: BigNumberish,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "adjustUnredeemableTrove"
  ): TypedContractMethod<
    [
      _troveId: BigNumberish,
      _collChange: BigNumberish,
      _isCollIncrease: boolean,
      _boldChange: BigNumberish,
      _isDebtIncrease: boolean,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "applyPendingDebt"
  ): TypedContractMethod<
    [
      _troveId: BigNumberish,
      _lowerHint: BigNumberish,
      _upperHint: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "checkBatchManagerExists"
  ): TypedContractMethod<[_batchMananger: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "claimCollateral"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "closeTrove"
  ): TypedContractMethod<[_troveId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getEntireSystemColl"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getEntireSystemDebt"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getInterestBatchManager"
  ): TypedContractMethod<
    [_account: AddressLike],
    [IBorrowerOperations.InterestBatchManagerStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getInterestIndividualDelegateOf"
  ): TypedContractMethod<
    [_troveId: BigNumberish],
    [IBorrowerOperations.InterestIndividualDelegateStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasBeenShutDown"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "interestBatchManagerOf"
  ): TypedContractMethod<[_troveId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "lowerBatchManagementFee"
  ): TypedContractMethod<[_newAnnualFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "onLiquidateTrove"
  ): TypedContractMethod<[_troveId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "openTrove"
  ): TypedContractMethod<
    [
      _owner: AddressLike,
      _ownerIndex: BigNumberish,
      _ETHAmount: BigNumberish,
      _boldAmount: BigNumberish,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _annualInterestRate: BigNumberish,
      _maxUpfrontFee: BigNumberish,
      _addManager: AddressLike,
      _removeManager: AddressLike,
      _receiver: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "openTroveAndJoinInterestBatchManager"
  ): TypedContractMethod<
    [
      _params: IBorrowerOperations.OpenTroveAndJoinInterestBatchManagerParamsStruct
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "registerBatchManager"
  ): TypedContractMethod<
    [
      minInterestRate: BigNumberish,
      maxInterestRate: BigNumberish,
      currentInterestRate: BigNumberish,
      fee: BigNumberish,
      minInterestRateChangePeriod: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeFromBatch"
  ): TypedContractMethod<
    [
      _troveId: BigNumberish,
      _newAnnualInterestRate: BigNumberish,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "removeInterestIndividualDelegate"
  ): TypedContractMethod<[_troveId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removeManagerReceiverOf"
  ): TypedContractMethod<[_troveId: BigNumberish], [[string, string]], "view">;
  getFunction(
    nameOrSignature: "repayBold"
  ): TypedContractMethod<
    [_troveId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAddManager"
  ): TypedContractMethod<
    [_troveId: BigNumberish, _manager: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setBatchManagerAnnualInterestRate"
  ): TypedContractMethod<
    [
      _newAnnualInterestRate: BigNumberish,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setInterestBatchManager"
  ): TypedContractMethod<
    [
      _troveId: BigNumberish,
      _newBatchManager: AddressLike,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setInterestIndividualDelegate"
  ): TypedContractMethod<
    [
      _troveId: BigNumberish,
      _delegate: AddressLike,
      _minInterestRate: BigNumberish,
      _maxInterestRate: BigNumberish,
      _newAnnualInterestRate: BigNumberish,
      _upperHint: BigNumberish,
      _lowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
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
  getFunction(
    nameOrSignature: "shutdown"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "shutdownFromOracleFailure"
  ): TypedContractMethod<
    [_failedOracleAddr: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "switchBatchManager"
  ): TypedContractMethod<
    [
      _troveId: BigNumberish,
      _removeUpperHint: BigNumberish,
      _removeLowerHint: BigNumberish,
      _newBatchManager: AddressLike,
      _addUpperHint: BigNumberish,
      _addLowerHint: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawBold"
  ): TypedContractMethod<
    [
      _troveId: BigNumberish,
      _amount: BigNumberish,
      _maxUpfrontFee: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawColl"
  ): TypedContractMethod<
    [_troveId: BigNumberish, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}
