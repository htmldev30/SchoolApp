const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AssociateRequestSchema = new mongoose.Schema({
    requester: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    recipient: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    status: {
        type: String,
        required: true,
    },
})

const AssociateRequest = mongoose.model('AssociateUser', AssociateRequestSchema)
module.exports = AssociateRequest
