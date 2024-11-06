import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const usdu = await deployments.get("USDU");

  await deploy("UniCardVault", {
    from: deployer,
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      owner: deployer,
      execute: {
        init: {
          methodName: "initialize",
          args: [deployer, usdu.address],
        },
      },
    },
    log: true,
  });
};

func.id = "unicard_vault";
func.tags = ["DeployUniCardVault"];
func.dependencies = ["DeployUSDU"];
export default func;
