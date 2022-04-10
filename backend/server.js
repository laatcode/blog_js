require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const routes = require('./routes/routes')
const dbConnect = require('./db/config').connect

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.get('/', (req, res) => res.send('Server running'))
app.use(express.json())
dbConnect()
routes(app)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
