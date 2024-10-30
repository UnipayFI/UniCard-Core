import '@nomicfoundation/hardhat-ethers';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import '@openzeppelin/hardhat-upgrades';
import '@typechain/hardhat';
import 'hardhat-abi-exporter'
import 'hardhat-contract-sizer'
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import "@nomicfoundation/hardhat-verify";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";

const DEFAULT_COMPILER_SETTINGS = {
    version: "0.8.20",
    settings: {
        optimizer: {
            enabled: true,
            runs: 500,
        },
        metadata: {
            bytecodeHash: "none",
        },
    },
};

const config = {
    solidity: {
        compilers: [DEFAULT_COMPILER_SETTINGS],
    },
    namedAccounts: {
        deployer: {
            default: 0
        }
    },
    networks: {
        sepolia: {
            url: process.env.RPC_URL as string,
            accounts: [process.env.PRIVATE_KEY as string],
        },
        mainnet: {
            url: process.env.RPC_URL as string,
            chainId: 1,
            accounts: [process.env.PRIVATE_KEY as string]
        },
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: "USD",
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY as string,
    },
    abiExporter: {
        runOnCompile: true,
    },
};

export default config;
