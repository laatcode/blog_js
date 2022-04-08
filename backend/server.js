require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const routes = require('./routes/routes')
const dbConnect = require('./db/config').connect

app.get('/', (req, res) => res.send('Server running'))
dbConnect()
routes(app)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
