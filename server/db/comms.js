const connection = require('./connection')

function addNewComm(newComm, db = connection) {
  return db("comms")
    .insert(newComm)
    .then(ids => ids[0])
}

function getCommsForListing(listingId, db = connection) {
  return db('comms')
  .where('listing_id', listingId)
  .join('users', 'comms.user_id', 'users.id')
  .select('comms.*', 'users.username')
}

module.exports = {
  addNewComm,
  getCommsForListing
}
