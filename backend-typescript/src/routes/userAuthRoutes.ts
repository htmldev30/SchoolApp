require('dotenv').config()
import express from 'express'
import {
    userRegistration,
    userLogin,
    userLogout,
} from '../controller/userAuth/userAuthController'
import { verifyToken } from '../middleware/authMiddleware'
const userAuthRouter = express.Router()

userAuthRouter.post('/register', userRegistration)
userAuthRouter.post('/login', userLogin)
userAuthRouter.get('/logout', verifyToken, userLogout)

export default userAuthRouter
