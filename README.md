# Neonscan issue with verifying OpenZeppelin upgrade contracts
This is an example which demonstrate the issue of NeonScan verifying OpenZeppelin **UUPS** and **Transparent Upgradeable** smart contracts.

### Steps to reproduce the issue:
* ```npm install``` - Downloading required packages.

### UUPS
* ```npx hardhat run scripts/deployUUPS.js --network neondevnet``` - Deploy **UUPS** on Neon DevNet
* ```npx hardhat verify --network neondevnet <PROXY_ADDRESS>``` - Try to verify **UUPS** on Neon DevNet _( here is where the error appears )_

### Transparent Upgradeable
* ```npx hardhat run scripts/deployTransparentUpgradeable.js --network neondevnet``` - Deploy **Transparent Upgradeable** on Neon DevNet
* ```npx hardhat verify --network neondevnet <PROXY_ADDRESS>``` - Try to verify **Transparent Upgradeable** on Neon DevNet _( here is where the error appears )_

### Error
```
An unexpected error occurred:

Error: Etherscan API call failed with status 504, response: error code: 504
```

#### Before deploying make sure to create .env file containing the following data ( make a copy of .env.example file and rename it to .env ):
```
    PRIVATE_KEY_OWNER=XYZ
```
- *PRIVATE_KEY_OWNER - the private key of the owner used to deploy the contracts.*