const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),

  mode: "development",

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },

  resolve: {
    extensions: ['.ts']
  },

  module: {
    rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },
};