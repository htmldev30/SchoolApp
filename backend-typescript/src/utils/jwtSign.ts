require('dotenv').config()
import jwt from 'jsonwebtoken'
import { Types } from 'mongoose'

const JWT_SECRET_KEY: string | any = process.env.JWT_SECRET_KEY

interface IJWTPayload {
    accountType: string
    username: string
    user_id: Types.ObjectId
}

export const jwtSign = (jwtPayload: IJWTPayload) => {
    const jwtToken = jwt.sign(
        {
            accountType: jwtPayload.accountType,
            username: jwtPayload.username,
            user_id: jwtPayload.user_id,
        },
        JWT_SECRET_KEY,
        {
            expiresIn: '2h',
        },
    )
    return jwtToken
}
