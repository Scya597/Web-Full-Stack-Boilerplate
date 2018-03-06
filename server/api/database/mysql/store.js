const knex = require('knex')(require('./knexfile'));
const crypto = require('crypto');

function randomString() {
  return crypto.randomBytes(4).toString('hex');
}

function saltHashPassword({
  password,
  salt = randomString(),
}) {
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password);
  return {
    salt,
    hash: hash.digest('hex'),
  };
}

module.exports = {

  createUser({ username, password, res }) {
    console.log('Creating User...');
    this.checkUserExistByUsername({ username })
      .then(({ success }) => {
        if (!success) {
          const { salt, hash } = saltHashPassword({ password });
          return knex('User').insert({
            username,
            encrypted_password: hash,
            salt,
          })
            .then(() => {
              res.send('mySQL User Created');
              console.log('mySQL User Created');
            });
        } else {
          res.send('mySQL User Already Existed');
          console.log('mySQL User Already Existed');
          return { success: false };
        }
      });
  },

  checkUserExistByUsername({ username }) {
    console.log('Checking Username');
    return knex('User').where({ username })
      .then((user) => {
        if (user.length !== 0) {
          return { success: true };
        }
        return { success: false };
      });
  },

  authenticateUser({ username, password, res }) {
    let userExist = false;
    let passwordPass = false;
    return knex('User').where({ username })
      .then(([user]) => {
        if (!user) {
          console.log('User doesn\'t exists.');
        } else {
          userExist = true;
          // hash password
          const { hash } = saltHashPassword({
            password,
            salt: user.salt,
          });
          // matching password's hash
          if (hash === user.encrypted_password) {
            passwordPass = true;
            console.log('Success.');
          } else {
            console.log('Wrong password.');
          }
        }
      })
      .then(() => {
        if (userExist && passwordPass) {
          res.send('Login Success');
        } else {
          res.send('Login Failed');
        }
      });
  },
};
