import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

interface IUser {
    accountType: string
    fullName: {
        firstName: string
        lastName: string
    }
    email: string
    password: string
    avatarName: string
    jwtToken: string
    associatedUsers: []
}

const saltRounds = 10
const userSchema = new mongoose.Schema<IUser>({
    accountType: { type: String, required: true },
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
        lowercase: true,
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
    avatarName: {
        default: '',
        type: String,
    },
    associatedUsers: [],
})

userSchema.pre('save', async function (next: Function) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, saltRounds)
    }
    next()
})
const userModel = mongoose.model<IUser>('User', userSchema)

export default userModel
