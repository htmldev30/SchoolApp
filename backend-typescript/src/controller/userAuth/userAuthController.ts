require('dotenv').config()
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import userModel from '../../models/userSchema'
import { getErrorMessage } from '../../utils/errorMessage'
import {
    IUserAuthRes,
    IUserRegistrationReqBody,
    IUserLoginReqBody,
} from '../../utils/interfaces/userAuthInterfaces'
import { jwtSign } from '../../utils/jwtSign'
import schoolModel from '../../models/schoolSchema'

export const userRegistration = async (req: Request, res: Response) => {
    try {
        const {
            accountType,
            grade,
            fullName,
            email,
            password,
            joinCode,
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

        const school = await schoolModel.findOne({ joinCode: joinCode })
        if (!school) {
            return res.status(404).send({
                message: 'Could not find a school to associate with.',
            })
        }
        if (accountType == 'student' && !grade) {
            return res.status(404).send({
                message: 'A student account must have a grade level.',
            })
        }
        if (accountType == 'teacher' && grade) {
            return res.status(404).send({
                message: 'A teacher account cannot have a grade level.',
            })
        }
        if (accountType == 'parent' && grade) {
            return res.status(404).send({
                message: 'A parent account cannot have a grade level.',
            })
        }
        const user = new userModel({
            accountType: accountType,
            grade: grade ? grade : null,
            fullName: {
                firstName: fullName.firstName,
                lastName: fullName.lastName,
            },
            email: lowerCasedEmail,
            password: password,
            school: school._id, // in case school is null
        })

        // Information being stored in JWT Token
        user.jwtToken = jwtSign({
            accountType: user.accountType,
            username: lowerCasedEmail.slice(0, lowerCasedEmail.indexOf('@')),
            user_id: user._id,
        })

        await user.save() // await so field invalid errors get returned
        const userAuthRes: IUserAuthRes = {
            accountType: user.accountType,
            grade: user.grade,
            fullName: {
                firstName: user.fullName.firstName,
                lastName: user.fullName.lastName,
            },
            username: user.username,
            email: user.email,
            avatarName: user.avatarName,
            associatedUsers: user.associatedUsers,
            school: user.school,
            jwtToken: user.jwtToken,
        }
        res.status(201).json(userAuthRes)
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
            user.jwtToken = jwtSign({
                accountType: user.accountType,
                username: user.username,
                user_id: user._id,
            })

            await user.save()
            const userAuthRes: IUserAuthRes = {
                accountType: user.accountType,
                grade: user.grade,
                fullName: {
                    firstName: user.fullName.firstName,
                    lastName: user.fullName.lastName,
                },
                username: user.username,
                email: user.email,
                avatarName: user.avatarName,
                associatedUsers: user.associatedUsers,
                school: user.school,
                jwtToken: user.jwtToken,
            }
            res.status(201).json(userAuthRes)
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
