const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { uuid } = require('uuidv4')
const userModel = require('../../models/userSchema')

const saltRounds = 10 //required by bcrypt

exports.userRegistration = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body
        let hashedPassword = await bcrypt.hash(password, saltRounds)
        const user = new userModel({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            uuid: uuid(),
        })
        await user.save()
        return res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err)
    }
}
