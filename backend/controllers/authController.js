const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const userDB = require('../db/userDB')

const login = (email, password) => new Promise((resolve, reject) => {
    try {
        userDB.loginData(email)
            .then(async data => {
                if(!data) {
                    return reject({
                        message: 'Usuario y/o contraseña incorrecta.',
                        status: 401
                    })
                } else {
                    const authorized = await bcrypt.compare(password, data.password)
        
                    if(authorized) {
                        const token = jwt.sign({id: data.id}, process.env.JWT_SECRET, {
                            expiresIn: '1d'
                        })

                        return resolve({
                            token
                        })
                    } else {
                        return reject({
                            message: 'Usuario y/o contraseña incorrecta.',
                            status: 401
                        })
                    }
                }
            }).catch(() => {
                reject({
                    message: 'Ha ocurrido un error inesperado.',
                    status: 500
                })
            })
    } catch (error) {
        reject({
            message: 'Ha ocurrido un error inesperado.',
            status: 500
        })
    }
})

module.exports = {
    login
}