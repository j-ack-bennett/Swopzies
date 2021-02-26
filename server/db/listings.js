const config = require("./knexfile").development;
const connection = require("knex")(config);

module.exports = {
  getListings,
  addNewListing,
  addNewListingTag,
  getListingById,
  deleteById,
  updateListing,
  getListingsByTagId
}

function getListings(db = connection) {
  // console.log(listings)
  return db("listings")
    .join("users", "users.id", "listings.user_id")
    .join("listings_tags", "listing_id", "listings.id")
    .join("tags", "tags.id", "tag_id")
    .select("*", "listings.id AS id", "tags.id AS tag_id"); 
}

function addNewListing(newListing, db = connection) {
  return db("listings")
    .insert(newListing)
    .then(ids => ids[0])
}

function addNewListingTag(listingId, tagId, db = connection) {
  return db("listings_tags")
    .insert({
      listing_id: listingId,
      tag_id: tagId,
    })
}

function getListingById(id, db = connection) {
  return db("listings")
    .where("id", id)
    .then(listing => listing[0])
}

function deleteById(id, db = connection) {
  return db("listings")
    .where("id", id)
    .delete()
}

function updateListing(id, updatedListing, db = connection) {
  return db("listings")
    .update(updatedListing)
      .where("listings.id", id)
        .then(() => {
          return getListingById(id)
        })
}

function getListingsByTagId(tagId, db=connection) {
  console.log("help")
return db('listings_tags')
.join('listings', 'listing_id', 'listings.id')
.join('tags', 'tags.id','listings_tags.tag_id')
.where('tags.id', tagId)
.select('*', 'listings.id AS id')
}



// function getRecipesWithIngredientsSimpleDoubleJoin(db = connection) {
//   return db('recipes')
//   .join('recipes_ingredients', 'recipes.id', 'recipes_ingredients.recipe_id')
//   .join('ingredients', 'recipes_ingredients.ingredient_id', 'ingredients.id')
//   .select('recipes.name AS recipe_name', '*')
// }