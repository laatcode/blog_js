const postRoutes = require('./postRoutes')

const routes = server => {
    server.use('/blogs', postRoutes)
}

module.exports = routes