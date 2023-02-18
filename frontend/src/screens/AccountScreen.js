import React from 'react'
import { Text, Box } from 'native-base'
// Custom Imports
import { LogoutForm } from '../modules/AuthForms/LogoutForm'
export const AccountScreen = () => {
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Text>Your are on the Account Page</Text>
            <LogoutForm />
        </Box>
    )
}
