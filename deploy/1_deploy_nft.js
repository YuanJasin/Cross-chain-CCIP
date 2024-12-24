import { deployments, getNamedAccounts } from "hardhat";

module.exports = async ({deployments, getNamedAccounts}) => {
    const firstAccount = await getNamedAccounts()
    const {deploy,log} = deployments

    log("Deploying nft constract")
    await deploy("MyToken",{
        consract:"MyToken",
        from:firstAccount,
        log:true,
        args:["MyToken","MT"]
    })
    log("nft contract deployed successfully")
}

module.exports.tags = ["all", "sourcechain"]