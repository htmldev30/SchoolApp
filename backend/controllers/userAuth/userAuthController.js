const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const userModel = require('../../models/userSchema')

const saltRounds = 10 //required by bcrypt

// Code Adapted from https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/
// Author: Idris Olubisi
exports.userRegistration = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body
        const userExists = userModel.exists({ email: email.toLowerCase() })
        if (userExists) {
            return res
                .status(409)
                .send(
                    'A User Is Already Associated With This Email. Please Login',
                )
        }

        let hashedPassword = await bcrypt.hash(password, saltRounds)
        const user = new userModel({
            firstName: firstName,
            lastName: lastName,
            email: email.toLowerCase(),
            password: hashedPassword,
        })

        // Information being stored in JWT Token
        const jwtToken = jwt.sign(
            { user_id: user._id, email },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '2h',
            },
        )

        user.jwtToken = jwtToken
        await user.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(500).send(err)
    }
}

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!(email && password)) {
            res.status(400).send('Please input both fields.')
        }
        // Finds existing user via email
        const user = await userModel.findOne({ email: email.toLowerCase() })
        // Compares given password with hashed password
        const passwordValidation = bcrypt.compare(password, user.password)

        if (user && passwordValidation) {
            const jwtToken = jwt.sign(
                { user_id: user._id, email },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '2h' },
            )
            user.jwtToken = jwtToken
            user.save()
            res.status(200).json(user)
        }
    } catch (err) {
        console.log(err)
    }
}
