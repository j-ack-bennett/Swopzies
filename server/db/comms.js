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


function addThreadId (commId, db = connection) {
  return db('comms')
    .where('id', commId)
    .update({
      thread_id: commId
    })
}

module.exports = {
  addNewComm,
  getCommsForListing,
  addThreadId
}
