import React from 'react'
import { Heading, Text, Box, Center } from 'native-base'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
// Custom Imports
import { ParentStudentAuthForm } from '../../modules/AuthForms/ParentStudentAuthForm'
export const ParentStudentAuthScreen = ({ route }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Box flex="1" m="4" p="2" safeAreaTop>
                <Heading>Welcome {route.params.accountType}</Heading>
                <Box mt="24" p="2">
                    <Center>
                        <Text fontSize="2xl" bold>
                            Sign Up
                        </Text>
                        <ParentStudentAuthForm
                            userAccountType={route.params.accountType} // userAccountType == accountType | changed name because a variable already exists
                        />
                    </Center>
                </Box>
            </Box>
        </TouchableWithoutFeedback>
    )
}
