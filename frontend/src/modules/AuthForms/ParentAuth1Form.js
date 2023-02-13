import React, { useState } from 'react'
import { VStack, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'
// Custom Imports
import { CustomInput } from '../../components/customInput'
import { CustomButton } from '../../components/customButton'
export const ParentAuth1Form = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <VStack space={2.5} w="100%" pt="4" px="4">
            <CustomInput
                type="name"
                size="lg"
                placeholder="First Name"
                onChangeText={(newFirstNameText) =>
                    setFirstName(newFirstNameText)
                }
                InputLeftElement={
                    <Icon
                        as={<Feather name="user" />}
                        size={5}
                        ml="2"
                        color="custom_dark.100"
                    />
                }
            />

            <CustomInput
                type="name"
                size="lg"
                placeholder="Last Name"
                onChangeText={(newLastNameText) => setLastName(newLastNameText)}
                InputLeftElement={
                    <Icon
                        as={<Feather name="user" />}
                        size={5}
                        ml="2"
                        color="custom_dark.100"
                    />
                }
            />
            <CustomInput
                type="email"
                size="lg"
                placeholder="Email Name"
                onChangeText={(newEmailText) => setEmail(newEmailText)}
                InputLeftElement={
                    <Icon
                        as={<Feather name="mail" />}
                        size={5}
                        ml="2"
                        color="custom_dark.100"
                    />
                }
            />
            <CustomInput
                type="password"
                size="lg"
                placeholder="Password"
                onChangeText={(newPasswordText) => setPassword(newPasswordText)}
                InputLeftElement={
                    <Icon
                        as={<Feather name="lock" />}
                        size={5}
                        ml="2"
                        color="custom_dark.100"
                    />
                }
            />
            <CustomButton label="Sign Up" />
        </VStack>
    )
}
