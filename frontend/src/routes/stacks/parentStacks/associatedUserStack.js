import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'native-base'
// Screens
import { AssociatedUsersScreen } from '../../../screens/parentScreens/AssociatedUsersScreen'
// Customs
import { UserDynamicInfoContext } from '../../../hooks/contexts/UserDynamicInfoProvider'

const AssociatedUsersStack = createStackNavigator()

export const AssociatedUsersStackScreens = () => {
    const { associatedUsers } = useContext(UserDynamicInfoContext)
    if (!associatedUsers) {
        return <Text>Loading</Text>
    }
    // ABOVE CODE DELETED BECAUSE IT IS UNNECESSARY, check tommorrow
    return (
        // Wrap NavigationStack around AssociatedUsers | Only AssociatedUserStack
        <AssociatedUsersStack.Navigator screenOptions={{ headerShown: false }}>
            <AssociatedUsersStack.Screen
                name="AssociatedUsers"
                component={AssociatedUsersScreen}
                initialParams={{
                    associatedUsers: associatedUsers,
                }}
            />
        </AssociatedUsersStack.Navigator>
    )
}
