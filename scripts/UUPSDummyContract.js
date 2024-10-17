async function main() {
    const UUPSDummyContractFactory = await hre.ethers.getContractFactory(
        "UUPSDummyContract"
    );
    const UUPSDummyContract = await upgrades.deployProxy(UUPSDummyContractFactory, [], {
        kind: "uups",
    });
    await UUPSDummyContract.waitForDeployment();

    console.log(`UUPSDummyContract proxy deployed to ${UUPSDummyContract.target}`);
    console.log(
        `UUPSDummyContract implementation deployed to ${await upgrades.erc1967.getImplementationAddress(
            UUPSDummyContract.target
        )}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});