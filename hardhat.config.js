require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: "0.8.20"
    },
    etherscan: {
        apiKey: {
            neonevm: "test",
            sepolia: "Z6WIEE85JHVEBCIBKUHDMGKEYJ82EKXX1B"
        },
        customChains: [
            {
                network: "neonevm",
                chainId: 245022926,
                urls: {
                    apiURL: "https://devnet-api.neonscan.org/hardhat/verify",
                    browserURL: "https://devnet.neonscan.org"
                }
            },
            {
                network: "neonevm",
                chainId: 245022934,
                urls: {
                    apiURL: "https://api.neonscan.org/hardhat/verify",
                    browserURL: "https://neonscan.org"
                }
            }
        ]
    },
    networks: {
        neondevnet: {
            url: "https://devnet.neonevm.org",
            accounts: [process.env.PRIVATE_KEY_OWNER],
            chainId: 245022926,
            allowUnlimitedContractSize: false,
            gas: "auto",
            gasPrice: 370000000000,
            timeout: 1200000
        },
        neonmainnet: {
            url: "https://mainnet-proxy.neonevm.org",
            accounts: [process.env.PRIVATE_KEY_OWNER],
            chainId: 245022934,
            allowUnlimitedContractSize: false,
            gas: "auto",
            gasPrice: "auto"
        },
        sepolia: {
            url: "https://rpc.ankr.com/eth_sepolia",
            accounts: [process.env.PRIVATE_KEY_OWNER],
            tags: ['test'],
            gasMultiplier: 1.2,
            maxFeePerGas: 200,
            maxPriorityFeePerGas: 10
        }
    },
    mocha: {
        timeout: 180000
    }
};
