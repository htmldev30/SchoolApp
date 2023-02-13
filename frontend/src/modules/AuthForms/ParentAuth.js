import React from 'react'
import { VStack, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'
// Custom Imports
import { CustomInput } from '../../components/customInput'
import { CustomButton } from '../../components/customButton'
export const ParentAuth = () => {
    return (
        <VStack space={2.5} w="100%" pt="4" px="4">
            <CustomInput
                type="name"
                size="lg"
                placeholder="First Name"
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
