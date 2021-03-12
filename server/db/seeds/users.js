const { generateHash } = require('authenticare/server')


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(
        [
          {
            id: 1,
            username: 'LionelR',
            password: 'test',
            first_name: 'Lionel',
            last_name: 'Richie',
            email: 'lionelR@mail.co.nz',
            bio: 'Hello! It\'s me your looking for!',
            location: 'Wellington',
            image: '',
            phone: 0270000000,
            is_admin: true
          },
          {
            id: 2,
            username: 'Tereska',
            password: 'test',
            first_name: 'Tereska',
            last_name: 'Thorne',
            email: 'tereska@mail.co.nz',
            bio: 'Love my 5 cats, and so does my husband despite his allergies ;)',
            location: 'Wellington',
            image: '',
            phone: 0210000000
          },
          {
            id: 3,
            username: 'Melinda',
            password: 'test',
            first_name: 'Melinda',
            last_name: 'Machin',
            email: 'melinda@mail.co.nz',
            bio: 'Lover of music, sing-song, fantastic books, and my whanau.',
            location: 'Nelson',
            image: '',
            phone: 0220000000
          },
          {
          id: 4,
          username: 'Michelle',
          password: 'test',
          first_name: 'Michelle',
          last_name: 'Yeoh',
          email: 'michelle@mail.co.nz',
          bio: 'Community is important to me, and I love helping out.',
          location: 'Canterbury',
          image: '',
          phone: 0220000000
        },
        {
          id: 5,
          username: 'Tane',
          password: 'test',
          first_name: 'Tane',
          last_name: 'Burke',
          email: 'tane@mail.co.nz',
          bio: 'There\'s no "I" in team, but there is a "T" in team and a "T" in Tane.',
          location: 'Auckland',
          image: '',
          phone: 0250000000
        },
        {
          id: 6,
          username: 'Pedro',
          password: 'test',
          first_name: 'Pedro',
          last_name: 'Wood',
          email: 'pedro@mail.co.nz',
          bio: 'Hi everyone!',
          location: 'Wellington',
          image: '',
          phone: 0220000000
        }

        ].map(user => {
          return generateHash(user.password)
            .then(hash => {
              user.hash = hash
              delete user.password
              return user
            })
        }))
        .then(users => {
          return knex('users').insert(users)
        })
    })
}
