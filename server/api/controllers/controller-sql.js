import store from '../database/mysql/store';

const sqlCreate = (req, res) => {
  store.createUser({
    username: req.body.username,
    password: req.body.password,
    res,
  });
};

const sqlAuthenticate = (req, res) => {
  store.authenticateUser({
    username: req.body.username,
    password: req.body.password,
    res,
  });
};

const sqlCheck = (req, res) => {
  store.checkUserExistByUsername({
    username: req.body.username,
  })
    .then(({ success }) => {
      console.log(success);
      if (success) {
        console.log('mySQL User Exists');
        res.send('mySQL User Exists');
      } else {
        console.log('mySQL User does not exists');
        res.send('mySQL User does not exists');
      }
    });
};

export {
  sqlCreate,
  sqlAuthenticate,
  sqlCheck,
};
