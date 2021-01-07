const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
