const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Blogs route')
})

module.exports = router