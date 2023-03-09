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
