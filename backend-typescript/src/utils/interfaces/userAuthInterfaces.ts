import { Types } from 'mongoose'

export interface IUserRegistrationReqBody {
    accountType: 'parent' | 'student' | 'teacher'
    grade?: 9 | 10 | 11 | 12 | null
    fullName: {
        firstName: string
        lastName: string
    }
    email: string
    password: string
    joinCode: string
}

export interface IUserAuthRes {
    accountType: 'parent' | 'student' | 'teacher'
    grade?: 9 | 10 | 11 | 12 | any // TODO: i dont think its good to have type 'any' change later!
    fullName: {
        firstName: string
        lastName: string
    }
    username: string
    email: string
    avatarName: string
    associatedUsers: Types.ObjectId[] //
    school: Types.ObjectId
    jwtToken: string
}

export interface IUserLoginReqBody {
    username: string
    password: string
}
