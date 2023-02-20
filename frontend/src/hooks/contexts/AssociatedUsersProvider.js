import React, { createContext, useState, useEffect } from 'react'

// Customs
import { axiosClient } from '../../../axiosClient'
import { getUserInfo, getUserJWTToken } from '../../shared/asyncStorage'

export const AssociatedUsersContext = createContext(null)

export const AssociatedUsersProvider = (props) => {
    const [associatedUsers, setAssociatedUsers] = useState({})
    useEffect(() => {
        getAssociatedUsers()
    }, [])

    const getAssociatedUsers = async () => {
        const userInfo = await getUserInfo()

        await axiosClient
            .post('/v1/userAssociated/getAssociatedUsers', {
                userEmail: userInfo.accountType,
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        setAssociatedUsers({})
    }
    return (
        <AssociatedUsersContext.Provider value={{ getAssociatedUsers }}>
            {props.children}
        </AssociatedUsersContext.Provider>
    )
}
