require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const routes = require('./routes/routes')

app.get('/', (req, res) => res.send('Server running'))
routes(app)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
