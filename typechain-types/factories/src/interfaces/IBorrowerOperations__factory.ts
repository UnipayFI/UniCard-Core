/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IBorrowerOperations,
  IBorrowerOperationsInterface,
} from "../../../src/interfaces/IBorrowerOperations";

const _abi = [
  {
    inputs: [],
    name: "CCR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MCR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SCR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "activePool",
    outputs: [
      {
        internalType: "contract IActivePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ETHAmount",
        type: "uint256",
      },
    ],
    name: "addColl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
    ],
    name: "addManagerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_collChange",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isCollIncrease",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_debtChange",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isDebtIncrease",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_maxUpfrontFee",
        type: "uint256",
      },
    ],
    name: "adjustTrove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newAnnualInterestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_upperHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lowerHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxUpfrontFee",
        type: "uint256",
      },
    ],
    name: "adjustTroveInterestRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_collChange",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isCollIncrease",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_boldChange",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isDebtIncrease",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_upperHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lowerHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxUpfrontFee",
        type: "uint256",
      },
    ],
    name: "adjustUnredeemableTrove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lowerHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_upperHint",
        type: "uint256",
      },
    ],
    name: "applyPendingDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_batchMananger",
        type: "address",
      },
    ],
    name: "checkBatchManagerExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
    ],
    name: "closeTrove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntireSystemColl",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEntireSystemDebt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "getInterestBatchManager",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "minInterestRate",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "maxInterestRate",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "minInterestRateChangePeriod",
            type: "uint256",
          },
        ],
        internalType: "struct IBorrowerOperations.InterestBatchManager",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
    ],
    name: "getInterestIndividualDelegateOf",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint128",
            name: "minInterestRate",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "maxInterestRate",
            type: "uint128",
          },
        ],
        internalType: "struct IBorrowerOperations.InterestIndividualDelegate",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hasBeenShutDown",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
    ],
    name: "interestBatchManagerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newAnnualFee",
        type: "uint256",
      },
    ],
    name: "lowerBatchManagementFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
    ],
    name: "onLiquidateTrove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_ownerIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_ETHAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_boldAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_upperHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lowerHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_annualInterestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxUpfrontFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_addManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_removeManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "openTrove",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "ownerIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "boldAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "upperHint",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lowerHint",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "interestBatchManager",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "maxUpfrontFee",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "addManager",
            type: "address",
          },
          {
            internalType: "address",
            name: "removeManager",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
        ],
        internalType:
          "struct IBorrowerOperations.OpenTroveAndJoinInterestBatchManagerParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "openTroveAndJoinInterestBatchManager",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "minInterestRate",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "maxInterestRate",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "currentInterestRate",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "fee",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "minInterestRateChangePeriod",
        type: "uint128",
      },
    ],
    name: "registerBatchManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newAnnualInterestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_upperHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lowerHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxUpfrontFee",
        type: "uint256",
      },
    ],
    name: "removeFromBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
    ],
    name: "removeInterestIndividualDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
    ],
    name: "removeManagerReceiverOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "repayBold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    name: "setAddManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "_newAnnualInterestRate",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "_upperHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lowerHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxUpfrontFee",
        type: "uint256",
      },
    ],
    name: "setBatchManagerAnnualInterestRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_newBatchManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_upperHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lowerHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxUpfrontFee",
        type: "uint256",
      },
    ],
    name: "setInterestBatchManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_delegate",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "_minInterestRate",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_maxInterestRate",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "_newAnnualInterestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_upperHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lowerHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxUpfrontFee",
        type: "uint256",
      },
    ],
    name: "setInterestIndividualDelegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    name: "setRemoveManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "setRemoveManagerWithReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shutdown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_failedOracleAddr",
        type: "address",
      },
    ],
    name: "shutdownFromOracleFailure",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_removeUpperHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_removeLowerHint",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_newBatchManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_addUpperHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_addLowerHint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxUpfrontFee",
        type: "uint256",
      },
    ],
    name: "switchBatchManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxUpfrontFee",
        type: "uint256",
      },
    ],
    name: "withdrawBold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_troveId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawColl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IBorrowerOperations__factory {
  static readonly abi = _abi;
  static createInterface(): IBorrowerOperationsInterface {
    return new Interface(_abi) as IBorrowerOperationsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IBorrowerOperations {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IBorrowerOperations;
  }
}