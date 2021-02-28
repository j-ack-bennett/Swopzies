import request from "superagent"

const baseUrl = "/api/v1/listings"

export function getListings() {
  return request.get(baseUrl).then((res) => {
    return res.body
  })
}

export function postListing(data) {
  console.log("hello from the Api")
  return request
    .post(baseUrl)
    .send(data)
    .then((res) => res.body)
}

export function getListingsByTagId(tagId) {
  return request
    .get(baseUrl + "/tagId")
    .send(tagId)
    .then((res) => {
      return res.body
    })
}

export function delListing(id) {
  return request
    .del(baseUrl + '/' + id)
    .then((res) => {
      return res.body
    })
}

export function addBookmark(ids) {
  return request
  .post(baseUrl + '/bookmark')
  .send(ids)
  .then((res) => {res.body})
}

export function deleteBookmark(id) {
 
}
