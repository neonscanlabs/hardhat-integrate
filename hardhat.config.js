require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: "0.8.21",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
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
            }
        ]
    },
    networks: {
        neondevnet: {
            url: "https://devnet.neonevm.org",
            accounts: [process.env.PRIVATE_KEY_OWNER, process.env.USER1_KEY],
            chainId: 245022926,
            allowUnlimitedContractSize: false,
            gas: "auto",
            gasPrice: "auto",
            isFork: true
        },
        neonmainnet: {
            url: "https://neon-proxy-mainnet.solana.p2p.org",
            accounts: [process.env.PRIVATE_KEY_OWNER, process.env.USER1_KEY],
            chainId: 245022934,
            allowUnlimitedContractSize: false,
            gas: "auto",
            gasPrice: "auto",
            isFork: true
        },
        sepolia: {
            url: "https://rpc.ankr.com/eth_sepolia",
            accounts: [process.env.PRIVATE_KEY_OWNER, process.env.USER1_KEY],
            tags: ['test'],
            gasMultiplier: 1.2,
            maxFeePerGas: 200,
            maxPriorityFeePerGas: 10
        },
        /* hardhat: {
            forking: {
                live: false,
                saveDeployments: false,
                accounts: [process.env.PRIVATE_KEY_OWNER],
                url: "https://devnet.neonevm.org"
            }
        } */
    },
    mocha: {
        timeout: 180000
    }
};
