import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { LandingScreen } from '../screens/LandingScreen'
import { LandingScreen2 } from '../screens/LandingScreen2'

const AuthTab = createStackNavigator()

export const AuthNavigation = () => {
    return (
        <AuthTab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
            })}
        >
            <AuthTab.Screen name="Landing" component={LandingScreen} />
            <AuthTab.Screen name="Landing2" component={LandingScreen2} />
        </AuthTab.Navigator>
    )
}
