// environment variables set in the package config

module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',  // ganache defaults
            port: 7545,         // ganache defaults
            network_id: "*"
    },
  },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/abis/',
    compilers: {
        solc: {
            version: "0.8.10", 
            // optimizer: {
            //  enabled: true,
            //  runs: 200
      }
    }
}