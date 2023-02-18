import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { AccountScreen } from '../../screens/AccountScreen'

const ProfileStack = createStackNavigator()

export const ProfileStackScreens = () => {
    return (
        // Hiding Header of screens below
        <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name="Account" component={AccountScreen} />
        </ProfileStack.Navigator>
    )
}
