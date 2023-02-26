import React, { useState } from 'react'
import { Text, Box } from 'native-base'
export const IsLoadingSplash = () => {
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Text>Hang On...</Text>
            <Text>We are fetching the data. </Text>
        </Box>
    )
}
