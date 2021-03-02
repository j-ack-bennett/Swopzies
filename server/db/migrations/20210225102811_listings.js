
exports.up = function(knex) {
    return knex.schema.createTable('listings', table => {
        table.increments('id').primary()
        table.integer('user_id')
        table.text('type')
        table.text('title')
        table.text('description')
        table.text('image')
        table.timestamp('time')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('listings')
};
