exports.seed = function (knex) {
    return knex('comms').del()
        .then(() => {
            return knex('comms').insert([
                { 
                    id: 1, 
                    listing_id: 6,
                    user_id: 2,
                    text: 'Hi Pedro! I\'ve always been interested in learning pottery and I can cook the best pierogies around! I\'m only free on the weekends, does that work?',
                    time: null,
                    thread_id: 1
                }
            ])
        })
}