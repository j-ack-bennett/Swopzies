
exports.up = (knex) => {
  return knex.schema.table('listings', table => {
    table.string('image_url')
  })
}

exports.down = (knex) => {
  return knex.schema.table('listings', table => {
    table.dropColumn('image_url')
  })
}
