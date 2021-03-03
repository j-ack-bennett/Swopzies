const express = require("express")
const { applyAuthRoutes } = require("authenticare/server")

const {
  userExists,
  getUserByUsername,
  createUser,
  updateUser,
} = require("../db/users")
const { getTokenDecoder, getIssuer } = require("authenticare/server/token")
const issueToken = getIssuer(getUserByUsername)

const router = express.Router()

applyAuthRoutes(router, {
  userExists,
  getUserByName: getUserByUsername,
  createUser,
})

router.patch("/profile",  getTokenDecoder(),(req, res, next) => {
    const userId = req.user.id
    const username = req.body.username
    userExists(username)
      .then(bool => {
        if(bool && username !== req.user.username) {
          return res.sendStatus(400)
        } else {
          updateUser(userId, req.body)
            .then(() => {
              next()
          })
        }
      })
  },
  issueToken
)

module.exports = router
