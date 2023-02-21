import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { AssociatedUsersScreen } from '../../../screens/parentScreens/AssociatedUsersScreen'

const AssociatedUsersStack = createStackNavigator()

export const AssociatedUsersStackScreens = () => {
    return (
        // Wrap NavigationStack around AssociatedUsers | Only AssociatedUserStack
        <AssociatedUsersStack.Navigator screenOptions={{ headerShown: false }}>
            <AssociatedUsersStack.Screen
                name="AssociatedUsers"
                component={AssociatedUsersScreen}
            />
        </AssociatedUsersStack.Navigator>
    )
}
