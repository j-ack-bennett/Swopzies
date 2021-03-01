const knex = require("knex")
const config = require("./knexfile")
const env = process.env.NODE_ENV || "development"
console.log(env)
console.log(config[env])
const connection = knex(config[env])

module.exports = connection
