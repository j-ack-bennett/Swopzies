const express = require('express')
const path = require('path')

const authRoutes = require('./routes/auth')
const listingsRoutes = require('./routes/listings')
const tagRoutes = require('./routes/tags')
const commRoutes = require('./routes/comms')

const server = express()

server.use(express.json())
server.use(express.static(path.join('server', 'public')))

server.use('/api/v1', authRoutes)
server.use('/api/v1/listings', listingsRoutes)
server.use('/api/v1/tags', tagRoutes)
server.use('/api/v1/comms', commRoutes)

module.exports = server
