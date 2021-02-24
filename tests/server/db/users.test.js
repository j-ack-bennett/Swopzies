const testDb = require('./connection')
const users = require('../../../server/db/users')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

test('createUser inserts a single user', () => {
  let expected = 1

  return users.createUser({ username: 'new_user', password: 's3cr3t', first_name: 'New', last_name: 'User' }, testDb)
    .then(ids => {
      let actual = ids.length

      expect(actual).toEqual(expected)
    })
})

test('userExists finds existing user', () => {
  let expected = true

  return users.userExists('admin', testDb)
    .then(result => {
      let actual = result

      expect(actual).toEqual(expected)
    })
})

test('userExists does not find non-existant user', () => {
  let expected = false

  return users.userExists('not-a-username', testDb)
    .then(result => {
      let actual = result

      expect(actual).toEqual(expected)
    })
})

test('getUserByUsername finds existing user', () => {
  let expected = 'Admin'

  return users.getUserByUsername('admin', testDb)
    .then(user => {
      let actual = user.first_name

      expect(actual).toEqual(expected)
    })
})
