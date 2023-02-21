const express = require('express')
const verifyToken = require('../middlewares/authMiddleware')
const userRouter = express.Router()
const userController = require('../controllers/user/userController')
userRouter.post('/getMyUserInfo', verifyToken, userController.getMyUserInfo)
userRouter.post(
    '/getAssociatedUsersInfo',
    verifyToken,
    userController.getAssociatedUsersInfo,
)

module.exports = userRouter
