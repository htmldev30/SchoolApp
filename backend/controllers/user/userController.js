const userModel = require('../../models/userSchema')

exports.getMyUserInfo = async (req, res) => {
    try {
        const { myUserEmail } = req.body
        res.status(200).send('YOUVE RECAHED getMyUserInfo endpoint')
    } catch (err) {
        res.status(500).send({
            error: err.message,
        })
    }
}

exports.getAssociatedUsersInfo = async (req, res) => {
    try {
        const { myUserEmail } = req.body
        res.status(200).send('YOUVE REACHED getAssociatedUsersInfo endpoint')
    } catch (err) {
        res.status(500).send({
            error: err.message,
        })
    }
}
