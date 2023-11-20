const { ethers } = require("hardhat");

async function main() {
    const TestTransparentUpgradeableContractFactory = await hre.ethers.getContractFactory('TestTransparentUpgradeableContract');
    const TestTransparentUpgradeableContract = await upgrades.deployProxy(TestTransparentUpgradeableContractFactory, [], {kind: 'transparent'});
    await TestTransparentUpgradeableContract.waitForDeployment();

    console.log(
        `TestTransparentUpgradeableContract proxy deployed to ${TestTransparentUpgradeableContract.target}`
    );
    console.log(
        `TestTransparentUpgradeableContract implementation deployed to ${await upgrades.erc1967.getImplementationAddress(TestTransparentUpgradeableContract.target)}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});