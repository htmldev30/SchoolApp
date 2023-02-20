import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { AssociatedUserScreen } from '../../screens/parentScreens/AssociatedUserScreen'
import { AssociatedUsersProvider } from '../../hooks/contexts/AssociatedUsersProvider'

const AssociatedUsersStack = createStackNavigator()

export const AssociatedUsersStackScreens = () => {
    return (
        // Wrap NavigationStack around AssociatedUsers | Only AssociatedUserStack
        <AssociatedUsersStack.Navigator screenOptions={{ headerShown: false }}>
            <AssociatedUsersStack.Screen
                name="AssociatedUsers"
                component={AssociatedUserScreen}
            />
        </AssociatedUsersStack.Navigator>
    )
}
