exports.seed = function (knex) {
  return knex('users_listings').del()
    .then(function () {
      return knex('users_listings').insert([
        { id:1, listing_id: 1, user_id: 2 }
      ])
    })
}