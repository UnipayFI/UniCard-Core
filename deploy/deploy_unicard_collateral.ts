import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { USDU } from "../typechain-types";

const oracle = "0x0000000000000000000000000000000000000000";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, ethers } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const usdu = (await ethers.getContract("USDU")) as USDU;

  const deployedResult = await deploy("UniCardCollateral", {
    from: deployer,
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      owner: deployer,
      execute: {
        init: {
          methodName: "initialize",
          args: [deployer, await usdu.getAddress(), oracle],
        },
      },
    },
    log: true,
  });
  console.log("UniCardCollateral deployed at", deployedResult.address);
  await usdu.setAddress(deployedResult.address);
};

func.id = "unicard_collateral";
func.tags = ["DeployUniCardCollateral"];
func.dependencies = ["DeployUSDU"];
export default func;
