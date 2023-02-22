const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    accountType: {
        type: String,
        require: true,
    },
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
    profilePicture: {
        default: 'https://api.dicebear.com/5.x/initials/svg?seed=Felix',
        type: String,
    },
    associatedUsers: [],
})

UserSchema.pre('save', async function (next) {
    // Implement Later
    next()
})

const User = mongoose.model('User', UserSchema)
module.exports = User
