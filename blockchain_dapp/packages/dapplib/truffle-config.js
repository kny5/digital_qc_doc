require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remember million grid nasty foam spoon'; 
let testAccounts = [
"0x138f431fd6a912fe3e0dfd53e6356eb03b83ebd6319d9d43cd658f1e257784ed",
"0x69478bdc6e762a50856b1d48df6e0a6f7d727e94709474ea027bc6d18fdf9ac7",
"0xf5ba1a43d31d5aeadfb177461aae7955f7a8915677b6d4911bab13ba1ca85051",
"0x98ab040caf32c57c35fda6296e11843c7bd2a7ace5f0cbc2f1037c24baebd385",
"0x38fde05c99bc072742e2888ea0bdf3eded8b3a091f9ec62319d06b5bdb02fae5",
"0x53eebc65403000b0a3266d96080d2d8881e26dec834fc3ee67d5e7be2f0743cc",
"0xfdfef55652b2c47075387e7f20732ab5bbdc23899759a7d62e44e70f6197fe0b",
"0xcce7ffa69281c73e51ff684e5503a19aae00c51c3ab6128f9dc718d75e32677e",
"0xe63a7eb27795f960208a4413569e43c3a4240b2b68319aa812442c46ab698602",
"0x4bd47d41994e3564ba87b65875b7def9026a968204ce71b1fe5f2c40dfe6402e"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
