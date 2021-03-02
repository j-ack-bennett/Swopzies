
exports.up = function(knex) {
  return knex.schema.createTable('users_listings',
  table => {
    table.increments('id').primary()
    table.integer('listing_id')
    table.integer('user_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users_listings')
};
