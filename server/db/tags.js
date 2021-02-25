const connection = require('./connection')

function getTags(db = connection) {
    return db('tags')
        .select()
}

module.exports = {
    getTags
}