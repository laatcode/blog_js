const router = require('express').Router()
const controller = require('../controllers/userController')
const response = require('../response')

router.post('/', (req, res) => {
    controller.createUser(req.body.email, req.body.password, req.body.fullname)
        .then(result => response.success(req, res, result, 201))
        .catch(error => response.error(req, res, error))
})

module.exports = router