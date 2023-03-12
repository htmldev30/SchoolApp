require('dotenv').config()
import express from 'express'
import {
    registerSchool,
    checkSchoolJoinCode,
} from '../../controller/faculty/facultyController'
const facultyRouter = express.Router()

facultyRouter.post('/registerSchool', registerSchool)
facultyRouter.post('/checkSchoolJoinCode', checkSchoolJoinCode)

export default facultyRouter
