const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')

const { userExists, getUserByUsername, createUser,  updateUser } = require('../db/users')
const { getTokenDecoder } = require('authenticare/server/token')

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName: getUserByUsername,
  createUser
})

router.patch("/profile", getTokenDecoder(), (req, res) => {
  const user = req.user
  console.log(user)
  updateUser(req.user.id, req.body)
    .then((user) => {
      res.json(this.user)
    })
})


module.exports = router
