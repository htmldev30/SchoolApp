import React from 'react'
import { Text, View, Box, Heading } from 'native-base'
import BaseScreen from './BaseScreen'
import { UserLogoutForm } from '../modules/userAuth/userLogoutForm'

export const LatestScreen: React.FC = () => {
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <BaseScreen />
            <View>
                <Heading>Latest</Heading>
                <UserLogoutForm />
            </View>
        </Box>
    )
}
