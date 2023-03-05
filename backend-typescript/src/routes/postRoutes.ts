import express from 'express'
import { createPost } from '../controller/post/postController'

import { verifyToken } from '../middleware/authMiddleware'
import { filterUnauthorizedPostersAccountTypeMiddleware } from '../middleware/accountTypeMiddleware'
const postRouter = express.Router()

postRouter.post(
    '/',
    verifyToken,
    filterUnauthorizedPostersAccountTypeMiddleware,
    createPost,
)

export default postRouter
