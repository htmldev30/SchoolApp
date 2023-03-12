import React, { useState, useContext } from 'react'
import { VStack } from 'native-base'

import { UserAuthContext } from '../../hooks/contexts/UserAuthProvider'
import { axiosClient } from '../../utils/axiosClient'
import { CustomButton } from '../../components/CustomButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { UserAuthContextType } from '../../types/UserAuthTypes'

export const UserLogoutForm: React.FC = () => {
    const { checkAuthenticationStatus } = useContext(
        UserAuthContext
    ) as UserAuthContextType
    const [error, setError] = useState<string | null>(null)

    const handleLogout = async () => {
        await axiosClient
            .get('/v1/auth/logout')
            .then((res) => {
                AsyncStorage.removeItem('userJWTToken')
                AsyncStorage.removeItem('userInfo')

                // CHECK AuthenticationStatus function relies on JWTTOKEN being present or not present.
                // Have JWT Token state change before checking!
                checkAuthenticationStatus()
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    return (
        <VStack space={2}>
            <CustomButton label="Sign out" onPress={handleLogout} />
        </VStack>
    )
}
