
exports.up = function(knex) {
    return knex.schema.createTable('comms', table => {
        table.increments('id').primary()
        table.integer('listing_id')
        table.integer('user_id')
        table.string('text')
        table.timestamp('time')
        table.integer('thread_id')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('comms')
};

