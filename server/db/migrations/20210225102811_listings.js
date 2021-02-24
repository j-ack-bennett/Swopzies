
exports.up = function(knex) {
    return knex.schema.createTable('listings', table => {
        table.increments('id').primary()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('listings')
};
