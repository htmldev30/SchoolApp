require('dotenv').config()
import express from 'express'
import { registerSchool } from '../../controller/faculty/facultyController'
const facultyRouter = express.Router()

facultyRouter.post('/registerSchool', registerSchool)

export default facultyRouter
