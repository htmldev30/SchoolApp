import React, { createContext, useState, useEffect } from 'react'

// Customs
import { axiosClient } from '../../../axiosClient'
import { getUserInfo } from '../../shared/asyncStorage'

export const AssociatedUsersContext = createContext()

export const AssociatedUsersProvider = (props) => {
    const [associationRequests, setAssociationRequests] = useState()
    useEffect(() => {
        getAssociationRequests()
    }, [])

    const getAssociationRequests = async () => {
        const userInfo = await getUserInfo()
        await axiosClient
            .post('/v1/userAssociate/getAssociationRequests', {
                recipientEmail: userInfo.email,
            })
            .then((res) => {
                setAssociationRequests(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <AssociatedUsersContext.Provider
            value={{ associationRequests, getAssociationRequests }}
        >
            {props.children}
        </AssociatedUsersContext.Provider>
    )
}
