import Post from '../models/Post';

module.exports = {

  create(req, res, next) {
    const postProps = req.body;

    Post.create(postProps)
      .then(post => res.send(post))
      .catch(next);
  },

  edit(req, res, next) {
    const postId = req.params.id;
    const postProps = req.body;

    Post.findByIdAndUpdate({ _id: postId }, postProps)
      .then(() => Post.findById({ _id: postId }))
      .then(post => res.send(post))
      .catch(next);
  },

  delete(req, res, next) {
    const postId = req.params.id;

    Post.findByIdAndRemove({ _id: postId })
      .then(post => res.status(204).send(post))
      .catch(next);
  },

  getposts(req, res, next) {
    Post.find({})
      .then(posts => res.send(posts))
      .catch(next);
  },

  getpost(req, res, next) {
    const postId = req.params.id;
    Post.findOne({ _id: postId })
      .then(post => res.send(post))
      .catch(next);
  },
};
