import React from 'react'
import { Heading, Text, Box, VStack, Center } from 'native-base'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
// Custom Imports
import { CustomButton } from '../../../components/customButton'
import { CustomInput } from '../../../components/customInput'
export const ParentAuth1Screen = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Box flex="1" m="4" p="2" safeAreaTop>
                <Heading>Welcome Parent!</Heading>
                <Box mt="24" p="2">
                    <Center>
                        <Text fontSize="2xl" bold>
                            SchoolApp
                        </Text>
                        <VStack space={2} w="100%" pt="4" px="4">
                            <CustomInput
                                type="name"
                                size="lg"
                                placeholder="First Name"
                            />
                            <CustomInput
                                type="name"
                                size="lg"
                                placeholder="Last Name"
                            />
                            <CustomInput
                                size="lg"
                                placeholder="Email Address"
                            />
                            <CustomInput
                                type="password"
                                size="lg"
                                placeholder="Password"
                            />
                            <CustomButton label="Sign Up"></CustomButton>
                        </VStack>
                    </Center>
                </Box>
            </Box>
        </TouchableWithoutFeedback>
    )
}
