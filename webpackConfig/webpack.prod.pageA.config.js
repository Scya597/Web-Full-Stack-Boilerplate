const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const loaders = require('./webpack.loaders');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: [
      './client/index/index-pageA.js',
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../public/pageA'),
    publicPath: '',
  },
  devtool: 'source-map',
  module: {
    loaders,
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/template.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'client/assets/img', to: 'assets/img' },
    ]),
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      options: {
        postcss: [
          autoprefixer({
            browsers: ['last 2 version', 'Explorer >= 10', 'Android >= 4'],
          }),
        ],
      },
    }),
  ],
};
