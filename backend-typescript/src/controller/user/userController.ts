require('dotenv').config()
import { Request, Response } from 'express'
import userModel from '../../models/userSchema'
import { putFileInBucket } from '../../s3Client'
import { getErrorMessage } from '../../utils/errorMessage'
import { getUUID } from '../../utils/randomValues'

const avatarBucketName: any = process.env.AWS_AVATAR_BUCKET_NAME
export const updateUserInfo = async (req: Request, res: Response) => {
    try {
        const file = req.file
        const randomFileName: string = getUUID()
        if (file) {
            await putFileInBucket(
                avatarBucketName,
                randomFileName,
                file.buffer,
                file.mimetype,
            )
        }
        const user = await userModel.findOneAndUpdate(
            { _id: req.user.user_id },
            { avatarName: randomFileName },
        )
        await user?.save()
        res.send('Changes made to user profile.')
    } catch (error) {
        res.status(500).send(getErrorMessage(error))
    }
}
