const path = require('path');

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
  },
  devtool: 'eval',
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
      },
    ],
  },
};
