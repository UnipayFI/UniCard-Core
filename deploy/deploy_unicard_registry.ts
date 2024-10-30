import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    // @ts-ignore
    const { getNamedAccounts, deployments } = hre;
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const anAdmin = process.env.ADMIN;
    if (!anAdmin) {
        throw new Error("ADMIN is not set");
    }
    const aPaymentToken = process.env.PAYMENT_TOKEN;
    if (!aPaymentToken) {
        throw new Error("PAYMENT_TOKEN is not set");
    }

    const deployedResult = await deploy("UniCardRegistryUpgradeable", {
        from: deployer,
        proxy: {
            proxyContract: "OpenZeppelinTransparentProxy",
            owner: deployer,
            execute: {
                init: {
                    methodName: "initialize",
                    args: [anAdmin],
                },
            },
        },
        log: true,
    });

    const uniCardRegistry = await hre.ethers.getContractAt("UniCardRegistryUpgradeable", deployedResult.address);
    const tx = await uniCardRegistry.grantRole(await uniCardRegistry.ALLOWED_TOKEN_PAYMENT(), aPaymentToken);
    await tx.wait();
    console.log(
        `UniCardRegistry deployed at ${deployedResult.address} and granted ALLOWED_TOKEN_PAYMENT to ${aPaymentToken} at tx ${tx.hash}`
    );
};

func.id = "unicard_registry";
func.tags = ["DeployUniCardRegistry"];
export default func;
