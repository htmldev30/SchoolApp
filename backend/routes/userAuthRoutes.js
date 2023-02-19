const express = require('express')
const userAuthRouter = express.Router()
const userAuthController = require('../controllers/userAuth/userAuthController')

userAuthRouter.post('/register', userAuthController.userRegistration)
userAuthRouter.post('/login', userAuthController.userLogin)
userAuthRouter.get('/logout', userAuthController.userLogout)
module.exports = userAuthRouter
