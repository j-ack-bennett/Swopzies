const knex = require('knex')
const config = require('../../../knexfile')
const env = 'test'
const connection = knex(config[env])

module.exports = connection
