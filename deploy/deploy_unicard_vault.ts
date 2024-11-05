import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const deployedResult = await deploy("UniCardVault", {
    from: deployer,
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      owner: deployer,
      execute: {
        init: {
          methodName: "initialize",
          args: [deployer, "0x5a9A8e347E130fcb57E9615a78602e57C760E189"],
        },
      },
    },
    log: true,
  });
};

func.id = "unicard_vault";
func.tags = ["DeployUniCardVault"];
export default func;
