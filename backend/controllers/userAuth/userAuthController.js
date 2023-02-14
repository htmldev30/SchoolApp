const userModel = require('../../models/userSchema')

exports.userRegistration = async (req, res) => {
    const user = new userModel(req.body)
    try {
        await user.save()
        res.send(user)
    } catch (err) {
        res.status(500).send(err)
    }
}
