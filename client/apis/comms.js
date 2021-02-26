import request from 'superagent'

const baseUrl = '/api/v1/comms/'

export function getCommsforListing(listingId) {
  request.get(baseUrl + listingId)
    .then(res => res.body)
}

export function postNewComment(newComment) {
  request.post(baseUrl)
    .send(newComment)
    .then(res => res.body) 
}
