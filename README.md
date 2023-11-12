# Neonscan verifying issue
**This is issue exists on both Neonscan Devnet & Mainnet.**

### Setup terminal commands:
* ```npm install``` - Downloading required packages.

### Commands to reproduce the bug:
* ```npx hardhat run scripts/deploy.js --network neondevnet```
* ```npx hardhat verify --network neondevnet 0x1e361f323d4fED1549a454512767212aF9713617 0xAB1c34b53F12980a4fa9043B70c864CEE6891c0C 0xAB1c34b53F12980a4fa9043B70c864CEE6891c0C 0xAB1c34b53F12980a4fa9043B70c864CEE6891c0C 0xb8f913C9AB9944891993F6c6fDAc421D98461294``` - this works ok, WaveFactory is getting verified successfully.
* ```npx hardhat verify --network neondevnet 0xdd8466d7da90b32Fc2Fec36A05c0480B25021C8B --constructor-args arguments.js``` - here is where the issue happens, WaveContract cannot be verified.

### Addresses used to reproduce the bug:
* ```0x1e361f323d4fED1549a454512767212aF9713617``` - WaveFactory.sol
* ```0xdd8466d7da90b32Fc2Fec36A05c0480B25021C8B``` - WaveContract.sol
* ```0xAB1c34b53F12980a4fa9043B70c864CEE6891c0C``` - the owner passed as parameter to WaveFactory.sol
* ```0xb8f913C9AB9944891993F6c6fDAc421D98461294``` - the raffleManager passed as parameter to WaveFactory.sol

#### If you're going to reproduce the issue on your own before deploying make sure to create .env file containing the following data ( make a copy of .env.example file and rename it to .env ):
```
    PRIVATE_KEY_OWNER=XYZ
    USER1_KEY=XYZ
```
- *PRIVATE_KEY_OWNER - the private key of the owner used to deploy the contracts.*
- *USER1_KEY - the private key of the raffleManager.*