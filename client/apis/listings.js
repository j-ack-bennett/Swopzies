import request from 'superagent'

const baseUrl = '/api/v1/listings'

export function getListings () {
  return request
  .get(baseUrl)
  .then(res => {
    return res.body
  })
}