const path = require('path');

module.exports = {
  entry: {
    "server/page": "./src/server/page.jsx",
    // "server/lazy": "./src/server/lazy.jsx",
    // "client/page": "./src/client/page.jsx",
  },
  output: {
    library: {
      name: 'test',
      type: 'commonjs2',
      export: 'default',
    },
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react'
            ],
            // plugins: ["@babel/plugin-transform-modules-commonjs"]
          },
        },
      },
      // {
      //   test: /^\.src\/client\/[\S]+\.jsx$/i,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ['@babel/preset-env', '@babel/preset-react']
      //     }
      //   }
      // },
      // {
      //   test: /^\.src\/server\/[\S]+\.jsx$/i,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       presets: ['@babel/preset-react']
      //     }
      //   }
      // },
    ],
  },
};