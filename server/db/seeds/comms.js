exports.seed = function (knex) {
    return knex('comms').del()
        .then(() => {
            return knex('comms').insert([
                { 
                    id: 1, 
                    listing_id: 4,
                    user_id: 2,
                    text: 'Hello, is it me you\'re looking for?',
                    time: null
                }
            ])
        })
}