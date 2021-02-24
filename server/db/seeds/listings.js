exports.seed = function (knex) {
    return knex('listings').del()
        .then(() => {
            return knex ('listings').insert([
                {
                    id: 1,
                    user_id: 1,
                    type: 'looking',
                    title: 'Looking for a way out',
                    description: 'After someone to assist me in breaking the chains of the matrix',
                    image: '',
                    time: null
                },
                {
                    id: 2,
                    user_id: 2,
                    type: 'offer',
                    title: 'Let me sing for you',
                    description: 'I can\'t sing that great, but I\'m offereing to sing songs for anyone who wishes, available only on the 25th december',
                    image: '',
                    time: null
                },
                {
                    id: 3,
                    user_id: 3,
                    type: 'looking',
                    title: 'Fix my deck',
                    description: 'Looking for a handy person to help me fix a deck, I\'m offering organic bean milk in return',
                    image: '',
                    time: null
                },
                {
                    id: 4,
                    user_id: 3,
                    type: 'offer',
                    title: 'massage training',
                    description: 'I\'m offering massages to people as part of my training to reach enlightenment, in retunr I would hope to get some homemade moonshine, but am open to other bootleg goods such as crude oil or fraudulant election ballots',
                    image: '',
                    time: null
                },
            ])
        })
}