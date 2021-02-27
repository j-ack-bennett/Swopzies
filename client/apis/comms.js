import request from 'superagent'

const baseUrl = '/api/v1/comms/'

export function getCommsforListing(listingId) {
  return request.get(baseUrl + listingId)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log("you fucked up: ", err)
    })
}

export function postNewComment(newComment) {
  return request.post(baseUrl)
    .send(newComment)
    .then(res => res.body) 
}
