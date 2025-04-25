const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying Staking contract from:", deployer.address);

  // Replace with the actual deployed token contract address
  const tokenAddress = "0xYourTokenAddressHere";

  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy(tokenAddress);

  await staking.deployed();

  console.log("✅ Staking contract deployed at:", staking.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
