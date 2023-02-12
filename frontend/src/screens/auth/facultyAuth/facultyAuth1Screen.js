import React from 'react'
import { Heading, Text, Box, VStack, Center } from 'native-base'

// Custom Imports
import { CustomButton } from '../../../components/customButton'
export const FacultyAuth1Screen = ({ navigation }) => {
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Heading>Welcome Faculty!</Heading>
            <Box mt="24" p="2">
                <Center>
                    <Text fontSize="2xl" bold>
                        SchoolApp
                    </Text>
                    <Text fontSize="md">Faculty</Text>
                </Center>
            </Box>
        </Box>
    )
}
