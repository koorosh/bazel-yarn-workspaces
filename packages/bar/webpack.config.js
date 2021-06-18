const path = require('path');
console.log("path: " + path.resolve(__dirname))

module.exports = {
  entry: [path.resolve(__dirname, 'src', 'index.ts')],

  mode: "development",

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },

  resolve: {
    extensions: ['.ts'],
  },

  module: {
    rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },
};