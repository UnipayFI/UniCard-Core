/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  ActivePool,
  ActivePoolInterface,
} from "../../../src/liquity/ActivePool";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IAddressesRegistry",
        name: "_addressesRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_recordedDebtSum",
        type: "uint256",
      },
    ],
    name: "ActivePoolBoldDebtUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_collBalance",
        type: "uint256",
      },
    ],
    name: "ActivePoolCollBalanceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newBorrowerOperationsAddress",
        type: "address",
      },
    ],
    name: "BorrowerOperationsAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newCollTokenAddress",
        type: "address",
      },
    ],
    name: "CollTokenAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newDefaultPoolAddress",
        type: "address",
      },
    ],
    name: "DefaultPoolAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "EtherSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newStabilityPoolAddress",
        type: "address",
      },
    ],
    name: "StabilityPoolAddressChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_newTroveManagerAddress",
        type: "address",
      },
    ],
    name: "TroveManagerAddressChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "accountForReceivedColl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "aggBatchManagementFees",
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
    name: "aggRecordedDebt",
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
    name: "aggWeightedBatchManagementFeeSum",
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
    name: "aggWeightedDebtSum",
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
    name: "borrowerOperationsAddress",
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
    inputs: [],
    name: "calcPendingAggBatchManagementFee",
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
    name: "calcPendingAggInterest",
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
    name: "calcPendingSPYield",
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
    name: "collToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultPoolAddress",
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
    inputs: [],
    name: "getBoldDebt",
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
    name: "getCollBalance",
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
        components: [
          {
            internalType: "uint256",
            name: "appliedRedistBoldDebtGain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "appliedRedistCollGain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collIncrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collDecrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtIncrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtDecrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newWeightedRecordedDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oldWeightedRecordedDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "upfrontFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "batchAccruedManagementFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newWeightedRecordedBatchManagementFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oldWeightedRecordedBatchManagementFee",
            type: "uint256",
          },
        ],
        internalType: "struct TroveChange",
        name: "_troveChange",
        type: "tuple",
      },
    ],
    name: "getNewApproxAvgInterestRateFromTroveChange",
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
    inputs: [],
    name: "interestRouter",
    outputs: [
      {
        internalType: "contract IInterestRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastAggBatchManagementFeesUpdateTime",
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
    name: "lastAggUpdateTime",
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
    name: "mintAggInterest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "appliedRedistBoldDebtGain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "appliedRedistCollGain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collIncrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collDecrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtIncrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtDecrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newWeightedRecordedDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oldWeightedRecordedDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "upfrontFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "batchAccruedManagementFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newWeightedRecordedBatchManagementFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oldWeightedRecordedBatchManagementFee",
            type: "uint256",
          },
        ],
        internalType: "struct TroveChange",
        name: "_troveChange",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_batchAddress",
        type: "address",
      },
    ],
    name: "mintAggInterestAndAccountForTroveChange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "appliedRedistBoldDebtGain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "appliedRedistCollGain",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collIncrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collDecrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtIncrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtDecrease",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newWeightedRecordedDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oldWeightedRecordedDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "upfrontFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "batchAccruedManagementFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "newWeightedRecordedBatchManagementFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "oldWeightedRecordedBatchManagementFee",
            type: "uint256",
          },
        ],
        internalType: "struct TroveChange",
        name: "_troveChange",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "_batchAddress",
        type: "address",
      },
    ],
    name: "mintBatchManagementFeeAndAccountForChange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "receiveColl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sendColl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sendCollToDefaultPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setShutdownFlag",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shutdownTime",
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
    name: "stabilityPool",
    outputs: [
      {
        internalType: "contract IBoldRewardsReceiver",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "troveManagerAddress",
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
] as const;

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162001b9c38038062001b9c833981016040819052620000359162000599565b806001600160a01b03166331b8c9466040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000074573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200009a919062000599565b6001600160a01b03166080816001600160a01b031681525050806001600160a01b03166377553ad46040518163ffffffff1660e01b8152600401602060405180830381865afa158015620000f2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000118919062000599565b6001600160a01b031660a0816001600160a01b031681525050806001600160a01b0316633d83908a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000170573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000196919062000599565b6001600160a01b031660c0816001600160a01b031681525050806001600160a01b031663048c661d6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620001ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000214919062000599565b600260006101000a8154816001600160a01b0302191690836001600160a01b03160217905550806001600160a01b0316633cc742256040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000279573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029f919062000599565b6001600160a01b031660e0816001600160a01b031681525050806001600160a01b031663d0ee2ace6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620002f7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200031d919062000599565b600160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550806001600160a01b031663630afce56040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000382573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003a8919062000599565b600080546001600160a01b0319166001600160a01b03928316179055608051604051911681527f8adeca1d26ce63eb9fb5b9362155b69fbb631209bfc0dddb3d75d96735eae23b9060200160405180910390a160a0516040516001600160a01b0390911681527f3ca631ffcd2a9b5d9ae18543fc82f58eb4ca33af9e6ab01b7a8e95331e6ed9859060200160405180910390a160c0516040516001600160a01b0390911681527f143219c9e69b09e07e095fcc889b43d8f46ca892bba65f08dc3a0050869a56789060200160405180910390a16002546040516001600160a01b0390911681527f82966d27eea39b038ee0fa30cd16532bb24f6e65d31cb58fb227aa5766cdcc7f9060200160405180910390a160e0516040516001600160a01b0390911681527f5ee0cae2f063ed938bb55046f6a932fb6ae792bf43624806bb90abe68a50be9b9060200160405180910390a160805160e05160405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af115801562000552573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620005789190620005c0565b5050620005e4565b6001600160a01b03811681146200059657600080fd5b50565b600060208284031215620005ac57600080fd5b8151620005b98162000580565b9392505050565b600060208284031215620005d357600080fd5b81518015158114620005b957600080fd5b60805160a05160c05160e05161152a62000672600039600081816103680152818161074e015281816107890152610aef0152600081816102a501528181610c4601528181610cff0152610f580152600081816103980152818161085f01528181610abd01528181610ccd0152610f26015260008181610254015281816106100152610716015261152a6000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806371d4eb2111610104578063aac1846f116100a2578063d0ee2ace11610071578063d0ee2ace146103cd578063dd9fbcb8146103e0578063f6e413f5146103f3578063fa160c05146103fc57600080fd5b8063aac1846f14610363578063ac8bbc491461038a578063b7f8cf9b14610393578063c2283f1f146103ba57600080fd5b806385fe37a3116100de57806385fe37a3146102fe5780638d5c1d4c146103115780639f4e511e1461031a578063a3f4df7e1461032d57600080fd5b806371d4eb21146102cf578063759f9dec146102e257806383b60e4d146102eb57600080fd5b80633db6c94a116101715780634ba89fa11161014b5780634ba89fa11461028f57806358569081146102975780635a4d28bb146102a05780636d8f962d146102c757600080fd5b80633db6c94a1461027657806342635a951461027e578063455079981461028757600080fd5b806310a985c1116101ad57806310a985c1146102295780631bfa0d7b146102325780632bcbcbcb1461023c57806331b8c9461461024f57600080fd5b80630367b302146101d4578063048c661d146101eb57806306ff8dfb14610216575b600080fd5b6003545b6040519081526020015b60405180910390f35b6002546101fe906001600160a01b031681565b6040516001600160a01b0390911681526020016101e2565b60075460405190151581526020016101e2565b6101d860095481565b61023a610404565b005b61023a61024a36600461125b565b61043d565b6101fe7f000000000000000000000000000000000000000000000000000000000000000081565b6101d8610451565b6101d860055481565b6101d86104a1565b6101d86104d7565b6101d860075481565b6101fe7f000000000000000000000000000000000000000000000000000000000000000081565b61023a610521565b61023a6102dd3660046112a9565b61052f565b6101d860065481565b61023a6102f936600461125b565b6105f2565b6101d861030c3660046112df565b610638565b6101d860045481565b61023a6103283660046112fc565b6106f7565b6103566040518060400160405280600a8152602001691058dd1a5d99541bdbdb60b21b81525081565b6040516101e2919061134a565b6101fe7f000000000000000000000000000000000000000000000000000000000000000081565b6101d8600a5481565b6101fe7f000000000000000000000000000000000000000000000000000000000000000081565b61023a6103c836600461125b565b610741565b6001546101fe906001600160a01b031681565b61023a6103ee3660046112a9565b6107f0565b6101d860085481565b6101d8610817565b61040c610854565b60008054610425916001600160a01b039091169061090e565b600460008282546104369190611393565b9091555050565b610445610ab2565b61044e81610b83565b50565b60006007546000146104635750600090565b61049c6006544261047491906113a6565b60055461048191906113b9565b610497670de0b6b3a76400006301e133806113b9565b610bd2565b905090565b60006104ab6104d7565b6008546104b6610451565b6004546104c39190611393565b6104cd9190611393565b61049c9190611393565b6000806007546000036104ea57426104ee565b6007545b905060006104fe600a5483610c25565b905061051a61050d82846113a6565b60095461048191906113b9565b9250505090565b610529610c3b565b42600755565b610537610cc2565b6001600160a01b0381161561056b5760005461056b906001600160a01b031661056536859003850185611408565b83610d9d565b600454600054610589906001600160a01b031661010085013561090e565b6105939082611393565b90506105a0833582611393565b90506105b0608084013582611393565b90506105c060a0840135826113a6565b60048190556005549091506105d960c085013582611393565b90506105e960e0850135826113a6565b60055550505050565b6105fa610ab2565b61060381610b83565b61044e6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084610e99565b60006101008201351561064d5761064d6114a7565b6007541561065d57506000919050565b600454610668610451565b6106729082611393565b905061067f833582611393565b905061068f608084013582611393565b90506106a061012084013582611393565b90506106b060a0840135826113a6565b6005549091506106c460c085013582611393565b90506106d460e0850135826113a6565b9050600082116106e55760006106ef565b6106ef82826114bd565b949350505050565b6106ff610f1b565b6107098282611027565b61073d6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001683836110b9565b5050565b610749610c3b565b6107737f000000000000000000000000000000000000000000000000000000000000000082611027565b6040516383b60e4d60e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906383b60e4d90602401600060405180830381600087803b1580156107d557600080fd5b505af11580156107e9573d6000803e3d6000fd5b5050505050565b6107f8610cc2565b60005461073d906001600160a01b031661056536859003850185611408565b6000670de0b6b3a764000061082d6064826114bd565b6108389060486113b9565b610840610451565b61084a91906113b9565b61049c91906114bd565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148061089557506002546001600160a01b031633145b61090c5760405162461bcd60e51b815260206004820152603e60248201527f416374697665506f6f6c3a2043616c6c6572206973206e6f7420426f72726f7760448201527f65724f7065726174696f6e73206e6f722053746162696c697479506f6f6c000060648201526084015b60405180910390fd5b565b600081610919610451565b6109239190611393565b90508015610aa8576000670de0b6b3a7640000826109426064836114bd565b61094d9060486113b9565b61095791906113b9565b61096191906114bd565b9050600061096f82846113a6565b6001546040516340c10f1960e01b81526001600160a01b039182166004820152602481018390529192508616906340c10f1990604401600060405180830381600087803b1580156109bf57600080fd5b505af11580156109d3573d6000803e3d6000fd5b505050506000821115610aa5576002546040516340c10f1960e01b81526001600160a01b03918216600482015260248101849052908616906340c10f1990604401600060405180830381600087803b158015610a2e57600080fd5b505af1158015610a42573d6000803e3d6000fd5b505060025460405163affb466960e01b8152600481018690526001600160a01b03909116925063affb46699150602401600060405180830381600087803b158015610a8c57600080fd5b505af1158015610aa0573d6000803e3d6000fd5b505050505b50505b4260065592915050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610b115750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b61090c5760405162461bcd60e51b815260206004820152603160248201527f416374697665506f6f6c3a2043616c6c6572206973206e65697468657220424f60448201527f206e6f722044656661756c7420506f6f6c0000000000000000000000000000006064820152608401610903565b600081600354610b939190611393565b60038190556040518181529091507f9bbe217b4113a0fc957e51f8db99c9989f520e3c6bcca7a8e12c6316eaf995bf9060200160405180910390a15050565b600081600003610bed57610be682846114bd565b9050610c1f565b8215610c195781610bff6001856113a6565b610c0991906114bd565b610c14906001611393565b610c1c565b60005b90505b92915050565b6000818310610c345781610c1c565b5090919050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461090c5760405162461bcd60e51b815260206004820152602660248201527f416374697665506f6f6c3a2043616c6c6572206973206e6f742054726f76654d60448201526530b730b3b2b960d11b6064820152608401610903565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610d215750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b61090c5760405162461bcd60e51b815260206004820152604160248201527f416374697665506f6f6c3a2043616c6c6572206973206e65697468657220426f60448201527f72726f7765724f7065726174696f6e73206e6f722054726f76654d616e6167656064820152603960f91b608482015260a401610903565b81610120015160046000828254610db49190611393565b9091555050600854610dc46104d7565b610dce9082611393565b905082610120015181610de191906113a6565b600881905560095461014085015191925090610dfd9082611393565b905083610160015181610e1091906113a6565b600981905561012085015190915015610e8e576101208401516040516340c10f1960e01b81526001600160a01b0385811660048301526024820192909252908616906340c10f1990604401600060405180830381600087803b158015610e7557600080fd5b505af1158015610e89573d6000803e3d6000fd5b505050505b505042600a55505050565b6040516001600160a01b038481166024830152838116604483015260648201839052610f159186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506110ef565b50505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610f7a5750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b80610f8f57506002546001600160a01b031633145b61090c5760405162461bcd60e51b815260206004820152605360248201527f416374697665506f6f6c3a2043616c6c6572206973206e65697468657220426f60448201527f72726f7765724f7065726174696f6e73206e6f722054726f76654d616e61676560648201527f72206e6f722053746162696c697479506f6f6c00000000000000000000000000608482015260a401610903565b60008160035461103791906113a6565b60038190556040518181529091507f9bbe217b4113a0fc957e51f8db99c9989f520e3c6bcca7a8e12c6316eaf995bf9060200160405180910390a1604080516001600160a01b0385168152602081018490527f6109e2559dfa766aaec7118351d48a523f0a4157f49c8d68749c8ac41318ad12910160405180910390a1505050565b6040516001600160a01b038381166024830152604482018390526110ea91859182169063a9059cbb90606401610ece565b505050565b60006111046001600160a01b03841683611152565b9050805160001415801561112957508080602001905181019061112791906114df565b155b156110ea57604051635274afe760e01b81526001600160a01b0384166004820152602401610903565b6060610c1c8383600084600080856001600160a01b031684866040516111789190611501565b60006040518083038185875af1925050503d80600081146111b5576040519150601f19603f3d011682016040523d82523d6000602084013e6111ba565b606091505b50915091506111ca8683836111d6565b925050505b9392505050565b6060826111eb576111e682611232565b6111cf565b815115801561120257506001600160a01b0384163b155b1561122b57604051639996b31560e01b81526001600160a01b0385166004820152602401610903565b50806111cf565b8051156112425780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b60006020828403121561126d57600080fd5b5035919050565b6000610180828403121561128757600080fd5b50919050565b80356001600160a01b03811681146112a457600080fd5b919050565b6000806101a083850312156112bd57600080fd5b6112c78484611274565b91506112d6610180840161128d565b90509250929050565b600061018082840312156112f257600080fd5b610c1c8383611274565b6000806040838503121561130f57600080fd5b6113188361128d565b946020939093013593505050565b60005b83811015611341578181015183820152602001611329565b50506000910152565b6020815260008251806020840152611369816040850160208701611326565b601f01601f19169190910160400192915050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610c1f57610c1f61137d565b81810381811115610c1f57610c1f61137d565b8082028115828204841417610c1f57610c1f61137d565b604051610180810167ffffffffffffffff8111828210171561140257634e487b7160e01b600052604160045260246000fd5b60405290565b6000610180828403121561141b57600080fd5b6114236113d0565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e08201526101008084013581830152506101208084013581830152506101408084013581830152506101608084013581830152508091505092915050565b634e487b7160e01b600052600160045260246000fd5b6000826114da57634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156114f157600080fd5b815180151581146111cf57600080fd5b60008251611513818460208701611326565b919091019291505056fea164736f6c6343000814000a";

type ActivePoolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ActivePoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ActivePool__factory extends ContractFactory {
  constructor(...args: ActivePoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _addressesRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_addressesRegistry, overrides || {});
  }
  override deploy(
    _addressesRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_addressesRegistry, overrides || {}) as Promise<
      ActivePool & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ActivePool__factory {
    return super.connect(runner) as ActivePool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ActivePoolInterface {
    return new Interface(_abi) as ActivePoolInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ActivePool {
    return new Contract(address, _abi, runner) as unknown as ActivePool;
  }
}
