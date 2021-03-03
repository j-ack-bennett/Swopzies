exports.seed = function (knex) {
    return knex('listings').del()
        .then(() => {
            return knex ('listings').insert([
                {
                    id: 1,
                    user_id: 1,
                    type: 'looking',
<<<<<<< HEAD
                    title: 'Looking for a way out',
                    description: 'After someone to assist me in breaking the chains of the matrix',
                    upload: false,
=======
                    title: 'Photographer wanted',
                    description: 'Performing at the upcoming village festival and I want an amazing photographer to capture the essence of my performance. Please prepare your portfolio so I know you have experience of taking good photos. Note that I prefer to be photographed only on my right side, which is my best side. In return I\'ll capture your best side by immortalising you in an oil painting for all the ages.',
                    image: '',
>>>>>>> c21777724b2445749adaff8ee2cd6026085dc30f
                    time: '2021-03-01T21:45:14.382Z'
                },
                {
                    id: 2,
                    user_id: 2,
<<<<<<< HEAD
                    type: 'offer',
                    title: 'Let me sing for you',
                    description: 'I can\'t sing that great, but I\'m offereing to sing songs for anyone who wishes, available only on the 25th december',
                    upload: false,
                    time: '2021-03-01T21:45:14.382Z'
=======
                    type: 'looking',
                    title: 'Need catering/waiting assistance',
                    description: 'Hosting my friend\'s baby shower next Saturday and the guest list is 20+ people. I\'m going to need some help keeping guests well fed and with clean-up afterward. I expect 4-6 hours. In exchange I can offer my services as seamstress, baby-sitter, or cook you beautiful Polish food with plenty of pierogi!',
                    image: '',
                    time: '2021-02-21T13:20:14.382Z'
>>>>>>> c21777724b2445749adaff8ee2cd6026085dc30f
                },
                {
                    id: 3,
                    user_id: 3,
<<<<<<< HEAD
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
=======
                    type: 'offer',
                    title: 'Singing lessons',
                    description: 'Local teacher with 20+ years\' experience with music, choirs, stage productions etc. I\'m offering to teach you how to sing. In exchange, I\'d love to be paid in good books, or even a home-made bird feeder to add to lovely big garden.',
                    image: '',
                    time: '2021-03-02T14:45:14.382Z'
                },
                {
                    id: 4,
                    user_id: 4,
                    type: 'looking',
                    title: 'Moving',
                    description: 'I\'m moving house and need some help. I\'ve got the truck hired, boxes are packed, just need some help on the day. Heaviest item is my California King Bed, so you do need to be strong! In exchange I can offer 10 free Personal Training sessions with me.',
                    image: '',
                    time: '2021-03-01T08:00:14.382Z'
                },
                {
                    id: 5,
                    user_id: 5,
                    type: 'offer',
                    title: 'General handyman stuff',
                    description: 'I\'m your friendly neighbourhood repairman. Can help with repairs and maintenance. Lots of experience and got my own tools. Hit me up! Always need a hand in my organic vege patch, or keen to learn about home-brewing.',
                    image: '',
                    time: '2021-02-20T21:45:14.382Z'
>>>>>>> c21777724b2445749adaff8ee2cd6026085dc30f
                },
                {
                    id: 6,
                    user_id: 6,
                    type: 'offer',
                    title: 'pottery skills',
<<<<<<< HEAD
                    description: 'I have a pottery studio at home which I have just finished renovating. I would love to teach people some pottery skills in return for home baked goods. Anything is good for me, whether it\'s a loaf of bread or home brew. Just want to share my knowledge with the community!',
                    upload: false,
                    time: '2021-03-01T21:45:14.382Z'
=======
                    description: 'I have a pottery studio at home which have just finished renovating. Would love to teach people some pottery skills in return for home made goods. Anything is good for me, whether it\'s a loaf of bread or home brew. Just want to share my knowledge with the community!',
                    image: '',
                    time: '2021-03-01T22:00:14.382Z'
>>>>>>> c21777724b2445749adaff8ee2cd6026085dc30f
                },
            ])
        })
}
