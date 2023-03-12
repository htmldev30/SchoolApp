import React, { useContext, useState } from 'react'
import { VStack, View, Text } from 'native-base'
import { CustomInput } from '../../components/CustomInput'
import { CustomButton } from '../../components/CustomButton'
import {
    UserRegistrationSchoolScreenProps,
    UserRegistrationScreenProps,
} from '../../routes/stacks/authStack'
import { axiosClient } from '../../utils/axiosClient'
import { storeUserInfo, storeUserJWTToken } from '../../utils/asyncStorage'
import { UserAuthContext } from '../../hooks/contexts/UserAuthProvider'
import { UserAuthContextType } from '../../types/UserAuthTypes'

export const UserRegistrationSchoolForm: React.FC<
    UserRegistrationSchoolScreenProps
> = ({ navigation, route }) => {
    const [error, setError] = useState<string | null>(null)
    const [schoolJoinCode, setSchoolJoinCode] = useState<string>('')
    const handleJoinCodeChange = (joinCode: string) =>
        setSchoolJoinCode(joinCode)

    const handleValidation = (): void => {
        if (schoolJoinCode.length == 7) {
            setError(null)
        } else {
            setError('Join code must be 7 characters long.')
        }
    }
    const handleSubmit = async (): Promise<void> => {
        await axiosClient
            .post('/v1/faculty/checkSchoolJoinCode', {
                schoolJoinCode: schoolJoinCode,
            })
            .then((res) => {
                navigation.navigate('UserRegistration', {
                    accountType: route.params.accountType,
                    schoolJoinCode: schoolJoinCode, // separate form schoolJoinCode to maintain backend interface order
                    schoolInfo: {
                        name: res.data.name,
                        address: {
                            street: res.data.address.street,
                            city: res.data.address.city,
                            zip: res.data.address.zip,
                            state: res.data.address.state,
                            country: res.data.address.country,
                        },
                    },
                })
            })
            .catch((error) => {
                setError(error.message)
            })
    }

    return (
        <View>
            <CustomInput
                type="text"
                size="lg"
                inputLabel="Join Code"
                placeholder="Enter school join code"
                autoCapitalize="characters"
                autoFocus={true}
                value={schoolJoinCode}
                onChangeText={handleJoinCodeChange}
                onBlur={handleValidation}
                inputError={error}
            />
            {error ? null : (
                <CustomButton mt={4} label="Continue" onPress={handleSubmit} />
            )}
        </View>
    )
}
export const UserRegistrationForm: React.FC<UserRegistrationScreenProps> = ({
    route,
}) => {
    const { checkAuthenticationStatus } = useContext(
        UserAuthContext
    ) as UserAuthContextType
    const [error, setError] = useState<string | null>(null)
    const [grade, setGrade] = useState<number | null>(null)
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = async (): Promise<void> => {
        await axiosClient
            .post('/v1/auth/register', {
                accountType: route.params.accountType,
                grade: grade,
                fullName: {
                    firstName: firstName,
                    lastName: lastName,
                },
                email: email,
                password: password,
                joinCode: route.params.schoolJoinCode,
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
            {error ? <Text>{error}</Text> : null}
            {route.params.accountType == 'student' ? (
                <CustomInput
                    type="text"
                    size="lg"
                    inputLabel="Grade level"
                    placeholder="Enter grade level"
                    onChangeText={(newGradeNumber: number) =>
                        setGrade(newGradeNumber)
                    }
                    enterKeyHint="next"
                    inputMode="numeric"
                />
            ) : null}

            <CustomInput
                type="text"
                size="lg"
                inputLabel="First name"
                placeholder="Enter first name"
                onChangeText={(newFirstNameText: string) =>
                    setFirstName(newFirstNameText)
                }
                autoComplete="given-name"
                enterKeyHint="next"
                inputMode="text"
            />
            <CustomInput
                type="text"
                size="lg"
                inputLabel="Last name"
                placeholder="Enter last name"
                onChangeText={(newLastNameText: string) =>
                    setLastName(newLastNameText)
                }
                autoComplete="family-name"
                enterKeyHint="next"
                inputMode="text"
            />
            <CustomInput
                type="text"
                size="lg"
                inputLabel="Email"
                placeholder="Enter email"
                onChangeText={(newEmailText: string) => setEmail(newEmailText)}
                autoComplete="email"
                enterKeyHint="next"
                inputMode="email"
            />
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
            />
            <CustomButton mt={4} label="Sign up" onPress={handleSubmit} />
        </VStack>
    )
}
