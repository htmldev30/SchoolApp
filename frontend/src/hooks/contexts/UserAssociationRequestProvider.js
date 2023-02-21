import React, { createContext, useState, useEffect } from 'react'

// Customs
import { axiosClient } from '../../../axiosClient'
import { getUserInfo } from '../../shared/asyncStorage'

export const UserAssociationRequestContext = createContext()

export const UserAssociationRequestProvider = (props) => {
    const [associationRequests, setAssociationRequests] = useState()

    useEffect(() => {
        getAssociationRequests()
    }, [])

    const getAssociationRequests = async () => {
        const userInfo = await getUserInfo()
        // Because provider wraps around entire ProfileStack, if user is a parent, do not request API
        if (userInfo.accountType == 'parent') {
            return null
        }
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
        <UserAssociationRequestContext.Provider
            value={{ associationRequests, getAssociationRequests }}
        >
            {props.children}
        </UserAssociationRequestContext.Provider>
    )
}
