const path = require('path');
const webpack = require('webpack');

const hotMiddlewareScript = 'webpack-hot-middleware/client';
const reactHotLoaderScript = 'react-hot-loader/patch';

module.exports = {
  entry: {
    bundle: [
      hotMiddlewareScript,
      reactHotLoaderScript,
      './src/index.js',
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/bundle'),
    publicPath: '/public/bundle/',
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
