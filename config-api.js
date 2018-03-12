const apiConfig = {
  /* mysql's API */
  sqlCreate: '/api/sql/Create',
  sqlAuthenticate: '/api/sql/Authenticate',
  sqlCheck: '/api/sql/Check',
  /* mongodb's API */
  mongoPost: '/api/mongo/users',
  mongoPut: '/api/mongo/users/:id',
  mongoDelete: '/api/mongo/users/:id',
  mongoGetAll: '/api/mongo/users',
  mongoGet: '/api/mongo/users/:id',
};

const environment = {
  mysql: true,
  mongodb: true,
  socketio: true,
};

export {
  apiConfig,
  environment,
};
