const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');
const implementation = artifacts.require("ERC721Token");

module.exports = async function (deployer) {
await deployProxy(implementation,["TestCollection","TC","https://ipfs.io","0xf924e49622f1c4e957d6e1128c499c5b0b5c197d",1000],{deployer , kind : "uups"})
// await upgradeProxy("",implementation)  
};