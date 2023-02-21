import React, { useState, useContext } from 'react'
import { VStack, Icon, Text } from 'native-base'
import { Feather } from '@expo/vector-icons'
// Custom Imports
import { UserAuthContext } from '../../hooks/contexts/UserAuthProvider'
import { axiosClient } from '../../../axiosClient'
import { CustomInput } from '../../components/customInput'
import { CustomButton } from '../../components/customButton'
import { storeUserInfo, storeUserJWTToken } from '../../shared/asyncStorage'
export const LoginForm = () => {
    const { checkAuthenticationStatus } = useContext(UserAuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [messages, setMessages] = useState(null)
    const handleSubmit = async () => {
        await axiosClient
            .post('/v1/auth/login', {
                email: email,
                password: password,
            })
            .then((res) => {
                const {
                    accountType,
                    fullName,
                    email,
                    associatedUsers,
                    jwtToken,
                } = res.data
                storeUserJWTToken(jwtToken)
                storeUserInfo({
                    accountType: accountType,
                    fullName: {
                        firstName: fullName.firstName,
                        lastName: fullName.lastName,
                    },
                    associatedUsers: associatedUsers,
                    email: email,
                })

                // CHECK AuthenticationStatus function relies on JWTTOKEN being present or not present.
                // Have JWT Token state change before checking!
                checkAuthenticationStatus()
            })
            .catch((err) => {
                setMessages(err.response.data.error)
            })
    }
    return (
        <VStack space={2.5} w="100%" pt="4" px="4">
            {messages ? <Text color={'danger.400'}>{messages}</Text> : null}

            <CustomInput
                type="email"
                size="lg"
                placeholder="Email Name"
                onChangeText={(newEmailText) => setEmail(newEmailText)}
                InputLeftElement={<Icon as={<Feather name="mail" />} />}
            />
            <CustomInput
                type="password"
                size="lg"
                placeholder="Password"
                onChangeText={(newPasswordText) => setPassword(newPasswordText)}
                InputLeftElement={<Icon as={<Feather name="lock" />} />}
            />
            <CustomButton label="Login" onPress={handleSubmit} />
        </VStack>
    )
}
