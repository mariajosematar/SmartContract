const { ethers } = require("hardhat");

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");

    //create instance of the contract
    const hello_world = await HelloWorld.deploy("Hello world!");
    console.log(`Contract deployed to address: ${hello_world.address}`);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });