const { resolve } = require('path');
const webpackValidator = require('webpack-validator');
const { getIfUtils } = require('webpack-config-utils');

module.exports = (env) => {
  const { ifProd, ifNotProd } = getIfUtils(env);
  const config = webpackValidator({
    context: resolve('src'),
    entry: './index.js',
    output: {
      filename: 'bundle.js',
      path: resolve('public'),
      publicPath: '/public/',
      pathinfo: ifNotProd(),
    },
    devtool: ifProd('source-map', 'eval'),
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
  });
  return config;
};
