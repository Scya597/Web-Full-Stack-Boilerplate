const apiConfig = {
  /* mysql's API */
  sqlCreate: '/api/sql/Create',
  sqlAuthenticate: '/api/sql/Authenticate',
  sqlCheck: '/api/sql/Check',
  /* mongodb's API */
  mongoPost: '/api/mongo/posts',
  mongoPut: '/api/mongo/posts/:id',
  mongoDelete: '/api/mongo/posts/:id',
  mongoGetAll: '/api/mongo/posts',
  mongoGet: '/api/mongo/posts/:id',
};

const environment = {
  mysql: true,
  mongodb: true,
  socketio: false,
};

export {
  apiConfig,
  environment,
};
