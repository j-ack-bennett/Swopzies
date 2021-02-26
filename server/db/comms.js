const connection = require('./connection')

function addNewComm(newComm, db = connection) {
  return db("comms")
    .insert(newComm)
    .then(ids => ids[0])
}


module.exports = {
  addNewComm
}
