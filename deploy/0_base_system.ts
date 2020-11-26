import "module-alias/register";

import {
  BuidlerRuntimeEnvironment,
  DeployFunction,
} from "@nomiclabs/buidler/types";

import {
  ensureOutputsFile,
  getContractAddress,
  getNetworkConstant,
  removeNetwork,
  writeContractAndTransactionToOutputs,
} from "@utils/deploys/output-helper";

const func: DeployFunction = async function (bre: BuidlerRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = bre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();
  // Configure development deployment
  const networkConstant = await getNetworkConstant();
  try {
    if (networkConstant) {
      console.log(`\n*** Clearing all addresses for ${networkConstant} ***\n`);
      await removeNetwork(networkConstant);
    }
  } catch (error) {
    console.log("*** No addresses to wipe *** ");
  }

  await ensureOutputsFile();

  // Deploy token
  const spiceTokenDeploy = await deploy(
    "SpiceToken",
    { from: deployer, args: [deployer], log: true }
  );
  await writeContractAndTransactionToOutputs(
    "SpiceToken",
    spiceTokenDeploy.address,
    spiceTokenDeploy.receipt.transactionHash,
    "Deployed SpiceToken"
  );
};
export default func;

