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
            username: 'admin',
            password: 'Krang',
            first_name: 'Admin',
            last_name: 'Istrator',
            email: 'admin@admin.co.nz',
            bio: 'I am your admin baby!',
            location: 'Wellington',
            image: '',
            phone: 5556678
          },
          {
            id: 2,
            username: 'lionelR',
            password: 'threetimesalady',
            first_name: 'Lionel',
            last_name: 'Ritchie',
            email: 'lionel@ritchie.co.nz',
            bio: 'Hello! It\'s me your looking for',
            location: 'Aukland',
            image: '',
            phone: 5556678
          },
          {
            id: 3,
            username: 'gertrude',
            password: 'imold',
            first_name: 'Gertrude',
            last_name: 'McGertrudeface',
            email: 'gertrude@yahoo.co.nz',
            bio: 'I\'m 80 and I\'m going to die soon',
            location: 'Wellington',
            image: '',
            phone: 5556678
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
