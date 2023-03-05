import mongoose, { Schema, Types } from 'mongoose'

interface IPost {
    title: string
    description: string
    imageName?: string
    creator: Types.ObjectId
}

const postSchema = new mongoose.Schema<IPost>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    imageName: {
        type: String,
        required: false,
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
})

const postModel = mongoose.model<IPost>('Post', postSchema)

export default postModel
