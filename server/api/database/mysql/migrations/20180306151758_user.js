
exports.up = function (knex) {
  return knex.schema.createTable('User', function (t) {
    t.increments('id').primary();
    t.string('username').notNullable();
    t.string('encrypted_password').notNullable();
    t.string('salt').notNullable();
    t.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('User');
};
