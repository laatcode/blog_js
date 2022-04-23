const db = require('../db/config').db

const createUser = user =>
    db.connection.query('INSERT INTO users SET ?', user)
        .then(result => result[0].insertId)

const loginData = email =>
    db.connection.query('SELECT id, password FROM users WHERE email = ?', [email])
        .then(result => result[0][0])

module.exports = {
    createUser,
    loginData
}