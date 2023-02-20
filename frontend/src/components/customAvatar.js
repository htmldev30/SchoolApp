import React from 'react'
import { Box, Avatar } from 'native-base'

export const CustomAvatar = ({ imgSource }) => {
    return (
        <Avatar
            source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
            size="lg"
        >
            NB
        </Avatar>
    )
}
