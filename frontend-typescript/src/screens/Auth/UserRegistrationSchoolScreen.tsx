import React from 'react'
import { Heading, Box, View } from 'native-base'
import {
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from 'react-native'

import { UserRegistrationSchoolScreenProps } from '../../routes/stacks/authStack'

import BaseScreen from '../BaseScreen'
import { UserRegistrationSchoolForm } from '../../modules/userAuth/userRegistrationForms'
// Forms

export const UserRegistrationSchoolScreen = ({
    navigation,
    route,
}: UserRegistrationSchoolScreenProps) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Box flex="1" m="4" p="2" safeAreaTop>
                    <BaseScreen />
                    <View>
                        <Heading>Welcome {route.params.accountType}</Heading>
                    </View>
                    <View mt="16">
                        <UserRegistrationSchoolForm
                            navigation={navigation}
                            route={route}
                        />
                    </View>
                </Box>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
