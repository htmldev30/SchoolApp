const express = require('express')
const userAuthRouter = express.Router()
const userAuthController = require('../controllers/userAuth/userAuthController')

const authRoute = '/v1/auth'

userAuthRouter.post(
    authRoute + '/register',
    userAuthController.userRegistration,
)
userAuthRouter.post(authRoute + '/login', userAuthController.userLogin)
module.exports = userAuthRouter
