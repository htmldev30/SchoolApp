import React, { createContext, useState, useEffect } from 'react'
import { getUserInfo, getUserJWTToken } from '../../shared/asyncStorage'

export const UserAuthContext = createContext(null)

export const UserAuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [accountType, setAccountType] = useState(null)
    useEffect(() => {
        checkAuthenticationStatus()
    }, [])

    const checkAuthenticationStatus = async () => {
        const userJWTTOKEN = await getUserJWTToken()
        const userInfo = await getUserInfo()
        if (userJWTTOKEN && userInfo) {
            setIsAuthenticated(true)
            setAccountType(userInfo.accountType)
        } else {
            setIsAuthenticated(false)
        }
    }
    return (
        <UserAuthContext.Provider
            value={{ isAuthenticated, accountType, checkAuthenticationStatus }}
        >
            {props.children}
        </UserAuthContext.Provider>
    )
}

// The provider will wrap around all other elements
