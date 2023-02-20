import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { AccountScreen } from '../../screens/AccountScreen'
import { AssociatedUsersProvider } from '../../hooks/contexts/AssociatedUsersProvider'

const ProfileStack = createStackNavigator()

export const ProfileStackScreens = () => {
    return (
        // Hiding Header of screens below
        <AssociatedUsersProvider>
            <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
                <ProfileStack.Screen name="Account" component={AccountScreen} />
            </ProfileStack.Navigator>
        </AssociatedUsersProvider>
    )
}
