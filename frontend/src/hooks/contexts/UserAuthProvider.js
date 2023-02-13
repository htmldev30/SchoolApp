import { axiosClient } from '../../../apiClient'
import React, { createContext, useState, useEffect } from 'react'

export const UserAuthContext = createContext(null)

export const UserAuthProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    useEffect(() => {}, [])
    return (
        <UserAuthContext.Provider value={{ isAuthenticated }}>
            {props.children}
        </UserAuthContext.Provider>
    )
}

// The provider will wrap around all other elements
