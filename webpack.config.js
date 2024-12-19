const path = require('path');

module.exports = {
  entry: {
    "client/page": "./src/client/page.jsx",
    "client/sell/page": "./src/client/sell/page.jsx",
    "client/property/page": "./src/client/property/page.jsx",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  /**
   * Webpack doesn't like src/server/page.jsx
   * importing Lazy without an extension,
   * however it can't explicitly be .jsx
   * because then the import in dist/server/page.js
   * would also be using that, when it would
   * want .js, or no extension at all.
   * 
   * As far as I'm concerned, this just stops
   * Webpack complaining.
   */
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        /**
         * Could make `test` more granular, but I do not
         * know how it likes to format paths.
         */
        test: /\.jsx$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};