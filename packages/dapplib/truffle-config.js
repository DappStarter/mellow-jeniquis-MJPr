require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock brand ten index release noble snake imitate prize fresh gather'; 
let testAccounts = [
"0xb26800fd2b6c2952c9e367c7c8ad34f86ca4fba33a0eec8509e1c16d92cd589a",
"0x7a1917e0fb896e93f5fd24db6c0e13bb17e17b92b98a93b562c4bf400a3263d7",
"0x489afd2c10d985e953abf5fbaf135c523e7203f83da196faab5e75f0467dce17",
"0xea03d674fdbe1a12488855d2817918b63a451b8c0535414bb361d4ba88badd74",
"0x02ce2d314631a5cc04d10c1e2305582de7dd5b43c5186a50220dd24a6a0905df",
"0x5a2f1f14e89f6011fc4e66e90f6c799e1396d52a2484b03a8d347a0cbabc2097",
"0x946484aec9d19a69d48f5832cda7ef94979e49dd16fdd82f18e28cbe2ed2c620",
"0x566d10d0cd8d0007c83e0dfa6f7f01637814de884ad4a065ba5440c5f81b2508",
"0xfc05d656c491f0befa5970c741efe0da0f228eccc245175d7d0c797b0e960720",
"0xb0a59979c27fe1a27b4e4bf3049093978a6d411ec8e639f0e5579d5bbdfac4c1"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

