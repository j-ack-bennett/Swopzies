exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('tags').del()
      .then(function () {
        // Inserts seed entries
        return knex('tags').insert([
          { id: 1,  tag_name: 'building' },
          { id: 2,  tag_name: 'plumbing' },
          { id: 3,  tag_name: 'food' },
          { id: 4,  tag_name: 'animals' },
          { id: 5,  tag_name: 'teaching' },
          { id: 6,  tag_name: 'music' },
          { id: 7,  tag_name: 'cooking' },
          { id: 8,  tag_name: 'removals' },
          { id: 9,  tag_name: 'trailer' },
          { id: 10, tag_name: 'beer' },
          { id: 11, tag_name: 'baking' },
          { id: 12, tag_name: 'dog walking' },
          { id: 13, tag_name: 'pet sitting' },
          { id: 14, tag_name: 'house sitting' },
          { id: 15, tag_name: 'fitness' },
          { id: 16, tag_name: 'garden' },
          { id: 17, tag_name: 'plants' },
          { id: 18, tag_name: 'electrical' },
          { id: 19, tag_name: 'marine' },
          { id: 20, tag_name: 'painting' },
          { id: 21, tag_name: 'automotive' },
          { id: 22, tag_name: 'antiques' },
          { id: 23, tag_name: 'art' },
          { id: 24, tag_name: 'housework' },
          { id: 25, tag_name: 'handy work' },
    
        ])
      })
  }