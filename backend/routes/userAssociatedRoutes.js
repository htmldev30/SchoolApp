const express = require('express')
const userAssociatedRouter = express.Router()
// Customs
const verifyToken = require('../middlewares/authMiddleware')
const userAssociatedController = require('../controllers/userAssociated/userAssociatedController')

userAssociatedRouter.post(
    '/associateUser',
    verifyToken,
    userAssociatedController.associateUser,
)
module.exports = userAssociatedRouter
