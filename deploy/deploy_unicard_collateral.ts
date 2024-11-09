import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { USDU, UniCardCollateral } from "../typechain-types";

const oracle: Record<string, string> = {
  sepolia: "0x459eaeA021706ebbeb7FE08D8E237822911B1415",
  mainnet: "0x4c517d4e2c851ca76d7ec94b805269df0f2201de",
};

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, ethers, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const usdu = (await ethers.getContract("USDU")) as USDU;
  const priceFeed = oracle[network.name as keyof typeof oracle];
  if (!priceFeed) {
    throw new Error(`Price feed for ${network.name} not found`);
  }

  const deployedResult = await deploy("UniCardCollateral", {
    from: deployer,
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      owner: deployer,
      execute: {
        init: {
          methodName: "initialize",
          args: [deployer, await usdu.getAddress(), priceFeed],
        },
      },
    },
    log: true,
  });
  console.log("UniCardCollateral deployed at", deployedResult.address);
  if ((await usdu.UNICARD_COLLATERAL()) == ethers.ZeroAddress) {
    const tx1 = await usdu.setAddress(deployedResult.address);
    await tx1.wait();
    console.log(`USDU setAddress ${tx1.hash}`)
  }
  const uniCardCollateral = (await ethers.getContract("UniCardCollateral")) as UniCardCollateral;
  const tx2 = await uniCardCollateral.grantRole(await uniCardCollateral.ALLOWED_REPAY_TOKEN(), await usdu.getAddress());
  await tx2.wait();
  console.log(`UniCardCollateral grant allowed_repay_token ${tx2.hash}`)
};

func.id = "unicard_collateral";
func.tags = ["DeployUniCardCollateral"];
func.dependencies = ["DeployUSDU"];
export default func;
