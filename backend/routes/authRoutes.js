const router = require('express').Router()
const controller = require('../controllers/authController')
const response = require('../response')

router.post('/login', (req, res) => {
    controller.login(req.body.email, req.body.password)
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, error.message, error.status))
})

module.exports = router