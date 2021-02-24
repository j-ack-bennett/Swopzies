const knex = require('knex')
const config = require('../../knexfile').test

module.exports = {
  // Return a database connection for the test database
  getTestDb: () => knex(config),

  // Create a separate in-memory database before each test
  initialise: db => db.migrate.latest()
    .then(() => db.seed.run()),

  // Close the database connection after each test
  cleanup: db => db.destroy()
}
