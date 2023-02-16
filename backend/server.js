const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const Router = require('./routes/routes')
const verifyToken = require('./middlewares/authMiddleware')
const app = express()
app.use(cors())
app.use(express.json())

//#region Mongo Connection
// Dev Note: DO NOT USE 'localhost" instead use following below
mongoose.connect('mongodb://127.0.0.1:27017/schoolapp', {
    useNewUrlParser: true,
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error '))
db.once('open', () => {
    console.log('Connection Successful')
})
//#endregion

app.use(Router)

app.get('/', (req, res) => {
    res.status(200).send('Welcome. You Are Authenticated')
})
app.listen(process.env.PORT, () => {
    console.log(`Working on port: ${process.env.PORT}`)
})
