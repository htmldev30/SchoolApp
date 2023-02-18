import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { FacultyAuth1Screen } from '../../screens/auth/facultyAuthScreens/FacultyAuth1Screen'

const FacultyAuthStack = createStackNavigator()

export const FacultyAuthStackScreens = () => {
    return (
        // Hiding Header of screens below
        <FacultyAuthStack.Navigator screenOptions={{ headerShown: false }}>
            <FacultyAuthStack.Screen
                name="FacultyAuth1"
                component={FacultyAuth1Screen}
            />
        </FacultyAuthStack.Navigator>
    )
}
