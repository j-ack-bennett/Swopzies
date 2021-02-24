const config = require("./knexfile").development;
const connection = require("knex")(config);

module.exports = {
  getListings,
}

function getListings(db = connection) {
  // console.log(listings)
  return db("listings")
    .select();
    
}