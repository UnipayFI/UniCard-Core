import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { UniCardCollateral, UniCardVault, USDU } from "../typechain-types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // @ts-ignore
  const { getNamedAccounts, deployments, ethers, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const usdu = (await ethers.getContract("USDU")) as USDU;
  const unicardVault = (await ethers.getContract("UniCardVault")) as UniCardVault;
  const unicardCollateral = (await ethers.getContract("UniCardCollateral")) as UniCardCollateral;

  const deployedResult = await deploy("UniCardCVProxy", {
    from: deployer,
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      owner: deployer,
      execute: {
        init: {
          methodName: "initialize",
          args: [
            deployer,
            await unicardCollateral.getAddress(),
            await unicardVault.getAddress(),
            await usdu.getAddress(),
          ],
        },
      },
    },
    log: true,
  });
  console.log("UniCardCVProxy deployed at", deployedResult.address);

  const tx1 = await unicardCollateral.grantRole(await unicardCollateral.UNICARD_CV_PROXY_ROLE(), deployedResult.address);
  await tx1.wait();
  console.log(`UniCardCollateral grant unicard_cv_proxy_role ${tx1.hash}`)

  const tx2 = await unicardVault.grantRole(await unicardVault.UNICARD_CV_PROXY_ROLE(), deployedResult.address);
  await tx2.wait();
  console.log(`UniCardVault grant unicard_cv_proxy_role ${tx2.hash}`)
};

func.id = "unicard_cvproxy";
func.tags = ["DeployUniCardCVProxy"];
export default func;
