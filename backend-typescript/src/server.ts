require('dotenv').config()
import express, { Application, Response, Request } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
// Routes
import userAuthRouter from './routes/userAuthRoutes'
// Initializations
const app: Application = express()
app.use(cors())
app.use(express.json())
//#region Mongo Connection
mongoose.connect('mongodb://127.0.0.1:27017/educonnect')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error '))
db.once('open', () => {
    console.log('MongoDB Connection Successful')
})
//#endregion

app.use('/v1/auth', userAuthRouter)

const PORT: any = process.env.PORT
const SERVER: any = process.env.SERVER
app.listen(PORT, () => {
    console.log(
        `Server is listening on ${process.env.SERVER}:${process.env.PORT}`,
    )
})
