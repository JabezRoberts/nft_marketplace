const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/fHy1C1uzVUOERhvd4OMPwAygYTzbBwi7',
      accounts: ['1b697ce78baec6a24fe5b279c3dc63c77f0e101df29c1178481dde7c3be7fa3b'],
    },
  },
  solidity: '0.8.4',
};
