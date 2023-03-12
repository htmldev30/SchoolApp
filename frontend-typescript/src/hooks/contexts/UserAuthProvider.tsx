import React, { createContext, useState, useEffect } from 'react'
import { UserAuthContextType } from '../../types/UserAuthTypes'
import {
    getPreviouslyAuthenticated,
    getUserInfo,
    getUserJWTToken,
} from '../../utils/asyncStorage'
import { axiosClient } from '../../utils/axiosClient'

export const UserAuthContext = createContext<UserAuthContextType | null>(null)

export const UserAuthProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [perviouslyAuthenticated, setPreviouslyAuthenticated] = useState<
        boolean | undefined
    >(false)
    const [accountType, setAccountType] = useState<string | null>(null)

    useEffect(() => {
        checkAuthenticationStatus()
    }, [isAuthenticated])

    const checkAuthenticationStatus = async () => {
        const userJWTToken = await getUserJWTToken()
        const userInfo = await getUserInfo()
        if (userJWTToken && userInfo) {
            setIsAuthenticated(true)
            axiosClient.defaults.headers.common.Authorization = `Bearer ${userJWTToken}`
        } else {
            axiosClient.defaults.headers.common.Authorization = null
            setIsAuthenticated(false)
        }
        const prevAuth = await getPreviouslyAuthenticated()
        setPreviouslyAuthenticated(prevAuth)
    }
    return (
        <UserAuthContext.Provider
            value={{
                isAuthenticated,
                perviouslyAuthenticated,
                accountType,
                checkAuthenticationStatus,
            }}
        >
            {children}
        </UserAuthContext.Provider>
    )
}
