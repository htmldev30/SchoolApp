require('dotenv').config()
import { Request, Response } from 'express'
import schoolModel from '../../models/schoolSchema'
import { getErrorMessage } from '../../utils/errorMessage'

interface IRegisterSchoolReqBody {
    name: string
    address: {
        street: string
        city: string
        zip: string
        state: string
        country: string
    }
}
interface ICheckSchoolJoinCodeReqBody {
    schoolJoinCode: string
}
interface ICheckSchoolJoinCodeResBody {
    name: string
    address: {
        street: string
        city: string
        zip: string
        state: string
        country: string
    }
}
export const registerSchool = async (req: Request, res: Response) => {
    try {
        const { name, address }: IRegisterSchoolReqBody = req.body
        const school = new schoolModel({
            name: name,
            address: {
                street: address.street,
                city: address.city,
                zip: address.zip,
                state: address.state,
                country: address.country,
            },
        })
        school.save()
        res.status(200).send('School Registered on EduConnect')
    } catch (error) {
        res.status(500).send(getErrorMessage(error))
    }
}

export const checkSchoolJoinCode = async (req: Request, res: Response) => {
    try {
        const { schoolJoinCode }: ICheckSchoolJoinCodeReqBody = req.body
        const schoolExists = await schoolModel.findOne({
            joinCode: schoolJoinCode,
        })
        if (!schoolExists) {
            throw new Error('Invalid school join code.')
        }
        const schoolInfo: ICheckSchoolJoinCodeResBody = {
            name: schoolExists.name,
            address: {
                street: schoolExists.address.street,
                city: schoolExists.address.city,
                zip: schoolExists.address.zip,
                state: schoolExists.address.state,
                country: schoolExists.address.country,
            },
        }
        res.status(200).send(schoolInfo)
    } catch (error) {
        res.status(500).send({ message: getErrorMessage(error) })
    }
}
