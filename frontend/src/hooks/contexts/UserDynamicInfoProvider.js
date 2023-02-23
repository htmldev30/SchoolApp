import React, { createContext, useState, useEffect } from 'react'

// Customs
import { axiosClient } from '../../../axiosClient'
import { getUserJWTToken, getUserInfo } from '../../shared/asyncStorage'

export const UserDynamicInfoContext = createContext(null)

export const UserDynamicInfoProvider = (props) => {
    const [userDynamicInfo, setUserDynamicInfo] = useState() // will include user, profilePicture, fullName, etc (i.e. any info that is regularly updated)
    const [associatedUsers, setAssociatedUsers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAssociatedUsers()
    }, [isLoading])

    const getAssociatedUsers = async () => {
        const userJWTToken = await getUserJWTToken()
        const userInfo = await getUserInfo()
        if (userJWTToken && userInfo) {
            await axiosClient
                .post('/v1/user/getAssociatedUsersInfo', {
                    userEmail: userInfo.email,
                })
                .then((res) => {
                    setAssociatedUsers(res.data)
                })
                .catch((err) => {
                    console.log(err.response.data.error)
                })
            setIsLoading(false)
        }
    }
    return (
        <UserDynamicInfoContext.Provider
            value={{ associatedUsers, getAssociatedUsers }}
        >
            {props.children}
        </UserDynamicInfoContext.Provider>
    )
}
