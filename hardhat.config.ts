import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-ethers"
import "hardhat-deploy"
import "hardhat-deploy-ethers"

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  namedAccounts:{
    firstAccount:{
      default:0
    }
  }
};

export default config;
