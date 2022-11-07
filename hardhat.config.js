require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const ALCHEMY_API_KEY =
  process.env.ALCHEMY_API_KEY || "https://eth-goerli/example";
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY || "0xkey";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
      chainId: 5,
    },
  },
};
