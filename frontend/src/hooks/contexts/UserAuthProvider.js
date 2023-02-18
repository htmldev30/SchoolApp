import React, { createContext, useState, useEffect } from 'react'
import { getUserJWTToken } from '../../shared/asyncStorage'

export const UserAuthContext = createContext(null)

export const UserAuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        checkAuthenticationStatus()
    }, [])

    const checkAuthenticationStatus = async () => {
        const userJWTTOKEN = await getUserJWTToken()
        userJWTTOKEN ? setIsAuthenticated(true) : setIsAuthenticated(false)
    }
    return (
        <UserAuthContext.Provider
            value={{ isAuthenticated, checkAuthenticationStatus }}
        >
            {props.children}
        </UserAuthContext.Provider>
    )
}

// The provider will wrap around all other elements
