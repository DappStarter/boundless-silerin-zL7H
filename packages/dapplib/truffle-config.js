require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile purpose harvest glimpse frame squirrel'; 
let testAccounts = [
"0xb67e978cf655c742ed107228a39be8e96378cb87632d32f8d23f890cd879a280",
"0xbcbe7a5f471389ed0e134b5979ac7226efc33835185bbba7258dd2b9580cd158",
"0x2514930c6a29c55029481a1cfa0fc7c16bd0240bd1f86571d4593aafe045b18c",
"0x44c6cd25cb384710e04335db47870dc7ce63e813fa15b8957fc5317f83451db6",
"0x725bb1a2e6c72c1fc72f636475f74bfb8cd4b212e2ec8edd9de06dac025327d3",
"0xf9020e60365a09f730e4d9a5d2557e19451960d0b847d007486263ce35b5a0dc",
"0xbf40453376e0cf8cf277d0753c5353e63be1f242428c09494c12915969708eb5",
"0xee13de90858244ef911bbd5b8e1c76faa5e771180257fd9d99aebd24a83fbf3e",
"0xcec66f44fb1a413e6663381f10aba6a83aaa66faa764aad25f7debe98aeb54ab",
"0x0b6b0dc0681c1f925a7625b509acf51f25e4b496f0a3e4556b22fa15167abfce"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


