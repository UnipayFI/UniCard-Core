import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, ethers, getNamedAccounts } = hre;
  const { deploy, execute, log } = deployments;
  const { deployer } = await getNamedAccounts();

  // Fetch the current proxy address for UniCardRegistry
  const existingProxy = await deployments.get("UniCardRegistry_Proxy");

  // const existingProxy = {address: "0xD2eB1Bb9d472b5572B295e34c14C9D0a619A77EA"}

  // Deploy the new implementation of UniCardRegistry
  const newImplementation = await deploy("UniCardRegistry", {
    from: deployer,
    log: true,
  });

  log(`Deployed new UniCardRegistry implementation at ${newImplementation.address}`);

  // Upgrade the proxy to use the new implementation
  await execute(
    "UniCardRegistry_ProxyAdmin",
    { from: deployer },
    "upgrade",
    existingProxy.address,
    newImplementation.address
  );

  log(`Upgraded UniCardRegistry proxy at ${existingProxy.address} to new implementation at ${newImplementation.address}`);

  // Optional: verify initialization if the new implementation has new logic
  const uniCardRegistry = await ethers.getContractAt("UniCardRegistry", existingProxy.address);

  const tx1 = await uniCardRegistry.grantRole(await uniCardRegistry.ALLOWED_TOKEN_PAYMENT(), "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE");
  await tx1.wait();
  console.log(`GRANTED ALLOWED_TOKEN_PAYMENT at tx ${tx1.hash}`);
};

func.id = "upgrade_unicard_registry";
func.tags = ["UpgradeUniCardRegistry"];
export default func;