import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("USDU", {
    from: deployer,
    args: [deployer],
    log: true,
  });
};

func.id = "unicard_usdu";
func.tags = ["DeployUSDU"];
export default func;
