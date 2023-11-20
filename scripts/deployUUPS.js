const { ethers } = require("hardhat");

async function main() {
    const TestUUPSContractFactory = await hre.ethers.getContractFactory('TestUUPSContract');
    const TestUUPSContract = await upgrades.deployProxy(TestUUPSContractFactory, [], {kind: 'uups'});
    await TestUUPSContract.waitForDeployment();

    console.log(
        `TestUUPSContract proxy deployed to ${TestUUPSContract.target}`
    );
    console.log(
        `TestUUPSContract implementation deployed to ${await upgrades.erc1967.getImplementationAddress(TestUUPSContract.target)}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});