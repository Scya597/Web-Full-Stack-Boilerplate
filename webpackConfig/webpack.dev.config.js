const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const loaders = require('./webpack.loaders');

const hotMiddlewareScript = 'webpack-hot-middleware/client';

module.exports = {
  entry: {
    bundle: [
      hotMiddlewareScript,
      './client/index/index.js',
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/',
  },
  devtool: 'eval',
  module: {
    loaders,
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './client/template.html',
      filename: 'index.html',
    }),
    new DashboardPlugin(),
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
