# hardhat-neonscan

[Hardhat](https://hardhat.org) plugin for integration with [Neonscan](https://neonscan.org/)'s contract verification service.


## Usage
You need to add the following Etherscan config to your `hardhat.config.js` file:
### Devnet

```js
etherscan: {
  apiKey: {
    neonevm: "test"
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
}
```

### Testnet
Comming soon, avaiable when Neon support testnet

### Mainnet
Comming soon, avaiable when Neon support mainnet