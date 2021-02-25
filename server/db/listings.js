const config = require("./knexfile").development;
const connection = require("knex")(config);

module.exports = {
  getListings,
  addNewListing,
}

function getListings(db = connection) {
  // console.log(listings)
  return db("listings")
    .select(); 
}

function addNewListing(newListing, db = connection) {
  return db("listings")
    .insert(newListing)
    .then(ids => ids[0])
}