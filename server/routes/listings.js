const express = require("express")
const db = require("../db/listings")
const router = express.Router()

module.exports = router

//Get all listings
router.get("/listings", (req,res) => {
  db.getListings()
    .then((listings) => {
      res.json(listings)
    })
    .catch((err) => {
    console.log(err)
    res.status(500).json({ message: 'Something went wrong'})
  })
})
