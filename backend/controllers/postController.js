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
        .then(id => {
            resolve({id, ...post})
        })
        .catch(error => {
            console.error(`postController: ${error}`)
            reject(`Ha ocurrido al crear el post`)
        })
})

const updatePost = (id, post) => new Promise((resolve, reject) => {
    if(!id) {
        return reject('Es necesario indicar el id del post')
    } else if(!post.title && !post.content) {
        return reject(`Ha ocurrido un error al actualizar el post ${id}, por favor valide los datos e intente nuevamente`)
    }
    const dateTime = new Date()
    const postUpdated = {
        ...post,
        id,
        updated_at: dateTime
    }

    postDB.updatePost(postUpdated)
        .then(result => {
            if(result.changedRows === 1) {
                resolve(`Post ${id} actualizado con éxito`)
            } else {
                reject(`Ha ocurrido un error al actualizar el post ${id}, por favor valide los datos e intente nuevamente`)
            }
        })
        .catch(error => {
            console.error(`postController: ${error}`)
            reject('Ha ocurrido un error al actualizar el post')
        })
})

const deletePost = (id) => new Promise((resolve, reject) => {
    if(!id) {
        return reject('Es necesario indicar el id del post')
    }
    
    postDB.deletePost(id)
        .then(result => {
            if(result.affectedRows === 1) {
                resolve(`Post ${id} eliminado con éxito`)
            } else {
                resolve(`Post ${id} no existe`)
            }
        })
        .catch(error => {
            console.error(`postController: ${error}`)
            reject('Ha ocurrido un error al eliminar el post')
        })
})

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}