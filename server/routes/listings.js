const express = require("express")
const db = require("../db/listings")
const router = express.Router()
const { addNewListing, addNewListingTag, getListingById, deleteById, updateListing } = require("../db/listings")

module.exports = router

//Get all listings
router.get("/", (req, res) => {
  db.getListings()
    .then((listings) => {
      res.json(listings)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post("/", (req, res) => {
  console.log(req.body)
  // let newListing = {user_id: null, type: req.body.type, title: req.body.title, description: req.body.description, image: "", time: null}
  const newListing = req.body.listing
  const tagId = req.body.tagId
  return addNewListing(newListing)
    .then(listingId => {
      console.log(listingId)
      addNewListingTag(listingId, tagId)
        .then(() => {
          res.sendStatus(200)
          return null 
        })
    })
})

router.get("/:id", (req, res) => {
  const id = req.params.id
  getListingById(id)
    .then(listing => {
      res.json(listing)
    })
})

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  deleteById(id)
    // console.log(id)
    .then(() => {
      res.json({})
    })
})

router.patch("/:id", (req, res) => {
  const id = req.params.id
  updateListing(id, req.body)
    .then((listing) => {
      res.json(listing)
    })
})

router.get("/tagId", (req, res) => {
  const id = req.body
  getListingsByTagId(id)
  .then((listings) => {
    res.json(listings)
    })
})