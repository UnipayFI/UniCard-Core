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
import type { MUSDC, MUSDCInterface } from "../../../src/mock/MUSDC";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "anOwner",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    inputs: [],
    name: "owner",
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
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000bb038038062000bb0833981016040819052620000349162000234565b6040805180820182526005808252646d5553444360d81b60208084018290528451808601909552918452908301529060036200007183826200030b565b5060046200008082826200030b565b5050600580546001600160a01b0319166001600160a01b038416908117909155620000b891506a52b7d2dcc80cd2e4000000620000bf565b50620003ff565b6001600160a01b038216620000ef5760405163ec442f0560e01b8152600060048201526024015b60405180910390fd5b620000fd6000838362000101565b5050565b6001600160a01b03831662000130578060026000828254620001249190620003d7565b90915550620001a49050565b6001600160a01b03831660009081526020819052604090205481811015620001855760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401620000e6565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216620001c257600280548290039055620001e1565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200022791815260200190565b60405180910390a3505050565b6000602082840312156200024757600080fd5b81516001600160a01b03811681146200025f57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200029157607f821691505b602082108103620002b257634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200030657600081815260208120601f850160051c81016020861015620002e15750805b601f850160051c820191505b818110156200030257828155600101620002ed565b5050505b505050565b81516001600160401b0381111562000327576200032762000266565b6200033f816200033884546200027c565b84620002b8565b602080601f8311600181146200037757600084156200035e5750858301515b600019600386901b1c1916600185901b17855562000302565b600085815260208120601f198616915b82811015620003a85788860151825594840194600190910190840162000387565b5085821015620003c75787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b80820180821115620003f957634e487b7160e01b600052601160045260246000fd5b92915050565b6107a1806200040f6000396000f3fe608060405234801561001057600080fd5b50600436106100b95760003560e01c806340c10f191161008157806395d89b411161005b57806395d89b411461019c578063a9059cbb146101a4578063dd62ed3e146101b757600080fd5b806340c10f191461013357806370a08231146101485780638da5cb5b1461017157600080fd5b806306fdde03146100be578063095ea7b3146100dc57806318160ddd146100ff57806323b872dd14610111578063313ce56714610124575b600080fd5b6100c66101f0565b6040516100d39190610614565b60405180910390f35b6100ef6100ea36600461067e565b610282565b60405190151581526020016100d3565b6002545b6040519081526020016100d3565b6100ef61011f3660046106a8565b61029c565b604051601281526020016100d3565b61014661014136600461067e565b6102c0565b005b6101036101563660046106e4565b6001600160a01b031660009081526020819052604090205490565b600554610184906001600160a01b031681565b6040516001600160a01b0390911681526020016100d3565b6100c66102ce565b6100ef6101b236600461067e565b6102dd565b6101036101c5366004610706565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101ff90610739565b80601f016020809104026020016040519081016040528092919081815260200182805461022b90610739565b80156102785780601f1061024d57610100808354040283529160200191610278565b820191906000526020600020905b81548152906001019060200180831161025b57829003601f168201915b5050505050905090565b6000336102908185856102eb565b60019150505b92915050565b6000336102aa8582856102fd565b6102b5858585610380565b506001949350505050565b6102ca82826103df565b5050565b6060600480546101ff90610739565b600033610290818585610380565b6102f88383836001610415565b505050565b6001600160a01b03838116600090815260016020908152604080832093861683529290522054600019811461037a578181101561036b57604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b61037a84848484036000610415565b50505050565b6001600160a01b0383166103aa57604051634b637e8f60e11b815260006004820152602401610362565b6001600160a01b0382166103d45760405163ec442f0560e01b815260006004820152602401610362565b6102f88383836104ea565b6001600160a01b0382166104095760405163ec442f0560e01b815260006004820152602401610362565b6102ca600083836104ea565b6001600160a01b03841661043f5760405163e602df0560e01b815260006004820152602401610362565b6001600160a01b03831661046957604051634a1406b160e11b815260006004820152602401610362565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561037a57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516104dc91815260200190565b60405180910390a350505050565b6001600160a01b03831661051557806002600082825461050a9190610773565b909155506105879050565b6001600160a01b038316600090815260208190526040902054818110156105685760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610362565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b0382166105a3576002805482900390556105c2565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161060791815260200190565b60405180910390a3505050565b600060208083528351808285015260005b8181101561064157858101830151858201604001528201610625565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461067957600080fd5b919050565b6000806040838503121561069157600080fd5b61069a83610662565b946020939093013593505050565b6000806000606084860312156106bd57600080fd5b6106c684610662565b92506106d460208501610662565b9150604084013590509250925092565b6000602082840312156106f657600080fd5b6106ff82610662565b9392505050565b6000806040838503121561071957600080fd5b61072283610662565b915061073060208401610662565b90509250929050565b600181811c9082168061074d57607f821691505b60208210810361076d57634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561029657634e487b7160e01b600052601160045260246000fdfea164736f6c6343000814000a";

type MUSDCConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MUSDCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MUSDC__factory extends ContractFactory {
  constructor(...args: MUSDCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    anOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(anOwner, overrides || {});
  }
  override deploy(
    anOwner: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(anOwner, overrides || {}) as Promise<
      MUSDC & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MUSDC__factory {
    return super.connect(runner) as MUSDC__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MUSDCInterface {
    return new Interface(_abi) as MUSDCInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MUSDC {
    return new Contract(address, _abi, runner) as unknown as MUSDC;
  }
}
