const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const verifyToken = require('./middlewares/authMiddleware')

// Customs
const userAssociatedRouter = require('./routes/userAssociatedRoutes')
const userAuthRouter = require('./routes/userAuthRoutes')

require('dotenv').config()
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
app.use('/v1/auth', userAuthRouter)
app.use('/v1/userAssociated', userAssociatedRouter)

app.get('/', verifyToken, (req, res) => {
    res.status(200).send('Welcome. You Are Authenticated')
})
app.listen(process.env.PORT, process.env.SERVER, () => {
    console.log(`Working on port: ${process.env.PORT}`)
})
