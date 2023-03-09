import express from 'express'
import { createPost } from '../controller/post/postController'
import { verifyToken } from '../middleware/authMiddleware'
import { filterUnauthorizedPostersAccountTypeMiddleware } from '../middleware/accountTypeMiddleware'
import { multerUpload } from '../utils/multerUpload'
const postRouter = express.Router()

postRouter.post(
    '/',
    verifyToken,
    filterUnauthorizedPostersAccountTypeMiddleware,
    multerUpload.single('post-image'),
    createPost,
)

export default postRouter
