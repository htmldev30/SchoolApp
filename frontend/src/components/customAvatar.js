import React from 'react'
import { Box, Avatar } from 'native-base'

export const CustomAvatar = ({ imgSource, associatedUserFullName }) => {
    const initials = `${associatedUserFullName.firstName.charAt(
        0
    )} ${associatedUserFullName.lastName.charAt(0)}`
    return (
        <Avatar
            bg="custom_primary.300"
            mr="1"
            source={{
                uri: `${imgSource}`,
            }}
        >
            {initials}
        </Avatar>
    )
}
