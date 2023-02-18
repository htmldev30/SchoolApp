import React from 'react'
import { Heading, Text, Box, VStack, Center } from 'native-base'

// Custom Imports
import { LoginForm } from '../../modules/AuthForms/LoginForm'
export const LoginScreen = () => {
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Heading>Welcome back!</Heading>
            <Box mt="24" p="2">
                <Center>
                    <Text fontSize="2xl" bold>
                        SchoolApp
                    </Text>
                    <LoginForm />
                </Center>
            </Box>
        </Box>
    )
}
