const postDB = require('../db/postDB')

const getPosts = () => new Promise(async (resolve, reject) => {
    postDB.getPosts()
        .then(data => resolve(data))
        .catch(error => {
            console.error(`postController: ${error}`)
            reject(`Ha ocurrido un error al obtener los posts`)
        })
})

const createPost = (title, content) => new Promise((resolve, reject) => {
    if(!title || !content) {
        reject('Datos incompletos')
    }

    dateTime = new Date()

    const post = {
        title,
        content,
        created_at: dateTime,
        updated_at: dateTime
    }

    postDB.createPost(post)
        .then(post_id => {
            resolve({post_id, ...post})
        })
        .catch(error => {
            console.error(`postController: ${error}`)
            reject(`Ha ocurrido al crear el post`)
        })
})

module.exports = {
    getPosts,
    createPost
}