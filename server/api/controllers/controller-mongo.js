import User from '../database/mongodb/models/User';

module.exports = {

  create(req, res, next) {
    const userProps = req.body;

    User.create(userProps)
      .then(user => res.send(user))
      .then(() => {
        console.log('mongodb User created');
      })
      .catch(next);
  },

  edit(req, res, next) {
    const userId = req.params.id;
    const userProps = req.body;

    User.findByIdAndUpdate({ _id: userId }, userProps)
      .then(() => User.findById({ _id: userId }))
      .then(user => res.send(user))
      .catch(next);
  },

  delete(req, res, next) {
    const userId = req.params.id;

    User.findByIdAndRemove({ _id: userId })
      .then(user => res.status(204).send(user))
      .catch(next);
  },

  getusers(req, res, next) {
    User.find({})
      .then(users => res.send(users))
      .catch(next);
  },

  getuser(req, res, next) {
    const userId = req.params.id;
    User.findOne({ _id: userId })
      .then(user => res.send(user))
      .catch(next);
  },
};
