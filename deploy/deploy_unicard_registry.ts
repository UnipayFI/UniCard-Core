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

    // const uniCardRegistry = await hre.ethers.getContractAt("UniCardRegistryUpgradeable", deployedResult.address);
    // const tx1 = await uniCardRegistry.grantRole(await uniCardRegistry.ALLOWED_TOKEN_PAYMENT(), "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE");
    // await tx1.wait();
    // console.log(`GRANTED ALLOWED_TOKEN_PAYMENT at tx ${tx1.hash}`);
    // const tx2 = await uniCardRegistry.grantRole(await uniCardRegistry.ALLOWED_TOKEN_PAYMENT(), aPaymentToken);
    // await tx2.wait();
    // console.log(`GRANTED ALLOWED_TOKEN_PAYMENT at tx ${tx2.hash}`);
};

func.id = "unicard_registry";
func.tags = ["DeployUniCardRegistry"];
export default func;
