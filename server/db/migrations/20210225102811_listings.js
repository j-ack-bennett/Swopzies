
exports.up = function(knex) {
    return knex.schema.createTable('listings', table => {
        table.increments('id').primary()
        table.integer('user_id')
        table.string('type')
        table.string('title')
        table.string('description', 1000)
        table.string('image')
        table.timestamp('time')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('listings')
};
