exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('listings_tags').del()
      .then(function () {
        // Inserts seed entries
        return knex('listings_tags').insert([
          { id: 1, listing_id: 1, tag_id: 28 },
          { id: 2, listing_id: 2, tag_id: 30 },
          { id: 3, listing_id: 3, tag_id: 6 },
          { id: 4, listing_id: 4, tag_id: 28},
          { id: 5, listing_id: 5, tag_id: 25 },
          { id: 6, listing_id: 6, tag_id: 23 }
        ])
      })
  }