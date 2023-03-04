import React, { createContext, useState, useEffect } from 'react'

// Customs
import { axiosClient } from '../../../axiosClient'
import { getUserJWTToken, getUserInfo } from '../../shared/asyncStorage'

export const UserDynamicInfoContext = createContext(null)

export const UserDynamicInfoProvider = (props) => {
    const [userDynamicInfo, setUserDynamicInfo] = useState(null) // will include user, avatar, fullName, etc (i.e. any info that is regularly updated)
    const [associatedUsers, setAssociatedUsers] = useState(null)
    const [resMessages, setResMessages] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAssociatedUsers()
        getUserDynamicInfo()
        setIsLoading(false)
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
                    setResMessages(err.response.data.error)
                    console.log(err.response.data.error)
                })
        }
    }
    const getUserDynamicInfo = async () => {
        const userJWTToken = await getUserJWTToken()
        const userInfo = await getUserInfo()
        if (userJWTToken && userInfo) {
            await axiosClient
                .post('/v1/user/getMyUserInfo', {
                    myUserEmail: userInfo.email,
                })
                .then((res) => {
                    setUserDynamicInfo(res.data)
                })
                .catch((err) => {
                    setResMessages(err.response.data.error)
                    console.log(err.response.data.error)
                })
        }
    }
    return (
        <UserDynamicInfoContext.Provider
            value={{
                associatedUsers,
                getAssociatedUsers,
                userDynamicInfo,
                getUserDynamicInfo,
                resMessages,
            }}
        >
            {props.children}
        </UserDynamicInfoContext.Provider>
    )
}
