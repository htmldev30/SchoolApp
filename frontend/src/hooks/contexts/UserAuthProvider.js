import React, { createContext, useState, useEffect } from 'react'
import {
    getUserInfo,
    getUserJWTToken,
    storeUserInfo,
} from '../../shared/asyncStorage'
import { axiosClient } from '../../../axiosClient'
export const UserAuthContext = createContext(null)

export const UserAuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [accountType, setAccountType] = useState(null)
    useEffect(() => {
        checkAuthenticationStatus()
    }, [isAuthenticated]) // when authentication status changes, useEffect will run again

    const checkAuthenticationStatus = async () => {
        const userJWTToken = await getUserJWTToken()
        const userInfo = await getUserInfo()

        if (userJWTToken && userInfo) {
            setIsAuthenticated(true)
            setAccountType(userInfo.accountType)
            axiosClient.defaults.headers.common.Authorization = `Bearer ${userJWTToken}`
        } else {
            axiosClient.defaults.headers.common.Authorization = null
            setIsAuthenticated(false)
            setAccountType(null)
        }
    }

    return (
        <UserAuthContext.Provider
            value={{
                isAuthenticated,
                accountType,
                checkAuthenticationStatus,
            }}
        >
            {props.children}
        </UserAuthContext.Provider>
    )
}

// The provider will wrap around all other elements
