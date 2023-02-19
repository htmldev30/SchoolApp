const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserSchema = new mongoose.Schema({
    accountType: {
        type: String,
        require: true,
    },
    associatedUsersInformation: [
        {
            associatedUserFullName: {
                associatedUserFirstName: {
                    type: String,
                    default: null,
                },
                associatedUserLastName: {
                    type: String,
                    default: null,
                },
            },
            associatedUserGrade: {
                type: Number,
                default: null,
            },
            associatedUser: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                default: null,
            },
        },
    ],
    fullName: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    jwtToken: {
        type: String,
    },
})

UserSchema.pre('save', async function (next) {
    // Implement Later
    next()
})

const User = mongoose.model('User', UserSchema)
module.exports = User
