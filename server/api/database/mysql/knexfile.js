/**
 * 1. Create a database in SequelPro named 'testSQLdb'.
 * 2. Run 'knex migrate:make {your table name}' in terminal.
 * 3. Create your own schema in the migration file and save it.
 * 4. Run 'knex migrate:latest'
 */

module.exports = {
  client: 'mysql',
  connection: {
    user: 'root',
    password: 'password',
    database: 'testSQLdb',
  },
};
