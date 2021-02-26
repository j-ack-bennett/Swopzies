const express = require("express")
const router = express.Router()

const { addNewComm } = require('../db/comms')

router.post('/', (req, res) => {
  const newComm = req.body
  addNewComm(newComm)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router