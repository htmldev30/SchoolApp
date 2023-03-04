require('dotenv').config()
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import userModel from '../models/userSchema'
import { getErrorMessage } from '../utils/errorMessage'

const JWT_SECRET_KEY: string | any = process.env.JWT_SECRET_KEY

interface IUserRegistrationReqBody {
    accountType: string
    fullName: {
        firstName: string
        lastName: string
    }
    email: string
    password: string
}
interface IUserRegistrationResBody {
    accountType: string
    fullName: {
        firstName: string
        lastName: string
    }
    email: string
    password: string
    associatedUsers: []
    jwtToken: string
}
interface IUserLoginReqBody {
    email: string
    password: string
}
export const userRegistration = async (req: Request, res: Response) => {
    try {
        const {
            accountType,
            fullName,
            email,
            password,
        }: IUserRegistrationReqBody = req.body
        const lowerCasedEmail: string = email.toLowerCase()
        // check if a user already exists
        const userExists = await userModel.exists({ email: lowerCasedEmail })
        if (userExists) {
            return res.status(409).send({
                message:
                    'A user is already association with this email. Please Login.',
            })
        }

        const user = new userModel({
            accountType: accountType,
            fullName: {
                firstName: fullName.firstName,
                lastName: fullName.lastName,
            },
            email: lowerCasedEmail,
            password: password,
        })

        // Information being stored in JWT Token
        const jwtToken = jwt.sign(
            {
                accountType: accountType,
                email: lowerCasedEmail,
                user_id: user._id,
            },
            JWT_SECRET_KEY,
            {
                expiresIn: '2h',
            },
        )
        user.jwtToken = jwtToken
        user.save()
        res.status(201).json({
            accountType: user.accountType,
            fullName: {
                firstName: user.fullName.firstName,
                lastName: user.fullName.lastName,
            },
            email: user.email,
            associatedUsers: user.associatedUsers,
            jwtToken: user.jwtToken,
        })
    } catch (error) {
        res.status(500).send(getErrorMessage(error))
    }
}

export const userLogin = async (req: Request, res: Response) => {
    try {
        const { email, password }: IUserLoginReqBody = req.body
        if (!(email && password)) {
            throw new Error('Please input both fields.')
        }
        // Find existing user via email
        const lowerCasedEmail: string = email.toLowerCase()
        const user = await userModel.findOne({ email: lowerCasedEmail })
        if (!user) {
            throw new Error(
                'A user associated with this email/password does not exist.',
            )
        }

        const passwordValid = await bcrypt.compare(password, user.password)
        if (passwordValid) {
            const jwtToken = jwt.sign(
                {
                    accountType: user.accountType,
                    email: user.email,
                    user_id: user._id,
                },
                JWT_SECRET_KEY,
                {
                    expiresIn: '2h',
                },
            )
            user.jwtToken = jwtToken
            user.save()
            res.status(201).json({
                accountType: user.accountType,
                fullName: {
                    firstName: user.fullName.firstName,
                    lastName: user.fullName.lastName,
                },
                email: user.email,
                associatedUsers: user.associatedUsers,
                jwtToken: user.jwtToken,
            })
        } else {
            throw new Error('Your credentials are incorrect.')
        }
    } catch (error) {
        res.status(500).send(getErrorMessage(error))
    }
}

// Req type is CustomRequest because it includes the jwt payload
export const protectedTestRoute = async (req: Request, res: Response) => {
    try {
        //res.send(req.user)
        res.send(req.user)
    } catch (error) {
        res.status(500).send(getErrorMessage(error))
    }
}
