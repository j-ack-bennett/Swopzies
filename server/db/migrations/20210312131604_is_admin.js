exports.up = function(knex) {
    return knex.schema.table('users', table => {
        table.boolean('is_admin')
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.table('users', table => {
          table.dropColumn('is_admin')
      })
  };
  
