import React from 'react'
import { Box, Center, Text } from 'native-base'
// Customs
import { CustomAvatar } from './customAvatar'
export const CustomAvatarWithBG = ({
    associatedUserName,
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
                            Mohammed Hit
                        </Text>
                        <Text fontSize="lg">12</Text>
                    </Center>
                </Box>
            </Center>
        </Box>
    )
}
