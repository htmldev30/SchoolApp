import { Types } from 'mongoose'

export interface IUserRegistrationReqBody {
    accountType: 'parent' | 'student' | 'teacher'
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
    grade: number | null
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
    email: string
    password: string
}
