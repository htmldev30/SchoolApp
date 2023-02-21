import React, { useState, useEffect } from 'react'
import { Text, Heading, Box } from 'native-base'
import { getUserInfo } from '../shared/asyncStorage'
import { CustomButton } from '../components/customButton'
// Custom Imports

export const LatestScreen = () => {
    const [accountType, setAccountType] = useState('')
    useEffect(() => {
        checkAccountType()
    }, [])
    const checkAccountType = async () => {
        const userInfo = await getUserInfo()
        setAccountType(userInfo.accountType)
    }
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Text>The User Is A </Text>
            <Heading>{accountType}</Heading>
        </Box>
    )
}
