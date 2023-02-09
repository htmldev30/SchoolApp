import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { FeedScreen } from '../../screens/FeedScreen'

const FeedStack = createStackNavigator()

export const FeedStackScreens = () => {
    return (
        // Hiding Header of screens below
        <FeedStack.Navigator screenOptions={{ headerShown: false }}>
            <FeedStack.Screen name="Feed" component={FeedScreen} />
        </FeedStack.Navigator>
    )
}
