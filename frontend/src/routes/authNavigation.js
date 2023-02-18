import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { LandingScreen } from '../screens/auth/LandingScreen'
import { LoginScreen } from '../screens/auth/LoginScreen'
import { FacultyAuthStackScreens } from './stacks/facultyAuthStack'
import { ParentStudentAuthScreen } from '../screens/auth/ParentStudentAuthScreen'

const AuthTab = createStackNavigator()

export const AuthNavigation = () => {
    return (
        <AuthTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
            })}
        >
            <AuthTab.Screen name="Landing" component={LandingScreen} />
            <AuthTab.Screen name="Login" component={LoginScreen} />
            <AuthTab.Screen
                name="ParentStudentAuth"
                component={ParentStudentAuthScreen}
            />
            <AuthTab.Screen
                name="FacultyAuth"
                component={FacultyAuthStackScreens}
            />
        </AuthTab.Navigator>
    )
}
