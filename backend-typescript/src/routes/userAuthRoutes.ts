require('dotenv').config()
import express from 'express'
import {
    userRegistration,
    userLogin,
    protectedTestRoute,
} from '../controller/userAuth/userAuthController'
import { verifyToken } from '../middleware/authMiddleware'
const userAuthRouter = express.Router()

userAuthRouter.post('/register', userRegistration)
userAuthRouter.post('/login', userLogin)
userAuthRouter.get('/', verifyToken, protectedTestRoute)

export default userAuthRouter
