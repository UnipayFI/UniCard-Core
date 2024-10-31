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
  SortedTroves,
  SortedTrovesInterface,
} from "../../../src/liquity/SortedTroves";

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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_borrowerOperationsAddress",
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
        name: "_troveManagerAddress",
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
        internalType: "BatchId",
        name: "",
        type: "address",
      },
    ],
    name: "batches",
    outputs: [
      {
        internalType: "uint256",
        name: "head",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tail",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "contains",
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
        name: "_annualInterestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_prevId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nextId",
        type: "uint256",
      },
    ],
    name: "findInsertPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "getFirst",
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
    name: "getLast",
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
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getNext",
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
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPrev",
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
    name: "getSize",
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
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_annualInterestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_prevId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nextId",
        type: "uint256",
      },
    ],
    name: "insert",
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
        internalType: "BatchId",
        name: "_batchId",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_annualInterestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_prevId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nextId",
        type: "uint256",
      },
    ],
    name: "insertIntoBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "isBatchedNode",
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
    name: "isEmpty",
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
        internalType: "BatchId",
        name: "_id",
        type: "address",
      },
    ],
    name: "isEmptyBatch",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "nodes",
    outputs: [
      {
        internalType: "uint256",
        name: "nextId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "prevId",
        type: "uint256",
      },
      {
        internalType: "BatchId",
        name: "batchId",
        type: "address",
      },
      {
        internalType: "bool",
        name: "exists",
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
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_newAnnualInterestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_prevId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nextId",
        type: "uint256",
      },
    ],
    name: "reInsert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "BatchId",
        name: "_id",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_newAnnualInterestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_prevId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nextId",
        type: "uint256",
      },
    ],
    name: "reInsertBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "removeFromBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "size",
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
    name: "troveManager",
    outputs: [
      {
        internalType: "contract ITroveManager",
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
        name: "_annualInterestRate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_prevId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_nextId",
        type: "uint256",
      },
    ],
    name: "validInsertPosition",
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
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001bfd38038062001bfd833981016040819052620000349162000214565b6000808052600160209081527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb498290557fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4a9190915560408051631ec1c84560e11b815290516001600160a01b03841692633d83908a92600480820193918290030181865afa158015620000cb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000f1919062000214565b6001600160a01b031660a0816001600160a01b031681525050806001600160a01b03166377553ad46040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000149573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016f919062000214565b6001600160a01b0390811660805260a051604051911681527f143219c9e69b09e07e095fcc889b43d8f46ca892bba65f08dc3a0050869a56789060200160405180910390a16080516040516001600160a01b0390911681527f3ca631ffcd2a9b5d9ae18543fc82f58eb4ca33af9e6ab01b7a8e95331e6ed9859060200160405180910390a1506200023b565b6001600160a01b03811681146200021157600080fd5b50565b6000602082840312156200022757600080fd5b81516200023481620001fb565b9392505050565b60805160a05161195d620002a06000396000818161030a0152818161055b015281816105c401528181610780015281816109ba01528181610aeb01528181610c5101526111c901526000818161042401528181610e630152611197015261195d6000f3fe608060405234801561001057600080fd5b506004361061017d5760003560e01c80634d622831116100e3578063a3f4df7e1161008c578063de8fa43111610066578063de8fa43114610473578063e2ea26581461047b578063f4761259146104a257600080fd5b8063a3f4df7e146103e7578063b7f8cf9b1461041f578063c34052e01461044657600080fd5b8063843aa0db116100bd578063843aa0db146103b857806394586b4e146103cb578063949d225d146103de57600080fd5b80634d6228311461035757806362c4c51614610387578063681fe70c146103af57600080fd5b80631e2231431161014557806336aa4c6a1161011f57806336aa4c6a146102f25780633d83908a146103055780634cc822151461034457600080fd5b80631e2231431461029c5780632dbf554c146102cc578063353d67a0146102df57600080fd5b80630364aefb1461018257806307aba33d146101c15780631037a5f4146101ef5780631c403f59146102135780631c53c28014610228575b600080fd5b6101ac610190366004611792565b6001600160a01b03166000908152600260205260409020541590565b60405190151581526020015b60405180910390f35b6101e16101cf3660046117ad565b60009081526001602052604090205490565b6040519081526020016101b8565b6101e16101fd3660046117ad565b6000908152600160208190526040909120015490565b6102266102213660046117c6565b6104b5565b005b61026b6102363660046117ad565b60016020819052600091825260409091208054918101546002909101546001600160a01b03811690600160a01b900460ff1684565b6040516101b8949392919093845260208401929092526001600160a01b031660408301521515606082015260800190565b6000805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb49546101e1565b6101ac6102da3660046117ad565b610593565b6101ac6102ed3660046117ff565b6105bd565b61022661030036600461182b565b6105f5565b61032c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101b8565b6102266103523660046117ad565b610856565b6000805260016020527fa6eef7e35abe7026729641147f7915573c7e97b47efa546f5f6e3230263bcb4a546101e1565b61039a6103953660046117ff565b6109b2565b604080519283526020830191909152016101b8565b600054156101ac565b6102266103c6366004611871565b6109ed565b6102266103d9366004611871565b610b4d565b6101e160005481565b6104126040518060400160405280600c81526020016b536f7274656454726f76657360a01b81525081565b6040516101b891906118a3565b61032c7f000000000000000000000000000000000000000000000000000000000000000081565b6101ac6104543660046117ad565b600090815260016020526040902060020154600160a01b900460ff1690565b6000546101e1565b61039a610489366004611792565b6002602052600090815260409020805460019091015482565b6102266104b03660046117ad565b610c80565b6001600160a01b03841660009081526002602090815260409182902082518084019093528054835260010154908201526104ed610e58565b80516105565760405162461bcd60e51b815260206004820152602d60248201527f536f7274656454726f7665733a204c69737420646f6573206e6f7420636f6e7460448201526c0c2d2dc40e8d0ca40c4c2e8c6d609b1b60648201526084015b60405180910390fd5b61058c7f000000000000000000000000000000000000000000000000000000000000000082600001518360200151878787610ef8565b5050505050565b6000818152600160205260408120600201546105b7906001600160a01b0316610f97565b92915050565b60006105eb7f0000000000000000000000000000000000000000000000000000000000000000858585610fb2565b90505b9392505050565b6105fd610e58565b600085815260016020526040902060020154600160a01b900460ff161561067b5760405162461bcd60e51b815260206004820152602c60248201527f536f7274656454726f7665733a204c69737420616c726561647920636f6e746160448201526b696e7320746865206e6f646560a01b606482015260840161054d565b846106ee5760405162461bcd60e51b815260206004820152603360248201527f536f7274656454726f7665733a205f74726f766549642063616e6e6f7420626560448201527f2074686520726f6f74206e6f6465277320494400000000000000000000000000606482015260840161054d565b610700846001600160a01b0316610f97565b61075a5760405162461bcd60e51b815260206004820152602560248201527f536f7274656454726f7665733a205f626174636849642063616e6e6f74206265604482015264207a65726f60d81b606482015260840161054d565b6001600160a01b038416600090815260026020526040902060010154806107c9576107a97f00000000000000000000000000000000000000000000000000000000000000008788878787611134565b6001600160a01b03851660009081526002602052604090208690556107f9565b60008181526001602081905260408083208054908a90558984528184208084018690558190558352909120018690555b6001600160a01b038516600081815260026020818152604080842060019081018c90558b855290915282200180546001600160a81b031916909217600160a01b179091558054819061084a90611907565b90915550505050505050565b61085e61118c565b600081815260016020526040902060020154600160a01b900460ff166108d95760405162461bcd60e51b815260206004820152602a60248201527f536f7274656454726f7665733a204c69737420646f6573206e6f7420636f6e74604482015269185a5b881d1a19481a5960b21b606482015260840161054d565b6108e281610593565b156109555760405162461bcd60e51b815260206004820152603f60248201527f536f7274656454726f7665733a204d757374207573652072656d6f766546726f60448201527f6d4261746368282920746f2072656d6f76652062617463686564206e6f646500606482015260840161054d565b600081815260016020819052604080832080548184018054865283862082905580549186529285209093019290925583835282825582905560020180546001600160a81b0319169055805481906109ab90611920565b9091555050565b6000806109e17f000000000000000000000000000000000000000000000000000000000000000086868661125d565b91509150935093915050565b6109f5610e58565b600084815260016020526040902060020154600160a01b900460ff1615610a735760405162461bcd60e51b815260206004820152602c60248201527f536f7274656454726f7665733a204c69737420616c726561647920636f6e746160448201526b696e7320746865206e6f646560a01b606482015260840161054d565b83610ae65760405162461bcd60e51b815260206004820152602e60248201527f536f7274656454726f7665733a205f69642063616e6e6f74206265207468652060448201527f726f6f74206e6f64652773204944000000000000000000000000000000000000606482015260840161054d565b610b147f00000000000000000000000000000000000000000000000000000000000000008586868686611134565b6000848152600160205260408120600201805460ff60a01b1916600160a01b17905580548190610b4390611907565b9091555050505050565b610b55610e58565b600084815260016020526040902060020154600160a01b900460ff16610bd05760405162461bcd60e51b815260206004820152602a60248201527f536f7274656454726f7665733a204c69737420646f6573206e6f7420636f6e74604482015269185a5b881d1a19481a5960b21b606482015260840161054d565b610bd984610593565b15610c4c5760405162461bcd60e51b815260206004820152602e60248201527f536f7274656454726f7665733a204d757374206e6f74207265496e736572742860448201527f292062617463686564206e6f6465000000000000000000000000000000000000606482015260840161054d565b610c7a7f00000000000000000000000000000000000000000000000000000000000000008586868686610ef8565b50505050565b610c8861118c565b6000818152600160205260409020600201546001600160a01b0316610cac81610f97565b610d1e5760405162461bcd60e51b815260206004820152603a60248201527f536f7274656454726f7665733a204d757374207573652072656d6f766528292060448201527f746f2072656d6f7665206e6f6e2d62617463686564206e6f6465000000000000606482015260840161054d565b6001600160a01b038116600090815260026020908152604091829020825180840190935280548084526001909101549183019190915283148015610d655750828160200151145b15610d8e576001600160a01b038216600090815260026020526040812081815560010155610df9565b8051839003610dc3576000838152600160209081526040808320546001600160a01b0386168452600290925290912055610df9565b82816020015103610df95760008381526001602081815260408084208301546001600160a01b0387168552600290925290922001555b600083815260016020819052604080832080548184018054865283862082905580549186529285209093019290925585835282825582905560020180546001600160a81b031916905580548190610e4f90611920565b90915550505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610ef65760405162461bcd60e51b815260206004820152602e60248201527f536f7274656454726f7665733a2043616c6c6572206973206e6f7420426f727260448201527f6f7765724f7065726174696f6e73000000000000000000000000000000000000606482015260840161054d565b565b610f0486848484610fb2565b610f1a57610f148684848461125d565b90925090505b848114158015610f2a5750838214155b15610f8f5760008481526001602081905260408083205488845281842083018054855282852082905554908452922001555b60008281526001602081905260408083208890558783528083208201859055868352808320849055838352909120018490555b505050505050565b6000610fab826001600160a01b0316611431565b1592915050565b6000828152600160205260408120600281015490546001600160a01b039091169083148015610ff257506000838152600160208190526040909120015484145b801561103257506000838152600160205260409020600201546001600160a01b0382811691161415806110325750611032816001600160a01b0316611431565b80156110af57508315806110af5750604051635ef3b8bf60e01b81526004810185905285906001600160a01b03881690635ef3b8bf90602401602060405180830381865afa158015611088573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ac9190611937565b10155b801561112a575082158061112a5750604051635ef3b8bf60e01b8152600481018490526001600160a01b03871690635ef3b8bf90602401602060405180830381865afa158015611103573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111279190611937565b85115b9695505050505050565b61114086848484610fb2565b610f5c576111508684848461125d565b60008281526001602081905260408083208a90558983528083208201859055888352808320849055838352909120018690559092509050610f8f565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614806111eb5750336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016145b610ef65760405162461bcd60e51b815260206004820152603f60248201527f536f7274656454726f7665733a2043616c6c6572206973206e6f7420426f727260448201527f6f7765724f7065726174696f6e73206e6f722054726f76654d616e6167657200606482015260840161054d565b6000808361127a5761127186866000611443565b91509150611428565b600084815260016020526040902060020154600160a01b900460ff16158061130a5750604051635ef3b8bf60e01b81526004810185905285906001600160a01b03881690635ef3b8bf90602401602060405180830381865afa1580156112e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113089190611937565b105b1561131457600093505b82611325576112718686600061148d565b600083815260016020526040902060020154600160a01b900460ff1615806113b55750604051635ef3b8bf60e01b8152600481018490526001600160a01b03871690635ef3b8bf90602401602060405180830381865afa15801561138d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b19190611937565b8511155b156113bf57600092505b831580156113cb575082155b156113dc5761127186866000611443565b836113f45761127186866113ef866114d6565b61148d565b8261140c57611271868661140787611522565b611443565b611271868661141a87611522565b611423876114d6565b611571565b94509492505050565b60006001600160a01b038216156105b7565b604080518082018252828152600083815260016020908152928120549282019290925281905b6114748686836115fe565b1561146957805160209091015190969095509350505050565b6040805180820182526000838152600160208181529382200154825291810183905281905b6114bd8686836116b9565b156114b257805160209091015190969095509350505050565b6000818152600160205260408120600201546001600160a01b03166114fa81610f97565b61150457826105ee565b6001600160a01b031660009081526002602052604090205492915050565b6000818152600160205260408120600201546001600160a01b031661154681610f97565b61155057826105ee565b6001600160a01b031660009081526002602052604090206001015492915050565b6040805180820182528381526000848152600160208181528483205481850152845180860186528684528282529483209091015484528301849052918291905b6115bc8888846115fe565b156115d4575080516020909101519092509050611428565b6115df8888836116b9565b156115f95780600001518160200151935093505050611428565b6115b1565b6000808260200151148061167f57506020820151604051635ef3b8bf60e01b815260048101919091526001600160a01b03851690635ef3b8bf90602401602060405180830381865afa158015611658573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061167c9190611937565b83115b1561168c575060016105ee565b6116998260200151611522565b808352600090815260016020908152604090912054908301529392505050565b8051600090158061173b57508151604051635ef3b8bf60e01b815284916001600160a01b03871691635ef3b8bf916116f79160040190815260200190565b602060405180830381865afa158015611714573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117389190611937565b10155b15611748575060016105ee565b8151611753906114d6565b602080840182905260009182526001908190526040909120015482529392505050565b80356001600160a01b038116811461178d57600080fd5b919050565b6000602082840312156117a457600080fd5b6105ee82611776565b6000602082840312156117bf57600080fd5b5035919050565b600080600080608085870312156117dc57600080fd5b6117e585611776565b966020860135965060408601359560600135945092505050565b60008060006060848603121561181457600080fd5b505081359360208301359350604090920135919050565b600080600080600060a0868803121561184357600080fd5b8535945061185360208701611776565b94979496505050506040830135926060810135926080909101359150565b6000806000806080858703121561188757600080fd5b5050823594602084013594506040840135936060013592509050565b600060208083528351808285015260005b818110156118d0578581018301518582016040015282016118b4565b506000604082860101526040601f19601f8301168501019250505092915050565b634e487b7160e01b600052601160045260246000fd5b600060018201611919576119196118f1565b5060010190565b60008161192f5761192f6118f1565b506000190190565b60006020828403121561194957600080fd5b505191905056fea164736f6c6343000814000a";

type SortedTrovesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SortedTrovesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SortedTroves__factory extends ContractFactory {
  constructor(...args: SortedTrovesConstructorParams) {
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
      SortedTroves & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SortedTroves__factory {
    return super.connect(runner) as SortedTroves__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SortedTrovesInterface {
    return new Interface(_abi) as SortedTrovesInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SortedTroves {
    return new Contract(address, _abi, runner) as unknown as SortedTroves;
  }
}