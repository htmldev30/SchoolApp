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
        <Box
            mt={5}
            bg="custom_secondary.400"
            borderRadius={8}
            borderWidth={4}
            borderColor="custom_secondary.500"
            shadow={2}
        >
            <Center height={200}>
                <CustomAvatar
                    imgSource={associatedUserImageSource}
                    associatedUserFullName={associatedUserFullName}
                />
                <Box>
                    <Center>
                        <Text fontSize="2xl" mt={5}>
                            {`${associatedUserFullName.firstName} ${associatedUserFullName.lastName}`}
                        </Text>
                        <Text fontSize="lg">{associatedUserGrade}</Text>
                    </Center>
                </Box>
            </Center>
        </Box>
    )
}
