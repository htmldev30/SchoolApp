import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { AssociatedUserScreen } from '../../screens/parentScreens/AssociatedUserScreen'

const AssociatedUsersStack = createStackNavigator()

export const AssociatedUsersStackScreens = () => {
    return (
        // Hiding Header of screens below
        <AssociatedUsersStack.Navigator screenOptions={{ headerShown: false }}>
            <AssociatedUsersStack.Screen
                name="AssociatedUsers"
                component={AssociatedUserScreen}
            />
        </AssociatedUsersStack.Navigator>
    )
}
