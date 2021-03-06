const db = require('../db/config').db

const getPosts = () =>
    db.connection.query('SELECT * FROM posts ORDER BY created_at desc')
        .then(rows => rows[0])

const createPost = post => 
    db.connection.query('INSERT INTO posts SET ?', post)
        .then(result => result[0].insertId)

const updatePost = post =>
    db.connection.query('UPDATE posts SET ? WHERE id = ?', [post, post.id])
        .then(result => result[0])

const deletePost = id =>
    db.connection.query('DELETE FROM posts WHERE id = ?', id)
        .then(result => result[0])

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}