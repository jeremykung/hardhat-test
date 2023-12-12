import { ethers } from "hardhat";

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();
  const deployedCode = await helloWorld.getDeployedCode();

  console.log("helloWorld contract deployed:", helloWorld);
  console.log("deployed code", deployedCode);
  console.log(await helloWorld.hi());

  const Manager = await ethers.getContractFactory("Manager");
  const manager = await Manager.deploy(helloWorld.getAddress());

  console.log("manager contract deployed:", manager);
  console.log(await manager.doStuff());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
