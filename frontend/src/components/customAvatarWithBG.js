import React from 'react'
import { Box, Center, Text } from 'native-base'
// Customs
import { CustomAvatar } from './customAvatar'
export const CustomAvatarWithBG = ({
    associatedUserFullName,
    associatedUserGrade,
    associatedUserImageSource,
}) => {
    return (
        <Box mt={5}>
            <Center bg="custom_secondary.400" height={200} borderRadius={8}>
                <CustomAvatar imgSource={associatedUserImageSource} />
                <Box>
                    <Center>
                        <Text fontSize="2xl" mt={5}>
                            {associatedUserFullName.firstName}
                            {associatedUserFullName.lastName}
                        </Text>
                        <Text fontSize="lg">{associatedUserGrade}</Text>
                    </Center>
                </Box>
            </Center>
        </Box>
    )
}
