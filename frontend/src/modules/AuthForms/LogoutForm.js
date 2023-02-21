import React, { useContext } from 'react'
import { VStack } from 'native-base'
// Custom Imports
import { UserAuthContext } from '../../hooks/contexts/UserAuthProvider'
import { axiosClient } from '../../../axiosClient'
import { CustomButton } from '../../components/customButton'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const LogoutForm = () => {
    const { checkAuthenticationStatus } = useContext(UserAuthContext)

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
            .catch((err) => {
                console.log(err.response.data.error)
            })
    }
    return (
        <VStack space={2.5} w="100%" pt="4" px="4">
            <CustomButton label="Logout" onPress={handleLogout} />
        </VStack>
    )
}
