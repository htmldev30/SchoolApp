const express = require('express')
const userAssociateRouter = express.Router()
// Customs
const verifyToken = require('../middlewares/authMiddleware')
const userAssociateController = require('../controllers/userAssociate/userAssociateController')

userAssociateRouter.post(
    '/getAssociationRequests',
    verifyToken,
    userAssociateController.getAssociationRequests,
)
userAssociateRouter.post(
    '/requestAssociation',
    verifyToken,
    userAssociateController.requestAssociation,
)
userAssociateRouter.put(
    '/verifyAssociation',
    verifyToken,
    userAssociateController.verifyAssociation,
)
module.exports = userAssociateRouter
