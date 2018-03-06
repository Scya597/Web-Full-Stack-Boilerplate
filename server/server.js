import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import config from './config';
import routes from './api/routes';
import { environment } from '../config-api';
import ioActivate from './io-setting';

const app = express();
/**
 * Switch between webpack Development & Production mode.
 *
 * To use Development mode, you'll have to run 'npm run dev' script in terminal. We use
 * webpackDevMiddleware and webpackHotMiddleware to run the project, and it only excute
 * 'App.js', which currently contains PageA, PageB, PageC, PageIO currently. If you are not
 * developing backend routing feature, it is prefered to develop in Development mode. If you
 * want to add more frontend pages to test in Development mode, you should modify 'App.js'
 * and add more pages inside it.
 *
 * To use Production mode, you'll have to run 'npm run build' first, and then run 'npm start'
 * in terminal. It'll build all the frontend bundle file into a folder called 'public', and build
 * the server into a folder called 'private'. 'npm start' will execute the compiled server in
 * 'private' folder, which routes to all the frontend pages in 'public' folder.
 * If you've only modified a specific frontend pages after building, ex: 'PageA.js', you can run
 * 'npm run build:pageA' to rebuild it independently instead of rebuilding all pages.
 * Detailed scripts can be found at 'package.json'.
*/
if (process.env.NODE_ENV === 'dev') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const webpackDevConfig = require('../webpackConfig/webpack.dev.config.js');
  const compiler = webpack(webpackDevConfig);
  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath,
    stats: { colors: true },
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
} else {
  app.use(express.static('public'));
  app.get('/', (req, res) => {
    /* We use redirect because sendFile is not working here (why?) */
    res.redirect('/pageA');
    // res.sendFile(path.join(__dirname, 'public/pageA/index.html'));
  });
  app.get('/PageA', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pageA/index.html'));
  });
  app.get('/PageB', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pageB/index.html'));
  });
  app.get('/PageC', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pageC/index.html'));
  });
  app.get('/PageIO', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/pageIO/index.html'));
  });
}

if (environment.mongodb) {
  const mongoose = require('mongoose');
  mongoose.Promise = global.Promise;
  if (process.env.NODE_ENV !== 'test') {
    /* To run mongodb, you'll have to type 'mongob' in terminal */
    const dbName = 'users';
    mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/${dbName}`);
  }
}

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
  next();
});

/**
 * Setting up API's function routing used by frontend.
*/
routes(app, environment);

if (environment.socketio) {
  const http = require('http');
  const server = http.createServer(app);
  const io = require('socket.io')(server);
  ioActivate(io);
  /* Run the app in config.port, which is 8080 currently */
  server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
    console.log(process.env.NODE_ENV);
  });
} else {
  /* Run the app in config.port, which is 8080 currently */
  app.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
    console.log(process.env.NODE_ENV);
  });
}

