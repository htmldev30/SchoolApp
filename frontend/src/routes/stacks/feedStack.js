import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { LatestScreen } from '../../screens/LatestScreen'

const FeedStack = createStackNavigator()

export const FeedStackScreens = () => {
    return (
        // Hiding Header of screens below
        <FeedStack.Navigator screenOptions={{ headerShown: false }}>
            <FeedStack.Screen name="Latest" component={LatestScreen} />
        </FeedStack.Navigator>
    )
}
