import request from 'superagent'

const baseUrl = '/api/v1/listings'

export function getListings () {
  return request
  .get(baseUrl)
  .then(res => {
    return res.body
  })
}

export function postListing (data) {
  console.log('hello from the Api')
  return request
    .post(baseUrl)
    .send(data)
    .then(res => res.body)
}

