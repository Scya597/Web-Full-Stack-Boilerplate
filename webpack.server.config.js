const path = require('path');

module.exports = {
  entry: {
    bundle: [
      './server/server.js',
    ],
  },
  output: {
    filename: 'server.js',
    path: path.join(__dirname, 'public'),
    publicPath: '',
  },
  devtool: 'source-map',
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
    ],
  },
};
