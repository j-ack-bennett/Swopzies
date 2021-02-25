const express = require('express')
const router = express.Router()

const { getTags } = require('../db/tags')


router.get('/', (req, res) => {
    getTags()
        .then(tags => {
            res.json(tags)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something went wrong'})
        })
})

module.exports = router
