// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
    const [owner, raffleManager] = await ethers.getSigners();
    const RECEIPTS_COUNT = 3;
    console.log(owner.address, 'owner');
    console.log(raffleManager.address, 'raffleManager');

    // deploy WaveFactory
    const WaveFactory = await ethers.deployContract("WaveFactory", [
        owner.address,
        owner.address,
        owner.address,
        raffleManager.address
    ]);
    await WaveFactory.waitForDeployment();
    console.log(
        `WaveFactory token deployed to ${WaveFactory.target}`
    );
    //const WaveFactory = await ethers.getContractAt('WaveFactory', '0x81C4e95Ce11d9732fEE99Cce25e61dEC99887530');

    // deploy ERC20 reward token
    const TestERC20 = await ethers.deployContract("TestERC20");
    await TestERC20.waitForDeployment();
    console.log(
        `TestERC20 token deployed to ${TestERC20.target}`
    );
    //const TestERC20 = await ethers.getContractAt('TestERC20', '0xea6b04272f9f62f997f666f07d3a974134f7ffb9');

    // owner giving allowance so when WaveContract is deployed to take tokens from the owner
    let tx = await TestERC20.connect(owner).approve(WaveFactory.target, await TestERC20.totalSupply());
    await tx.wait(RECEIPTS_COUNT);

    // deploy WaveContract thru WaveFactory
    let timestamp = (await ethers.provider.getBlock(await ethers.provider.getBlockNumber())).timestamp;
    console.log(timestamp, 'timestamp');
    let deployWaveParams = [
        'TestCampaign',
        'TEST',
        'https://devnet.neonscan.org/static/media/logo.2cf8dc2f99065b2e633986d7da290b7f.svg',
        timestamp - 1800, // minus 30 mins
        timestamp + 900, // plus 15 mins
        false,
        [
            [
                1,
                200000,
                TestERC20.target
            ]
        ],
        [
            [
                1,
                200000,
                TestERC20.target
            ]
        ]
    ];
    console.log(deployWaveParams, 'deployWaveParams');
    let tx1 = await WaveFactory.deployWave(...deployWaveParams);
    await tx1.wait(RECEIPTS_COUNT);

    const WaveContractAddress = await WaveFactory.waves(0);
    console.log(WaveContractAddress, 'WaveContractAddress');


    const WaveContract = await ethers.getContractAt('WaveContract', WaveContractAddress);
    console.log(await WaveContract.startTimestamp(), 'startTimestamp');
    console.log(await WaveContract.endTimestamp(), 'endTimestamp');
    console.log(await WaveContract.lastId(), 'lastId');
    
    // creating dummy claims
    /* let tx2 = await WaveContract.connect(raffleManager).claim(0, 0, ethers.encodeBytes32String(""), ethers.encodeBytes32String(""));
    await tx2.wait(RECEIPTS_COUNT);
    console.log(await WaveContract.lastId(), 'lastId');
    let tx3 = await WaveContract.connect(user2).claim(0, 0, ethers.encodeBytes32String(""), ethers.encodeBytes32String(""));
    await tx3.wait(RECEIPTS_COUNT);
    console.log(await WaveContract.lastId(), 'lastId');
 
    setTimeout(async function() {
        console.log(await WaveContract.raffleCompleted(), 'raffleCompleted');
        console.log('Calling method fulfillRaffle ...');
        let tx4 = await WaveContract.connect(raffleManager).fulfillRaffle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        await tx4.wait(RECEIPTS_COUNT);

        console.log(await WaveContract.raffleCompleted(), 'raffleCompleted');
    }, 60000); */
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});