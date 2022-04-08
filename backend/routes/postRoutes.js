const router = require('express').Router()
const controller = require('../controllers/postController')
const response = require('../response')

router.get('/', (req, res) => {
    controller.getPosts()
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, error))
})

router.post('/', (req, res) => {
    controller.createPost(req.body.title, req.body.content)
        .then(post => response.success(req, res, post))
        .catch(error => response.error(req, res, error))
})

module.exports = router