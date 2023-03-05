import { Request, Response } from 'express'
import { Types } from 'mongoose'
import postModel from '../../models/postSchema'
import { getErrorMessage } from '../../utils/errorMessage'
import { IPostReqBody } from '../../utils/postInterfaces'

export const createPost = async (req: Request, res: Response) => {
    try {
        const { title, description, imageName }: IPostReqBody = req.body

        const post = new postModel({
            title: title,
            description: description,
            imageName: imageName ? imageName : null,
            creator: req.user.user_id,
        })

        post.save()

        res.send('New Post Created')
    } catch (error) {
        res.status(500).send(getErrorMessage(error))
    }
}
