import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import apiRouter from './api/routes';

const path = require('path');

const server = express();

if (process.env.NODE_ENV === 'dev') {
  server.use(express.static('public'));
  server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  // const router = express.Router();
  // const webpackMiddleware = require('webpack-dev-middleware');
  // const webpack = require('webpack');
  // const webpackConfig = require('../webpack.config.js');
  // const compiler = webpack(webpackConfig);
  // server.use(webpackMiddleware(compiler, {
  //   publicPath: webpackConfig.output.publicPath,
  //   stats: { colors: true },
  // }));
  // server.set('view engine', 'ejs');
  // router.get('/', (req, res) => res.render('index'));
  // server.use(router);
  // server.listen(config.port, config.host, () => {
  //   console.info('Express listening on port', config.port);
  //   console.log(process.env.NODE_ENV);
  // });
} else {
  server.use(express.static('public'));
  server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
}

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/blog');
}

server.use(bodyParser.json());

apiRouter(server);
server.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
  next();
});

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
  console.log(process.env.NODE_ENV);
});
