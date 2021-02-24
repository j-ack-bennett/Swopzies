exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('listings_tags').del()
      .then(function () {
        // Inserts seed entries
        return knex('listings_tags').insert([
          { id: 1, listing_id: 1, tag_id: 5 },
          { id: 2, listing_id: 2, tag_id: 6 },
          { id: 3, listing_id: 3, tag_id: 1 },
          { id: 4, listing_id: 4, tag_id: 26 }
        ])
      })
  }