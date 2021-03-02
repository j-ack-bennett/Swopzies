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
                    upload: false,
                    time: '2021-03-01T21:45:14.382Z'
                },
                {
                    id: 2,
                    user_id: 2,
                    type: 'offer',
                    title: 'Let me sing for you',
                    description: 'I can\'t sing that great, but I\'m offereing to sing songs for anyone who wishes, available only on the 25th december',
                    upload: false,
                    time: '2021-03-01T21:45:14.382Z'
                },
                {
                    id: 3,
                    user_id: 3,
                    type: 'looking',
                    title: 'Fix my deck',
                    description: 'Looking for a handy person to help me fix a deck, I\'m offering organic bean milk in return',
                    upload: false,
                    time: '2021-03-01T21:45:14.382Z'
                },
                {
                    id: 4,
                    user_id: 3,
                    type: 'offer',
                    title: 'massage training',
                    description: 'I\'m offering massages to people as part of my training to reach enlightenment, in retunr I would hope to get some homemade moonshine, but am open to other bootleg goods such as crude oil or fraudulant election ballots',
                    upload: false,
                    time: '2021-03-01T21:45:14.382Z'
                },
                {
                    id: 5,
                    user_id: 2,
                    type: 'looking',
                    title: 'need a dog walker',
                    description: 'I\'m in need of a dog walker this coming weekend for both days. I\'m going away, but can\'t take my dog with me unfortunately. His name is Charles and he\'s a 10 year old English bulldog. I have a batch of preserved fruits and home-made kombucha to give in return. Thanks!',
                    upload: false,
                    time: '2021-03-01T21:45:14.382Z'
                },
                {
                    id: 6,
                    user_id: 1,
                    type: 'offer',
                    title: 'pottery skills',
                    description: 'I have a pottery studio at home which I have just finished renovating. I would love to teach people some pottery skills in return for home baked goods. Anything is good for me, whether it\'s a loaf of bread or home brew. Just want to share my knowledge with the community!',
                    upload: false,
                    time: '2021-03-01T21:45:14.382Z'
                },
            ])
        })
}
