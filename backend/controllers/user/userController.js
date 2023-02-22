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
        const { userEmail } = req.body
        const user = await userModel.findOne({ email: userEmail })

        // returns all users, user is associated with (i.e all students of a parent)
        if (user.associatedUsers.length > 0) {
            associatedUsers = await userModel.find(
                { _id: user.associatedUsers },
                {
                    _id: 1, // 1 include, 0 don't include
                    fullName: 1,
                    email: 1,
                    profilePicture: 1,
                },
            )
        }
        console.log(associatedUsers)
        res.status(200).json(associatedUsers)
    } catch (err) {
        res.status(500).send({
            error: err.message,
        })
    }
}
