import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { ParentAuth1Screen } from '../../../screens/auth/parentAuth/parentAuth1Screen'

const ParentAuthStack = createStackNavigator()

export const ParentAuthStackScreens = () => {
    return (
        // Hiding Header of screens below
        <ParentAuthStack.Navigator screenOptions={{ headerShown: false }}>
            <ParentAuthStack.Screen
                name="ParentAuth1"
                component={ParentAuth1Screen}
            />
        </ParentAuthStack.Navigator>
    )
}
