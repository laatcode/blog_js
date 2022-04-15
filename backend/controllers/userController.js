const userDB = require('../db/userDB')
const bcrypt = require('bcryptjs')

const createUser = (email, password, fullname) => new Promise(async (resolve, reject) => {

    const dateTime = new Date()
    const salt = await bcrypt.genSalt(10)
    
    const user = {
        email,
        password: await bcrypt.hash(password, salt),
        fullname,
        created_at: dateTime,
        updated_at: dateTime
    }

    userDB.createUser(user)
        .then(id => {
            delete(user.password)
            resolve({id, ...user})
        })
        .catch(error => {
            console.error(`userController: ${error}`)
            reject('Ha ocurrido un error al crear el usuario')
        })
})

module.exports = {
    createUser
}