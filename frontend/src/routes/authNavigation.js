import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { LandingScreen } from '../screens/LandingScreen'
import { ParentAuthStackScreens } from '../routes/stacks/authStacks/parentAuthStack'
import { StudentAuthStackScreens } from '../routes/stacks/authStacks/studentAuthStack'
import { FacultyAuthStackScreens } from '../routes/stacks/authStacks/facultyAuthStack'

const AuthTab = createStackNavigator()

export const AuthNavigation = () => {
    return (
        <AuthTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
            })}
        >
            <AuthTab.Screen name="Landing" component={LandingScreen} />
            <AuthTab.Screen
                name="ParentAuth"
                component={ParentAuthStackScreens}
            />
            <AuthTab.Screen
                name="StudentAuth"
                component={StudentAuthStackScreens}
            />
            <AuthTab.Screen
                name="FacultyAuth"
                component={FacultyAuthStackScreens}
            />
        </AuthTab.Navigator>
    )
}
