import React from 'react'
import { Heading, Text, Box, VStack, Center } from 'native-base'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
// Custom Imports
import { ParentAuth1Form } from '../../../modules/AuthForms/ParentAuth1Form'
export const ParentAuth1Screen = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Box flex="1" m="4" p="2" safeAreaTop>
                <Heading>Welcome Parent!</Heading>
                <Box mt="24" p="2">
                    <Center>
                        <Text fontSize="2xl" bold>
                            Sign Up
                        </Text>
                        <ParentAuth1Form />
                    </Center>
                </Box>
            </Box>
        </TouchableWithoutFeedback>
    )
}
