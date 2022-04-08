const db = require('../db/config').db

const getPosts = () => new Promise(async (resolve, reject) => {
    try {
        const [rows] = await db.connection.execute('SELECT * FROM posts')
        resolve(rows)
    } catch (error) {
        console.error(`postController: ${error}`)
        reject(`Ha ocurrido un error al obtener los posts`)
    }
})

module.exports = {
    getPosts
}