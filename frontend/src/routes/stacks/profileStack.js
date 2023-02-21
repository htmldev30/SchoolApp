import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// Screens
import { AccountScreen } from '../../screens/AccountScreen'
import { UserAssociationRequestProvider } from '../../hooks/contexts/UserAssociationRequestProvider'
import { AssociationRequestsScreen } from '../../screens/studentScreens.js/AssociationRequestsScreen'

const ProfileStack = createStackNavigator()

export const ProfileStackScreens = ({ route }) => {
    return (
        // Hiding Header of screens below
        <UserAssociationRequestProvider>
            <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
                <ProfileStack.Screen
                    name="Account"
                    component={AccountScreen}
                    initialParams={{ accountType: route.params.accountType }}
                />
                {route.params.accountType == 'student' ? (
                    <ProfileStack.Screen
                        name="AssociationRequests"
                        component={AssociationRequestsScreen}
                        initialParams={{
                            accountType: route.params.accountType,
                        }}
                    />
                ) : null}
            </ProfileStack.Navigator>
        </UserAssociationRequestProvider>
    )
}
