
eexports.up = function(knex) {
    return knex.schema.createTable('listings_tags', table => {
        table.increments('id').primary()
        table.integer('listing_id')
        table.integer('tag_id')
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('listings_tags')
};
