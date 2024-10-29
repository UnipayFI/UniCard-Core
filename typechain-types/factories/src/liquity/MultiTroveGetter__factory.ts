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
  MultiTroveGetter,
  MultiTroveGetterInterface,
} from "../../../src/liquity/MultiTroveGetter";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICollateralRegistry",
        name: "_collateralRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "collateralRegistry",
    outputs: [
      {
        internalType: "contract ICollateralRegistry",
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
        name: "_collIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxIterations",
        type: "uint256",
      },
    ],
    name: "getDebtPerInterestRateAscending",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "interestBatchManager",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "interestRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
        ],
        internalType: "struct IMultiTroveGetter.DebtPerInterestRate[]",
        name: "data",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "currId",
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
        name: "_collIndex",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "_startIdx",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_count",
        type: "uint256",
      },
    ],
    name: "getMultipleSortedTroves",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "coll",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stake",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "annualInterestRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastDebtUpdateTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastInterestRateAdjTime",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "interestBatchManager",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "batchDebtShares",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "batchCollShares",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "snapshotETH",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "snapshotBoldDebt",
            type: "uint256",
          },
        ],
        internalType: "struct IMultiTroveGetter.CombinedTroveData[]",
        name: "_troves",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516111b63803806111b683398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161111f6100976000396000818160950152818160f30152610365015261111f6000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806327addfca14610046578063d1a4629c1461006f578063d330fadd14610090575b600080fd5b610059610054366004610ca7565b6100cf565b6040516100669190610cd3565b60405180910390f35b61008261007d366004610ca7565b61035e565b604051610066929190610d95565b6100b77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610066565b604051630bc17feb60e01b8152600481018490526060906000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630bc17feb90602401602060405180830381865afa15801561013a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015e9190610e16565b90506001600160a01b0381166101bb5760405162461bcd60e51b815260206004820152601860248201527f496e76616c696420636f6c6c61746572616c20696e646578000000000000000060448201526064015b60405180910390fd5b6000816001600160a01b031663ae9187546040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021f9190610e16565b90506001600160a01b03811661023757610237610e3a565b6000806000871261024d57508590506001610268565b610258876001610e66565b61026190610e8e565b9150600090505b6000836001600160a01b031663de8fa4316040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102cc9190610eaa565b905080831061030e576040805160008082526020820190925290610306565b6102f3610c3d565b8152602001906001900390816102eb5790505b509550610352565b600061031a8483610ed9565b905080881115610328578097505b82156103415761033a8686868b61073b565b9650610350565b61034d8686868b610933565b96505b505b50505050509392505050565b60606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630bc17feb876040518263ffffffff1660e01b81526004016103b191815260200190565b602060405180830381865afa1580156103ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f29190610e16565b90506001600160a01b03811661044a5760405162461bcd60e51b815260206004820152601860248201527f496e76616c696420636f6c6c61746572616c20696e646578000000000000000060448201526064016101b2565b6000816001600160a01b031663ae9187546040518163ffffffff1660e01b8152600401602060405180830381865afa15801561048a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ae9190610e16565b90506001600160a01b0381166104c6576104c6610e3a565b8467ffffffffffffffff8111156104df576104df610ec3565b60405190808252806020026020018201604052801561053d57816020015b61052a604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b8152602001906001900390816104fd5790505b5060405163040de97d60e21b8152600481018890529094506001600160a01b03821690631037a5f490602401602060405180830381865afa158015610586573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105aa9190610eaa565b925060005b85811015610730578315610730576040516238a78560e71b81526004810185905260009081906001600160a01b03851690631c53c28090602401608060405180830381865afa158015610606573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062a9190610ef2565b50604051632ab4fd0160e21b8152600481018a90529194509250600091506001600160a01b0387169063aad3f4049060240161014060405180830381865afa15801561067a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069e9190610f7a565b9050818885815181106106b3576106b3611001565b60209081029190910101516001600160a01b03909116905260c081015188518990869081106106e4576106e4611001565b60200260200101516020018181525050806000015188858151811061070b5761070b611001565b60209081029190910101516040015250909450610729905081611017565b90506105af565b505050935093915050565b60606000846001600160a01b0316631e2231436040518163ffffffff1660e01b8152600401602060405180830381865afa15801561077d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a19190610eaa565b905060005b84811015610829576040516307aba33d60e01b8152600481018390526001600160a01b038716906307aba33d90602401602060405180830381865afa1580156107f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108179190610eaa565b915061082281611017565b90506107a6565b508267ffffffffffffffff81111561084357610843610ec3565b60405190808252806020026020018201604052801561087c57816020015b610869610c3d565b8152602001906001900390816108615790505b50915060005b83811015610929576108ae87838584815181106108a1576108a1611001565b6020026020010151610b14565b6040516307aba33d60e01b8152600481018390526001600160a01b038716906307aba33d90602401602060405180830381865afa1580156108f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109179190610eaa565b915061092281611017565b9050610882565b5050949350505050565b60606000846001600160a01b0316634d6228316040518163ffffffff1660e01b8152600401602060405180830381865afa158015610975573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109999190610eaa565b905060005b84811015610a215760405163040de97d60e21b8152600481018390526001600160a01b03871690631037a5f490602401602060405180830381865afa1580156109eb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0f9190610eaa565b9150610a1a81611017565b905061099e565b508267ffffffffffffffff811115610a3b57610a3b610ec3565b604051908082528060200260200182016040528015610a7457816020015b610a61610c3d565b815260200190600190039081610a595790505b50915060005b8381101561092957610a9987838584815181106108a1576108a1611001565b60405163040de97d60e21b8152600481018390526001600160a01b03871690631037a5f490602401602060405180830381865afa158015610ade573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b029190610eaa565b9150610b0d81611017565b9050610a7a565b818152604051632904486760e21b8152600481018390526001600160a01b0384169063a411219c9060240161014060405180830381865afa158015610b5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b81919061104d565b506001600160a01b0390811660e08b015260c08a019190915267ffffffffffffffff91821660a08a01529116608088015260608701939093525050604080850192909252602084019290925251630bac90b160e31b81526004810184905290841690635d648588906024016040805180830381865afa158015610c08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2c91906110ee565b610160830152610140909101525050565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b600080600060608486031215610cbc57600080fd5b505081359360208301359350604090920135919050565b602080825282518282018190526000919060409081850190868401855b82811015610d885781518051855286810151878601528581015186860152606080820151908601526080808201519086015260a0808201519086015260c0808201519086015260e0808201516001600160a01b03169086015261010080820151908601526101208082015190860152610140808201519086015261016090810151908501526101809093019290850190600101610cf0565b5091979650505050505050565b6040808252835182820181905260009190606090818501906020808901865b83811015610dea57815180516001600160a01b031686528381015184870152870151878601529385019390820190600101610db4565b505095909501959095525092949350505050565b6001600160a01b0381168114610e1357600080fd5b50565b600060208284031215610e2857600080fd5b8151610e3381610dfe565b9392505050565b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018281126000831280158216821582161715610e8657610e86610e50565b505092915050565b6000600160ff1b8201610ea357610ea3610e50565b5060000390565b600060208284031215610ebc57600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b81810381811115610eec57610eec610e50565b92915050565b60008060008060808587031215610f0857600080fd5b84519350602085015192506040850151610f2181610dfe565b60608601519092508015158114610f3757600080fd5b939692955090935050565b604051610140810167ffffffffffffffff81118282101715610f7457634e487b7160e01b600052604160045260246000fd5b60405290565b60006101408284031215610f8d57600080fd5b610f95610f42565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b634e487b7160e01b600052603260045260246000fd5b60006001820161102957611029610e50565b5060010190565b805167ffffffffffffffff8116811461104857600080fd5b919050565b6000806000806000806000806000806101408b8d03121561106d57600080fd5b8a51995060208b0151985060408b0151975060608b01516005811061109157600080fd5b965061109f60808c01611030565b95506110ad60a08c01611030565b94506110bb60c08c01611030565b935060e08b015192506101008b01516110d381610dfe565b809250506101208b015190509295989b9194979a5092959850565b6000806040838503121561110157600080fd5b50508051602090910151909290915056fea164736f6c6343000814000a";

type MultiTroveGetterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiTroveGetterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiTroveGetter__factory extends ContractFactory {
  constructor(...args: MultiTroveGetterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _collateralRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_collateralRegistry, overrides || {});
  }
  override deploy(
    _collateralRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_collateralRegistry, overrides || {}) as Promise<
      MultiTroveGetter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MultiTroveGetter__factory {
    return super.connect(runner) as MultiTroveGetter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiTroveGetterInterface {
    return new Interface(_abi) as MultiTroveGetterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MultiTroveGetter {
    return new Contract(address, _abi, runner) as unknown as MultiTroveGetter;
  }
}
