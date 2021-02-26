const express = require("express")
const db = require("../db/users")
const router = express.Router()

module.exports = router

//Get all users
router.get("/", (req, res) => {
  const id = req.body
  db.getUserById(id)
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})
