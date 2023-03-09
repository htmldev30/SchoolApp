require('dotenv').config()
import express from 'express'
import { updateUserInfo } from '../controller/user/userController'

import { verifyToken } from '../middleware/authMiddleware'
const userRouter = express.Router()
import { multerUpload } from '../utils/multerUpload'

userRouter.post(
    '/updateUserInfo',
    verifyToken,
    multerUpload.single('avatar'), // uploaded form field name must be 'avatar
    updateUserInfo,
)

export default userRouter
