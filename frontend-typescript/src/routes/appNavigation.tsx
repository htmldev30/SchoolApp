import React from 'react'
import { NavigatorScreenParams } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FeedStackParamList, FeedStackScreens } from './stacks/feedStack'

export type AppBottomTabParamList = {
    Feed: NavigatorScreenParams<FeedStackParamList>
    //Calendar: undefined
    // Alerts: undefined
    // MyStudents: undefined
    // Profile: undefined
}

const AppTab = createBottomTabNavigator<AppBottomTabParamList>()

export const AppNavigation = () => {
    return (
        <AppTab.Navigator screenOptions={{ headerShown: false }}>
            <AppTab.Screen component={FeedStackScreens} name="Feed" />
        </AppTab.Navigator>
    )
}
