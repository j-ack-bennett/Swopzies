const express = require("express")
const router = express.Router()

const { 
        addNewComm, 
        getCommsForListing,
        checkThreadId,
        addThreadId
       } = require('../db/comms')

router.get('/:listingId', (req, res) => {
  const listingId = req.params.listingId
  getCommsForListing(listingId)
    .then(comms => {
      res.json(comms)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  const newComm = req.body
  let commentId
  addNewComm(newComm)
    .then(commId => {
      commentId = commId
      console.log(commId)
      checkThreadId(commId)
      .then(thing => {
          if(!thing) {
            return addThreadId(commentId)
              .then(() => {
                res.sendStatus(200)
                return null
              })
          } else {
            res.sendStatus(200)
            return null
          }
        })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router