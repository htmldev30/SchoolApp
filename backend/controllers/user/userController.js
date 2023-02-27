require('dotenv').config()
const userModel = require('../../models/userSchema')
// AWS
const S3Client = require('../../S3Client')
const avatarBucketName = process.env.AWS_AVATAR_BUCKET_NAME
// UUID
const { v4: uuidv4 } = require('uuid')

exports.getMyUserInfo = async (req, res) => {
    try {
        const { myUserEmail } = req.body
        const user = await userModel.findOne({ email: myUserEmail })
        const avatarUrl = await S3Client.getFileUrlFromBucket(
            avatarBucketName,
            user.avatar, // the randomImageName
        )

        res.status(200).json({
            accountType: user.accountType,
            fullName: {
                firstName: user.fullName.firstName,
                lastName: user.fullName.lastName,
            },
            email: user.email,
            avatarUrl: avatarUrl,
        })
    } catch (err) {
        res.status(500).send({
            error: err.message,
        })
    }
}

exports.changeUserInfo = async (req, res) => {
    try {
        const { userEmail } = req.body
        const randomImageName = uuidv4()
        const putFileInBucket = await S3Client.putFileInBucket(
            avatarBucketName,
            randomImageName,
            req.file.buffer,
            req.file.mimetype,
        )
        const user = await userModel.findOneAndUpdate(
            { email: userEmail },
            { avatar: randomImageName },
        )
        user.save()
        res.send('Changes to user profile made.')
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
        associatedUsersTemp = []
        if (user.associatedUsers.length > 0) {
            associatedUsers = await userModel.find({
                _id: user.associatedUsers,
            })
            for (i = 0; i < associatedUsers.length; i++) {
                try {
                    const associatedUserAvatarUrl =
                        await S3Client.getFileUrlFromBucket(
                            avatarBucketName,
                            associatedUsers[i].avatar,
                        ) //avatar (uuid) is used as key
                    // only return these values
                    associatedUsersTemp.push({
                        _id: associatedUsers[i]._id,
                        fullName: associatedUsers[i].fullName,
                        email: associatedUsers[i].email,
                        avatarUrl: associatedUserAvatarUrl,
                    })
                } catch (err) {
                    // if user doesnt have avatar in bucket
                }
            }
        } else {
            throw new Error(
                'You are not associated with a student. Connect Today!',
            )
        }
        res.status(200).json(associatedUsersTemp)
    } catch (err) {
        res.status(500).send({
            error: err.message,
        })
    }
}
