const express = require('express')
const userAuthRouter = express.Router()
const userAuthController = require('../controllers/userAuth/userAuthController')
const verifyToken = require('../middlewares/authMiddleware')

const authRoute = '/v1/auth'

userAuthRouter.post(
    authRoute + '/register',
    userAuthController.userRegistration,
)
userAuthRouter.post(authRoute + '/login', userAuthController.userLogin)
userAuthRouter.get(authRoute + '/logout', userAuthController.userLogout)
module.exports = userAuthRouter
