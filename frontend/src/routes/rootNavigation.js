import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Navigation Stacks
import { AppNavigation } from './appNavigation'
import { AuthNavigation } from './authNavigation'

const RootStack = createStackNavigator()

export const RootStackScreen = ({ isAuthenticated }) => {
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <RootStack.Screen component={AppNavigation} name="App" />
            ) : (
                <RootStack.Screen
                    component={AuthNavigation}
                    name="Authentication"
                />
            )}
        </RootStack.Navigator>
    )
}
