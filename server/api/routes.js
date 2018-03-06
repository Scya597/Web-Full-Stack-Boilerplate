import {
  sqlCreate,
  sqlAuthenticate,
  sqlCheck,
} from './controllers/controller-sql';

import UsersController from './controllers/controller-mongo';

import { apiConfig } from '../../apiConfig';

const routes = (app, environment) => {
  /* mysql's routes */
  if (environment.mysql) {
    app.post(apiConfig.sqlCreate, sqlCreate);
    app.post(apiConfig.sqlAuthenticate, sqlAuthenticate);
    app.post(apiConfig.sqlCheck, sqlCheck);
  }

  /* mongodb's routes */
  if (environment.mongodb) {
    app.post(apiConfig.mongoPost, UsersController.create);
    app.put(apiConfig.mongoPut, UsersController.edit);
    app.delete(apiConfig.mongoDelete, UsersController.delete);
    app.get(apiConfig.mongoGetAll, UsersController.getusers);
    app.get(apiConfig.mongoGet, UsersController.getuser);
  }
};

export default routes;
