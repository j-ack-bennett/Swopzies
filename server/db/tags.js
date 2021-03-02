const connection = require('./connection')

function getTags(db = connection) {
    return db('tags')
        .select()
        .orderBy('tag_name')
}

module.exports = {
    getTags
}