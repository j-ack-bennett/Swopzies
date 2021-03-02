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

router.patch(
  "/profile",
  getTokenDecoder(),
  (req, res, next) => {
    const userId = req.user.id
    updateUser(userId, req.body).then(() => {
      next()
    })
  },
  issueToken
)

module.exports = router
