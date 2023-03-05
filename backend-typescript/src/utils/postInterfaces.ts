import { Types } from 'mongoose'

export interface IPostReqBody {
    title: string
    description: string
    imageName?: string
}

export interface IPostRes {
    title: string
    description: string
    imageName?: string
    creator: Types.ObjectId
}
