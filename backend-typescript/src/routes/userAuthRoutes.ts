require('dotenv').config()
import express from 'express'
import {
    userRegistration,
    userLogin,
    protectedTestRoute,
} from '../controller/userAuthController'
import { verifyToken } from '../middleware/authMiddleware'
const userAuthRouter = express.Router()

userAuthRouter.post('/register', userRegistration)
userAuthRouter.post('/login', userLogin)
userAuthRouter.get('/', verifyToken, protectedTestRoute)

// userAuthRouter.post('/register', userAuthController.userLogout)

export default userAuthRouter
