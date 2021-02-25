const config = require("./knexfile").development;
const connection = require("knex")(config);

module.exports = {
  getListings,
  addNewListing,
  getListingById,
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

function getListingById(id, db = connection) {
  return db("listings")
    .where("id", id)
    .then(listing => listing[0])
}