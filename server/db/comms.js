const connection = require('./connection')

function addNewComm(newComm, db = connection) {
  return db("comms")
    .insert(newComm)
    .then(ids => ids[0])
}

function getCommsForListing(listingId, db = connection) {
  return db('comms')
    .select()
    .where('listing_id', listingId)
}

module.exports = {
  addNewComm,
  getCommsForListing
}
