const db = require('../db/config').db

const getPosts = () =>
    db.connection.execute('SELECT * FROM posts')
        .then(rows => rows[0])

const createPost = post => 
    db.connection.query('INSERT INTO posts SET ?', post)
        .then(result => result[0].insertId)

module.exports = {
    getPosts,
    createPost
}