exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('tags').del()
      .then(function () {
        // Inserts seed entries
        return knex('tags').insert([
          { id: 1,  tag_name: 'Building' },
          { id: 2,  tag_name: 'Plumbing' },
          { id: 3,  tag_name: 'Food' },
          { id: 4,  tag_name: 'Animals' },
          { id: 5,  tag_name: 'Teaching' },
          { id: 6,  tag_name: 'Music' },
          { id: 7,  tag_name: 'Cooking' },
          { id: 8,  tag_name: 'Removals' },
          { id: 9,  tag_name: 'Trailer' },
          { id: 10, tag_name: 'Beer' },
          { id: 11, tag_name: 'Baking' },
          { id: 12, tag_name: 'Dog walking' },
          { id: 13, tag_name: 'Pet-sitting' },
          { id: 14, tag_name: 'House-sitting' },
          { id: 15, tag_name: 'Fitness' },
          { id: 16, tag_name: 'Gardening' },
          { id: 17, tag_name: 'Plants' },
          { id: 18, tag_name: 'Electrical' },
          { id: 19, tag_name: 'Marine' },
          { id: 20, tag_name: 'Painting' },
          { id: 21, tag_name: 'Automotive' },
          { id: 22, tag_name: 'Babysitting' },
          { id: 23, tag_name: 'Art/crafts' },
          { id: 24, tag_name: 'Housework' },
          { id: 25, tag_name: 'Repairs and maintenance' },
          { id: 26, tag_name: 'Wellbeing'},
          { id: 27, tag_name: 'Organic'},
          { id: 28, tag_name: 'Photography'},
          { id: 29, tag_name: 'Home-brewing'},
          { id: 30, tag_name: 'Other'}



        ])
      })
  }