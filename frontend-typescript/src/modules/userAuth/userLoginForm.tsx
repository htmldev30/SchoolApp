import React, { useState, useContext } from 'react'
import { VStack, Text } from 'native-base'
import { axiosClient } from '../../utils/axiosClient'
import { storeUserInfo, storeUserJWTToken } from '../../utils/asyncStorage'
import { UserAuthContext } from '../../hooks/contexts/UserAuthProvider'
import { UserAuthContextType } from '../../types/UserAuthTypes'
import { CustomInput } from '../../components/CustomInput'
import { CustomButton } from '../../components/CustomButton'
export const UserLoginForm: React.FC = () => {
    const { checkAuthenticationStatus } = useContext(
        UserAuthContext
    ) as UserAuthContextType
    const [error, setError] = useState<string | null>(null)
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const handleSubmit = async (): Promise<void> => {
        await axiosClient
            .post('/v1/auth/login', {
                username: username,
                password: password,
            })
            .then((res) => {
                const {
                    accountType,
                    grade,
                    fullName,
                    username,
                    email,
                    avatarName,
                    associatedUsers,
                    school,
                    jwtToken,
                } = res.data
                storeUserJWTToken(jwtToken)
                storeUserInfo({
                    accountType: accountType,
                    grade: grade,
                    fullName: {
                        firstName: fullName.firstName,
                        lastName: fullName.lastName,
                    },
                    username: username,
                    email: email,
                    avatarName: avatarName,
                    associateUsers: associatedUsers,
                    school: school,
                })
                checkAuthenticationStatus()
            })
            .catch((error) => {
                setError(error.message)
            })
    }
    return (
        <VStack space={2}>
            {error ? <Text color="danger.500">{error}</Text> : null}
            <CustomInput
                type="text"
                size="lg"
                inputLabel="Username"
                placeholder="Enter username"
                onChangeText={(newUsernameText: string) =>
                    setUsername(newUsernameText)
                }
                autoComplete="username"
                enterKeyHint="next"
                inputMode="text"
            />
            <Text fontSize="xs" italic>
                Your username is your email before @
            </Text>
            <CustomInput
                type="text"
                size="lg"
                inputLabel="Password"
                placeholder="Enter password"
                onChangeText={(newPasswordText: string) =>
                    setPassword(newPasswordText)
                }
                enterKeyHint="send"
                inputMode="text"
                secureTextEntry={true}
            />
            <CustomButton mt={4} label="Sign in" onPress={handleSubmit} />
        </VStack>
    )
}
