var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'spirit supply whale amount human item harsh scare congress discover talent hamster';


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/f6b3d56706274b56a32307e894577d88`)
      },
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    }
  }
};