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
  const userId = req.user.id
  console.log(user)
  updateUser(userId, req.body)
    .then((user) => {
      res.json(user)
    })
})


module.exports = router
