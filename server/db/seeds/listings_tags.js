exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('listing_tags').del()
      .then(function () {
        // Inserts seed entries
        return knex('listing_tags').insert([
          { id: 1, listing_id: 1, tag_id: 1 },
    
        ])
      })
  }