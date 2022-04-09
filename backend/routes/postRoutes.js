const router = require('express').Router()
const controller = require('../controllers/postController')
const response = require('../response')

router.get('/', (req, res) => {
    controller.getPosts()
        .then(posts => response.success(req, res, posts))
        .catch(error => response.error(req, res, error))
})

router.post('/', (req, res) => {
    controller.createPost(req.body.title, req.body.content)
        .then(post => response.success(req, res, post, 201))
        .catch(error => response.error(req, res, error))
})

router.patch('/:id', (req, res) => {
    controller.updatePost(req.params.id, req.body)
        .then(result => response.success(req, res, result))
        .catch(error => response.error(req, res, error))
})

router.delete('/:id', (req, res) => {
    controller.deletePost(req.params.id)
        .then(result => response.success(req, res, result))
        .catch(error => response.error(req, res, error))
})

module.exports = router