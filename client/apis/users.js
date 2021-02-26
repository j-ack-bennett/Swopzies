import request from 'superagent'

const baseUrl = '/api/v1/users'

export function getUserById (id) {
  return request
  .get(baseUrl)
  .send(id)
  .then(res => {
    return res.body
  })
}
