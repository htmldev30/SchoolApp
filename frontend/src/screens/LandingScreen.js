import React from 'react'
import { Heading, Text, Box, VStack, Center } from 'native-base'
// Custom Imports
import { CustomButton } from '../components/customButton'
export const LandingScreen = ({ navigation }) => {
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Heading>Welcome</Heading>
            <Box mt="24" p="2">
                <Center>
                    <Text fontSize="2xl" bold>
                        SchoolApp
                    </Text>
                    <Text fontSize="md">Wait... Who Are you?</Text>
                </Center>
                <VStack space={2} w="100%" pt="4" px="4">
                    <CustomButton
                        variant="outline"
                        label="Parent"
                        onPress={() =>
                            navigation.navigate('ParentAuth', {
                                screen: 'ParentAuth1',
                            })
                        }
                    />
                    <CustomButton
                        variant="outline"
                        label="Student"
                        onPress={() =>
                            navigation.navigate('StudentAuth', {
                                screen: 'StudentAuth1',
                            })
                        }
                    />
                    <CustomButton
                        variant="outline"
                        label="Faculty"
                        onPress={() =>
                            navigation.navigate('FacultyAuth', {
                                screen: 'FacultyAuth1',
                            })
                        }
                    />
                </VStack>
            </Box>
        </Box>
    )
}
