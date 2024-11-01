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

export interface HintHelpersInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "NAME"
      | "collateralRegistry"
      | "forcePredictAdjustInterestRateUpfrontFee"
      | "forcePredictJoinBatchInterestRateUpfrontFee"
      | "getApproxHint"
      | "predictAdjustBatchInterestRateUpfrontFee"
      | "predictAdjustInterestRateUpfrontFee"
      | "predictAdjustTroveUpfrontFee"
      | "predictJoinBatchInterestRateUpfrontFee"
      | "predictOpenTroveAndJoinBatchUpfrontFee"
      | "predictOpenTroveUpfrontFee"
      | "predictRemoveFromBatchUpfrontFee"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "collateralRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "forcePredictAdjustInterestRateUpfrontFee",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "forcePredictJoinBatchInterestRateUpfrontFee",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getApproxHint",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "predictAdjustBatchInterestRateUpfrontFee",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "predictAdjustInterestRateUpfrontFee",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "predictAdjustTroveUpfrontFee",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "predictJoinBatchInterestRateUpfrontFee",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "predictOpenTroveAndJoinBatchUpfrontFee",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "predictOpenTroveUpfrontFee",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "predictRemoveFromBatchUpfrontFee",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forcePredictAdjustInterestRateUpfrontFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forcePredictJoinBatchInterestRateUpfrontFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getApproxHint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "predictAdjustBatchInterestRateUpfrontFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "predictAdjustInterestRateUpfrontFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "predictAdjustTroveUpfrontFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "predictJoinBatchInterestRateUpfrontFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "predictOpenTroveAndJoinBatchUpfrontFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "predictOpenTroveUpfrontFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "predictRemoveFromBatchUpfrontFee",
    data: BytesLike
  ): Result;
}

export interface HintHelpers extends BaseContract {
  connect(runner?: ContractRunner | null): HintHelpers;
  waitForDeployment(): Promise<this>;

  interface: HintHelpersInterface;

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

  collateralRegistry: TypedContractMethod<[], [string], "view">;

  forcePredictAdjustInterestRateUpfrontFee: TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _newInterestRate: BigNumberish
    ],
    [bigint],
    "view"
  >;

  forcePredictJoinBatchInterestRateUpfrontFee: TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _batchAddress: AddressLike
    ],
    [bigint],
    "view"
  >;

  getApproxHint: TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _interestRate: BigNumberish,
      _numTrials: BigNumberish,
      _inputRandomSeed: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        hintId: bigint;
        diff: bigint;
        latestRandomSeed: bigint;
      }
    ],
    "view"
  >;

  predictAdjustBatchInterestRateUpfrontFee: TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _batchAddress: AddressLike,
      _newInterestRate: BigNumberish
    ],
    [bigint],
    "view"
  >;

  predictAdjustInterestRateUpfrontFee: TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _newInterestRate: BigNumberish
    ],
    [bigint],
    "view"
  >;

  predictAdjustTroveUpfrontFee: TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _debtIncrease: BigNumberish
    ],
    [bigint],
    "view"
  >;

  predictJoinBatchInterestRateUpfrontFee: TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _batchAddress: AddressLike
    ],
    [bigint],
    "view"
  >;

  predictOpenTroveAndJoinBatchUpfrontFee: TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _borrowedAmount: BigNumberish,
      _batchAddress: AddressLike
    ],
    [bigint],
    "view"
  >;

  predictOpenTroveUpfrontFee: TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _borrowedAmount: BigNumberish,
      _interestRate: BigNumberish
    ],
    [bigint],
    "view"
  >;

  predictRemoveFromBatchUpfrontFee: TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _newInterestRate: BigNumberish
    ],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "NAME"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "collateralRegistry"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "forcePredictAdjustInterestRateUpfrontFee"
  ): TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _newInterestRate: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "forcePredictJoinBatchInterestRateUpfrontFee"
  ): TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _batchAddress: AddressLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getApproxHint"
  ): TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _interestRate: BigNumberish,
      _numTrials: BigNumberish,
      _inputRandomSeed: BigNumberish
    ],
    [
      [bigint, bigint, bigint] & {
        hintId: bigint;
        diff: bigint;
        latestRandomSeed: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "predictAdjustBatchInterestRateUpfrontFee"
  ): TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _batchAddress: AddressLike,
      _newInterestRate: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "predictAdjustInterestRateUpfrontFee"
  ): TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _newInterestRate: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "predictAdjustTroveUpfrontFee"
  ): TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _debtIncrease: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "predictJoinBatchInterestRateUpfrontFee"
  ): TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _batchAddress: AddressLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "predictOpenTroveAndJoinBatchUpfrontFee"
  ): TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _borrowedAmount: BigNumberish,
      _batchAddress: AddressLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "predictOpenTroveUpfrontFee"
  ): TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _borrowedAmount: BigNumberish,
      _interestRate: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "predictRemoveFromBatchUpfrontFee"
  ): TypedContractMethod<
    [
      _collIndex: BigNumberish,
      _troveId: BigNumberish,
      _newInterestRate: BigNumberish
    ],
    [bigint],
    "view"
  >;

  filters: {};
}
