exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username')
    table.string('hash')
    table.string('first_name')
    table.string('last_name')
    table.string('email')
    table.string('bio')
    table.string('location')
    table.string('image')
    table.string('phone')
    table.timestamps(true,true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
