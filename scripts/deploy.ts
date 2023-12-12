import { ethers } from "hardhat";

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();
  const deployedCode = await helloWorld.getDeployedCode();

  console.log("helloWorld contract deployed:", helloWorld);
  console.log("deployed code", deployedCode);
  console.log(await helloWorld.hi());

  // console.log(`deployed helloWorld: ${helloWorld}`);
  // console.log(`deployed to ${helloWorld.getAddress()}`);
  // console.log(`function called: ${helloWorld.hi()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
