const express = require('express')
const verifyToken = require('../middlewares/authMiddleware')
const userController = require('../controllers/user/userController')
const userRouter = express.Router()
// Multer
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })
// End Of Sam Meech-Ward's Code

userRouter.post('/getMyUserInfo', verifyToken, userController.getMyUserInfo)
userRouter.post(
    '/getAssociatedUsersInfo',
    verifyToken,
    userController.getAssociatedUsersInfo,
)
userRouter.put(
    '/changeUserInfo',
    verifyToken,
    upload.single('avatar'),
    userController.changeUserInfo,
)
module.exports = userRouter
