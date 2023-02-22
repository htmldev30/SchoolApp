const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../../models/userSchema')

const saltRounds = 10 //required by bcrypt

// Code Adapted from https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
// Author: Idris Olubisi
exports.userRegistration = async (req, res) => {
    try {
        // firstName, lastName info sent separately from frontend
        const { accountType, fullName, email, password } = req.body
        const lowerCasedEmail = email.toLowerCase()
        const userExists = await userModel.exists({ email: lowerCasedEmail })
        if (userExists) {
            return res
                .status(409)
                .send(
                    'A User Is Already Associated With This Email. Please Login',
                )
        }

        let hashedPassword = await bcrypt.hash(password, saltRounds)

        const user = new userModel({
            accountType: accountType,
            fullName: {
                firstName: fullName.firstName,
                lastName: fullName.lastName,
            },
            email: lowerCasedEmail,
            password: hashedPassword,
        })

        user.profilePicture = `https://api.dicebear.com/5.x/initials/svg?seed=${fullName.firstName}`

        // Information being stored in JWT Token
        const jwtToken = jwt.sign(
            { user_id: user._id, lowerCasedEmail, accountType },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '2h',
            },
        )

        user.jwtToken = jwtToken

        user.save((err, res) => {
            err
                ? console.log('Error: ', err)
                : console.log('Result: User Registration Successful')
        })
        console.log(user.associatedUsers)
        res.status(201).json({
            accountType: user.accountType,
            fullName: {
                firstName: user.fullName.firstName,
                lastName: user.fullName.lastName,
            },
            email: user.email,
            userProfile: user.profilePicture,
            associatedUsers: user.associatedUsers,
            jwtToken: user.jwtToken,
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            throw new Error('Please input both fields.')
        }
        // Finds existing user via email
        const lowerCasedEmail = email.toLowerCase()
        const user = await userModel.findOne({ email: lowerCasedEmail })
        if (!user) {
            throw new Error(
                'A user associated with this email/password does not exist.',
            )
        }
        // Compares given password with hashed password / await it
        const passwordValid = await bcrypt.compare(password, user.password)
        if (user && passwordValid) {
            const jwtToken = jwt.sign(
                { user_id: user._id, email },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '2h' },
            )
            user.jwtToken = jwtToken
            user.save((err, res) => {
                err
                    ? console.log('Error: ', err)
                    : console.log('Result: Login Successful')
            })

            res.status(201).json({
                accountType: user.accountType,
                fullName: {
                    firstName: user.fullName.firstName,
                    lastName: user.fullName.lastName,
                },
                email: user.email,
                userProfile: user.profilePicture,
                associatedUsers: user.associatedUsers,
                jwtToken: user.jwtToken,
            })
        }
    } catch (err) {
        res.status(500).send({
            error: err.message,
        })
    }
}

exports.userLogout = async (req, res) => {
    try {
        res.status(200).send('You are now logged out.')
    } catch (err) {
        res.status(500).send({
            error: err.message,
        })
    }
}
