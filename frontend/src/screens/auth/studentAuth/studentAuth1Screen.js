import React from 'react'
import { Heading, Text, Box, VStack, Center } from 'native-base'

// Custom Imports
import { CustomButton } from '../../../components/customButton'
export const StudentAuth1Screen = ({ navigation }) => {
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Heading>Welcome Student!</Heading>
            <Box mt="24" p="2">
                <Center>
                    <Text fontSize="2xl" bold>
                        SchoolApp
                    </Text>
                    <Text fontSize="md">Student</Text>
                </Center>
            </Box>
        </Box>
    )
}
