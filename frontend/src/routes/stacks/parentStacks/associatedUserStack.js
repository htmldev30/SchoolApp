import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'native-base'
// Screens
import { AssociatedUsersScreen } from '../../../screens/parentScreens/AssociatedUsersScreen'
// Customs
import { UserDynamicInfoContext } from '../../../hooks/contexts/UserDynamicInfoProvider'
import { IsLoadingSplash } from '../../../components/isLoadingSplash'

const AssociatedUsersStack = createStackNavigator()

export const AssociatedUsersStackScreens = () => {
    const { associatedUsers, getAssociatedUsers } = useContext(
        UserDynamicInfoContext
    )
    if (!associatedUsers) {
        getAssociatedUsers() // calling this func. to make useEffect load again |
        return <IsLoadingSplash />
    }
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
