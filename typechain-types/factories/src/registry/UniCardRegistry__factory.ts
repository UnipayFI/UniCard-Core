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
  UniCardRegistry,
  UniCardRegistryInterface,
} from "../../../src/registry/UniCardRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "anAdmin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
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
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [],
    name: "EnforcedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpectedPause",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
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
    inputs: [],
    name: "UNICARD_REGISTRY_INVALID_SIGNATURE",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_NONCE_MISMATCH",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_PAYMENT_TOKEN_NOT_ALLOWED",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_REQUEST_TX_HASH_ALREADY_USED",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_REQUEST_TX_HASH_EMPTY",
    type: "error",
  },
  {
    inputs: [],
    name: "UNICARD_REGISTRY_USER_ALREADY_HAS_COMMITMENT",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "requestTxHash",
        type: "string",
      },
    ],
    name: "CardOpenConfirmation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productCode",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "inviteCode",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "referralCode",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "CardOpenRequest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "ALLOWED_TOKEN_PAYMENT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "CONTROLLER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NATIVE_TOKEN",
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
    name: "UNICARD_VAULT_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
    ],
    name: "commitments",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "productCode",
            type: "string",
          },
          {
            internalType: "address",
            name: "holder",
            type: "address",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
        ],
        internalType: "struct IUniCardRegistry.Commitment",
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
        internalType: "address",
        name: "aHolder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "aNonce",
        type: "uint256",
      },
    ],
    name: "confirmationKey",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "confirmation",
        type: "bytes32",
      },
    ],
    name: "confirmations",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "productCode",
            type: "string",
          },
          {
            internalType: "address",
            name: "holder",
            type: "address",
          },
          {
            internalType: "address",
            name: "paymentToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "commitment",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "requestTxHash",
            type: "string",
          },
        ],
        internalType: "struct IUniCardRegistry.Confirmation",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "anAddress",
        type: "address",
      },
    ],
    name: "hasAdminRole",
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
        internalType: "address",
        name: "anAddress",
        type: "address",
      },
    ],
    name: "hasControllerRole",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
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
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "productCode",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "requestTxHash",
        type: "string",
      },
    ],
    name: "openCardConfirmation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "productCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "inviteCode",
        type: "string",
      },
      {
        internalType: "string",
        name: "referralCode",
        type: "string",
      },
    ],
    name: "openCardRequest",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
        internalType: "address",
        name: "paymentToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e9e38038062001e9e8339810160408190526200003491620001d8565b600180556002805460ff191690556200004f600082620000de565b506200007d7f7b765e0e932d348852a6f810bfa1ab891e259123f02db8cdcde614c57022335760006200018d565b620000aa7fb0556657657e6f2a9ab555181b3ae26a9a17fe4de2644d7a728f0eb3957063d260006200018d565b620000d77f5521ede19eb2604937d63b5901868b6ab4b4503c8194bdcbecb65f3406f64e3160006200018d565b506200020a565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1662000183576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556200013a3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600162000187565b5060005b92915050565b600082815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b600060208284031215620001eb57600080fd5b81516001600160a01b03811681146200020357600080fd5b9392505050565b611c84806200021a6000396000f3fe60806040526004361061013a5760003560e01c806391d14854116100bb578063c395fcb31161007f578063d547741f11610059578063d547741f14610470578063ec95bfe714610490578063f3fef3a3146104bd57600080fd5b8063c395fcb3146103ba578063c777b3ea146103da578063d41698f61461040e57600080fd5b806391d14854146102fa5780639ae97dcb1461033e578063a217fddf14610372578063a2c398dc14610387578063a4ded79f146103a757600080fd5b806331f7d9641161010257806331f7d9641461022857806336568abe146102685780635c975abb146102885780637ecebe00146102a0578063839df945146102cd57600080fd5b806301ffc9a71461013f578063092c5b3b1461017457806314b95ee4146101b6578063248a9ca3146101d65780632f2ff15d14610206575b600080fd5b34801561014b57600080fd5b5061015f61015a366004611607565b6104dd565b60405190151581526020015b60405180910390f35b34801561018057600080fd5b506101a87f7b765e0e932d348852a6f810bfa1ab891e259123f02db8cdcde614c57022335781565b60405190815260200161016b565b3480156101c257600080fd5b5061015f6101d136600461164d565b610514565b3480156101e257600080fd5b506101a86101f1366004611668565b60009081526020819052604090206001015490565b34801561021257600080fd5b50610226610221366004611681565b610554565b005b34801561023457600080fd5b5061025073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6040516001600160a01b03909116815260200161016b565b34801561027457600080fd5b50610226610283366004611681565b61057f565b34801561029457600080fd5b5060025460ff1661015f565b3480156102ac57600080fd5b506101a86102bb36600461164d565b60036020526000908152604090205481565b3480156102d957600080fd5b506102ed6102e8366004611668565b6105b7565b60405161016b91906116fd565b34801561030657600080fd5b5061015f610315366004611681565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561034a57600080fd5b506101a87fb0556657657e6f2a9ab555181b3ae26a9a17fe4de2644d7a728f0eb3957063d281565b34801561037e57600080fd5b506101a8600081565b34801561039357600080fd5b506102266103a23660046117fe565b6106b6565b6102266103b53660046118c7565b61098e565b3480156103c657600080fd5b5061015f6103d536600461164d565b610c2b565b3480156103e657600080fd5b506101a87f5521ede19eb2604937d63b5901868b6ab4b4503c8194bdcbecb65f3406f64e3181565b34801561041a57600080fd5b506101a8610429366004611949565b6040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b34801561047c57600080fd5b5061022661048b366004611681565b610c6b565b34801561049c57600080fd5b506104b06104ab366004611668565b610c90565b60405161016b9190611973565b3480156104c957600080fd5b506102266104d8366004611949565b610e59565b60006001600160e01b03198216637965db0b60e01b148061050e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6001600160a01b03811660009081527fd4b1ef424fcb83dce82b8e6790fbd9bbcd76978bd34427cec18daa7ab2167543602052604081205460ff1661050e565b60008281526020819052604090206001015461056f81610ee9565b6105798383610ef6565b50505050565b6001600160a01b03811633146105a85760405163334bd91960e11b815260040160405180910390fd5b6105b28282610fa0565b505050565b60408051608081018252606080825260006020830181905292820183905281019190915260008281526004602052604090819020815160808101909252805482908290610603906119e3565b80601f016020809104026020016040519081016040528092919081815260200182805461062f906119e3565b801561067c5780601f106106515761010080835404028352916020019161067c565b820191906000526020600020905b81548152906001019060200180831161065f57829003601f168201915b505050918352505060018201546001600160a01b039081166020830152600283015416604082015260039091015460609091015292915050565b6106be611023565b6106c661104d565b80516000036106e85760405163211e4cad60e01b815260040160405180910390fd5b6001600160a01b038616600090815260036020526040902054841461072057604051636dbc16d760e11b815260040160405180910390fd5b6000868686866040516020016107399493929190611a1d565b60405160208183030381529060405280519060200120905061075b8184611073565b610778576040516312497a9360e01b815260040160405180910390fd5b604080516bffffffffffffffffffffffff1960608a901b16602080830191909152603480830189905283518084039091018152605490920183528151918101919091206001600160a01b038a16600090815260039092529181208054916107de83611a80565b9091555050600081815260056020819052604082200180546107ff906119e3565b905011156108205760405163129787db60e31b815260040160405180910390fd5b6040518060c00160405280868152602001896001600160a01b03168152602001886001600160a01b03168152602001878152602001838152602001848152506005600083815260200190815260200160002060008201518160000190816108879190611adf565b5060208201516001820180546001600160a01b039283166001600160a01b0319918216179091556040840151600284018054919093169116179055606082015160038201556080820151600482015560a082015160058201906108ea9082611adf565b50505060008281526004602052604081209061090682826115b9565b506001810180546001600160a01b0319908116909155600282018054909116905560006003909101556040516001600160a01b0388811691908a16907f0a96207445142e05993257ee534010bd82000c0f781f7551d7b903155539fcbf90610973908a9087908990611b9f565b60405180910390a3505061098660018055565b505050505050565b610996611023565b61099e61104d565b6001600160a01b03851660009081527fc4b1370060e534dac6af57a288fc1f7bd73b31c89156b673e86ff8939e743ace602052604090205460ff166109f6576040516375f65cff60e01b815260040160405180910390fd5b8315610ab1576001600160a01b03851673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14610a3a57610a356001600160a01b038616873087611117565b610ab1565b604051309085156108fc029086906000818181858888f19350505050158015610a67573d6000803e3d6000fd5b5083341115610ab1576001600160a01b0386166108fc610a878634611bbe565b6040518115909202916000818181858888f19350505050158015610aaf573d6000803e3d6000fd5b505b6001600160a01b0386166000908152600360209081526040808320549051909291610ae4918a918a9186918a9101611a1d565b60408051601f198184030181529181528151602092830120600081815260049093529120600101549091506001600160a01b0316610bb357604080516080810182528681526001600160a01b03808b16602080840191909152908a168284015260608201859052600084815260049091529190912081518190610b679082611adf565b5060208201516001820180546001600160a01b039283166001600160a01b0319918216179091556040840151600284018054919093169116179055606090910151600390910155610bcc565b60405163345fa13360e21b815260040160405180910390fd5b81876001600160a01b0316896001600160a01b03167ff4a8f73b2fef46ba045cc57b8c228c5fd042d84904899357429042598173208b8989898988604051610c18959493929190611bd1565b60405180910390a4505061098660018055565b6001600160a01b03811660009081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb5602052604081205460ff1661050e565b600082815260208190526040902060010154610c8681610ee9565b6105798383610fa0565b610cde6040518060c001604052806060815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008019168152602001606081525090565b60008281526005602052604090819020815160c08101909252805482908290610d06906119e3565b80601f0160208091040260200160405190810160405280929190818152602001828054610d32906119e3565b8015610d7f5780601f10610d5457610100808354040283529160200191610d7f565b820191906000526020600020905b815481529060010190602001808311610d6257829003601f168201915b505050918352505060018201546001600160a01b0390811660208301526002830154166040820152600382015460608201526004820154608082015260058201805460a090920191610dd0906119e3565b80601f0160208091040260200160405190810160405280929190818152602001828054610dfc906119e3565b8015610e495780601f10610e1e57610100808354040283529160200191610e49565b820191906000526020600020905b815481529060010190602001808311610e2c57829003601f168201915b5050505050815250509050919050565b6000610e6481610ee9565b610e6c611023565b610e7461104d565b6001600160a01b03831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14610eb157610eac6001600160a01b0384163384611193565b610ee0565b604051339083156108fc029084906000818181858888f19350505050158015610ede573d6000803e3d6000fd5b505b6105b260018055565b610ef381336111c4565b50565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16610f98576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055610f503390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600161050e565b50600061050e565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1615610f98576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a450600161050e565b60026001540361104657604051633ee5aeb560e01b815260040160405180910390fd5b6002600155565b60025460ff16156110715760405163d93c066560e01b815260040160405180910390fd5b565b6040517f19556e69706179205369676e6564204d6573736167653a0a33320000000000006020820152603a81018390526000908190605a0160405160208183030381529060405280519060200120905060006110cf8285611220565b6001600160a01b03811660009081527fd4b1ef424fcb83dce82b8e6790fbd9bbcd76978bd34427cec18daa7ab2167543602052604090205490915060ff165b95945050505050565b6040516001600160a01b0384811660248301528381166044830152606482018390526105799186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061124a565b6040516001600160a01b038381166024830152604482018390526105b291859182169063a9059cbb9060640161114c565b6000828152602081815260408083206001600160a01b038516845290915290205460ff1661121c5760405163e2517d3f60e01b81526001600160a01b0382166004820152602481018390526044015b60405180910390fd5b5050565b60008060008061123086866112ad565b92509250925061124082826112fa565b5090949350505050565b600061125f6001600160a01b038416836113b3565b905080516000141580156112845750808060200190518101906112829190611c23565b155b156105b257604051635274afe760e01b81526001600160a01b0384166004820152602401611213565b600080600083516041036112e75760208401516040850151606086015160001a6112d9888285856113c8565b9550955095505050506112f3565b50508151600091506002905b9250925092565b600082600381111561130e5761130e611c45565b03611317575050565b600182600381111561132b5761132b611c45565b036113495760405163f645eedf60e01b815260040160405180910390fd5b600282600381111561135d5761135d611c45565b0361137e5760405163fce698f760e01b815260048101829052602401611213565b600382600381111561139257611392611c45565b0361121c576040516335e2f38360e21b815260048101829052602401611213565b60606113c183836000611497565b9392505050565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115611403575060009150600390508261148d565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611457573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166114835750600092506001915082905061148d565b9250600091508190505b9450945094915050565b6060814710156114bc5760405163cd78605960e01b8152306004820152602401611213565b600080856001600160a01b031684866040516114d89190611c5b565b60006040518083038185875af1925050503d8060008114611515576040519150601f19603f3d011682016040523d82523d6000602084013e61151a565b606091505b509150915061152a868383611534565b9695505050505050565b6060826115495761154482611590565b6113c1565b815115801561156057506001600160a01b0384163b155b1561158957604051639996b31560e01b81526001600160a01b0385166004820152602401611213565b50806113c1565b8051156115a05780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b5080546115c5906119e3565b6000825580601f106115d5575050565b601f016020900490600052602060002090810190610ef391905b8082111561160357600081556001016115ef565b5090565b60006020828403121561161957600080fd5b81356001600160e01b0319811681146113c157600080fd5b80356001600160a01b038116811461164857600080fd5b919050565b60006020828403121561165f57600080fd5b6113c182611631565b60006020828403121561167a57600080fd5b5035919050565b6000806040838503121561169457600080fd5b823591506116a460208401611631565b90509250929050565b60005b838110156116c85781810151838201526020016116b0565b50506000910152565b600081518084526116e98160208601602086016116ad565b601f01601f19169290920160200192915050565b60208152600082516080602084015261171960a08401826116d1565b905060208401516001600160a01b0380821660408601528060408701511660608601525050606084015160808401528091505092915050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff8084111561178357611783611752565b604051601f8501601f19908116603f011681019082821181831017156117ab576117ab611752565b816040528093508581528686860111156117c457600080fd5b858560208301376000602087830101525050509392505050565b600082601f8301126117ef57600080fd5b6113c183833560208501611768565b60008060008060008060c0878903121561181757600080fd5b61182087611631565b955061182e60208801611631565b945060408701359350606087013567ffffffffffffffff8082111561185257600080fd5b61185e8a838b016117de565b9450608089013591508082111561187457600080fd5b818901915089601f83011261188857600080fd5b6118978a833560208501611768565b935060a08901359150808211156118ad57600080fd5b506118ba89828a016117de565b9150509295509295509295565b60008060008060008060c087890312156118e057600080fd5b6118e987611631565b95506118f760208801611631565b945060408701359350606087013567ffffffffffffffff8082111561191b57600080fd5b6119278a838b016117de565b9450608089013591508082111561193d57600080fd5b6118978a838b016117de565b6000806040838503121561195c57600080fd5b61196583611631565b946020939093013593505050565b602081526000825160c0602084015261198f60e08401826116d1565b905060208401516001600160a01b038082166040860152806040870151166060860152505060608401516080840152608084015160a084015260a0840151601f198483030160c085015261110e82826116d1565b600181811c908216806119f757607f821691505b602082108103611a1757634e487b7160e01b600052602260045260246000fd5b50919050565b60006bffffffffffffffffffffffff19808760601b168352808660601b166014840152508360288301528251611a5a8160488501602087016116ad565b9190910160480195945050505050565b634e487b7160e01b600052601160045260246000fd5b600060018201611a9257611a92611a6a565b5060010190565b601f8211156105b257600081815260208120601f850160051c81016020861015611ac05750805b601f850160051c820191505b8181101561098657828155600101611acc565b815167ffffffffffffffff811115611af957611af9611752565b611b0d81611b0784546119e3565b84611a99565b602080601f831160018114611b425760008415611b2a5750858301515b600019600386901b1c1916600185901b178555610986565b600085815260208120601f198616915b82811015611b7157888601518255948401946001909101908401611b52565b5085821015611b8f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b83815282602082015260606040820152600061110e60608301846116d1565b8181038181111561050e5761050e611a6a565b85815260a060208201526000611bea60a08301876116d1565b8281036040840152611bfc81876116d1565b90508281036060840152611c1081866116d1565b9150508260808301529695505050505050565b600060208284031215611c3557600080fd5b815180151581146113c157600080fd5b634e487b7160e01b600052602160045260246000fd5b60008251611c6d8184602087016116ad565b919091019291505056fea164736f6c6343000814000a";

type UniCardRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniCardRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniCardRegistry__factory extends ContractFactory {
  constructor(...args: UniCardRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    anAdmin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(anAdmin, overrides || {});
  }
  override deploy(
    anAdmin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(anAdmin, overrides || {}) as Promise<
      UniCardRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): UniCardRegistry__factory {
    return super.connect(runner) as UniCardRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniCardRegistryInterface {
    return new Interface(_abi) as UniCardRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UniCardRegistry {
    return new Contract(address, _abi, runner) as unknown as UniCardRegistry;
  }
}