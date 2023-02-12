import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { StudentAuth1Screen } from '../../../screens/auth/studentAuth/studentAuth1Screen'

const StudentAuthStack = createStackNavigator()

export const StudentAuthStackScreens = () => {
    return (
        // Hiding Header of screens below
        <StudentAuthStack.Navigator screenOptions={{ headerShown: false }}>
            <StudentAuthStack.Screen
                name="StudentAuth1"
                component={StudentAuth1Screen}
            />
        </StudentAuthStack.Navigator>
    )
}
