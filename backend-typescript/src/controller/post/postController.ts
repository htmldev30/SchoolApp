require('dotenv').config()
import { Request, Response } from 'express'
import postModel from '../../models/postSchema'
import { getErrorMessage } from '../../utils/errorMessage'
import { IPostReqBody } from '../../utils/postInterfaces'
import { putFileInBucket } from '../../s3Client'
import { getUUID } from '../../utils/randomValues'
const postImageBucketName: any = process.env.AWS_POST_IMAGE_BUCKET_NAME

export const createPost = async (req: Request, res: Response) => {
    try {
        const { title, description }: IPostReqBody = req.body
        const file = req.file
        const randomFileName: string = getUUID()

        if (file) {
            await putFileInBucket(
                postImageBucketName,
                randomFileName,
                file.buffer,
                file.mimetype,
            )
        }
        const post = new postModel({
            title: title,
            description: description,
            imageName: randomFileName,
            creator: req.user.user_id,
        })

        await post.save()
        res.send('New Post Created')
    } catch (error) {
        res.status(500).send(getErrorMessage(error))
    }
}
