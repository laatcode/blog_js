const db = require('../db/config').db

const createUser = user =>
    db.connection.query('INSERT INTO users SET ?', user)
        .then(result => result[0].insertId)

module.exports = {
    createUser
}