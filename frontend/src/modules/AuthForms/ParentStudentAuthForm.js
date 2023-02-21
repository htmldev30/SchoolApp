import React, { useState, useContext } from 'react'
import { VStack, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'
import axios from 'axios'
// Custom Imports
import { UserAuthContext } from '../../hooks/contexts/UserAuthProvider'
import { axiosClient } from '../../../axiosClient'
import { CustomInput } from '../../components/customInput'
import { CustomButton } from '../../components/customButton'
import { storeUserInfo, storeUserJWTToken } from '../../shared/asyncStorage'
export const ParentStudentAuthForm = ({ userAccountType }) => {
    const { checkAuthenticationStatus } = useContext(UserAuthContext)
    const [accountType, setAccountType] = useState(userAccountType) // userAccountType == accountType | changed name because a variable already exists
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // TODO: Resolve error where Axios cannot connect to backend.
    const handleSubmit = async () => {
        await axiosClient
            .post('/v1/auth/register', {
                accountType: accountType,
                fullName: {
                    firstName: firstName,
                    lastName: lastName,
                },
                email: email,
                password: password,
            })
            .then((res) => {
                const { accountType, fullName, email, jwtToken } = res.data
                storeUserJWTToken(jwtToken)
                storeUserInfo({
                    accountType: accountType,
                    fullName: {
                        firstName: fullName.firstName,
                        lastName: fullName.lastName,
                    },
                    email: email,
                })

                // CHECK AuthenticationStatus function relies on JWTTOKEN being present or not present.
                // Have JWT Token state change before checking!
                checkAuthenticationStatus()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <VStack space={2.5} w="100%" pt="4" px="4">
            <CustomInput
                type="name"
                size="lg"
                placeholder="First Name"
                onChangeText={(newFirstNameText) =>
                    setFirstName(newFirstNameText)
                }
                InputLeftElement={<Icon as={<Feather name="user" />} />}
            />

            <CustomInput
                type="name"
                size="lg"
                placeholder="Last Name"
                onChangeText={(newLastNameText) => setLastName(newLastNameText)}
                InputLeftElement={<Icon as={<Feather name="user" />} />}
            />
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
            <CustomButton label="Sign Up" onPress={handleSubmit} />
        </VStack>
    )
}
