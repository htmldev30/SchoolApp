import { Types } from 'mongoose'

export interface IPostReqBody {
    title: string
    description: string
}

export interface IPostRes {
    title: string
    description: string
    imageName?: string // imageName will be the random image name
    creator: Types.ObjectId
}
