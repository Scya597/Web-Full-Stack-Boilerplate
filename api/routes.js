import PostsController from './controllers/posts_controller';

module.exports = (server) => {
  server.post('/api/posts', PostsController.create);
  server.put('/api/posts/:id', PostsController.edit);
  server.delete('/api/posts/:id', PostsController.delete);
  server.get('/api/posts', PostsController.getposts);
  server.get('/api/posts/:id', PostsController.getpost);
};
