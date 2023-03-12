import React from 'react'
import { NavigatorScreenParams } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppBottomTabParamList } from './appNavigation'
import { AppNavigation } from './appNavigation'
import { AuthStackParamList, AuthStackScreens } from './stacks/authStack'
export type RootStackParamList = {
    App: NavigatorScreenParams<AppBottomTabParamList> // TODO: FIX - NavigatorScreenParams supposed to be AppBottomTabs?
    Auth: NavigatorScreenParams<AuthStackParamList>
}
const RootStack = createStackNavigator<RootStackParamList>()

interface IRootNavigationProp {
    isAuthenticated: boolean
}
export const RootStackScreens = ({ isAuthenticated }: IRootNavigationProp) => {
    // ! Change type any to boolean later
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <RootStack.Screen component={AppNavigation} name="App" />
            ) : (
                <RootStack.Screen component={AuthStackScreens} name="Auth" />
            )}
        </RootStack.Navigator>
    )
}
