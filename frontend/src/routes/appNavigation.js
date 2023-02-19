import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from '@expo/vector-icons/Feather'
// StackScreens
import { FeedStackScreens } from './stacks/feedStack'
import { ProfileStackScreens } from './stacks/profileStack'
import { AssociatedUsersStackScreens } from './stacks/associatedUserStack'
const AppTab = createBottomTabNavigator()

export const AppNavigation = () => {
    return (
        // Hiding Header of screens below
        <AppTab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabel: () => {
                    return null
                },
                headerShown: false,
                tabBarIcon: ({ focused, size }) => {
                    if (route.name === 'Feed') {
                        if (focused) {
                            return (
                                <Feather name="home" size={24} color="black" />
                            )
                        } else {
                            return (
                                <Feather name="home" size={24} color="grey" />
                            )
                        }
                    }
                    if (route.name === 'Calendar') {
                        if (focused) {
                            return (
                                <Feather
                                    name="calendar"
                                    size={24}
                                    color="black"
                                />
                            )
                        } else {
                            return (
                                <Feather
                                    name="calendar"
                                    size={24}
                                    color="grey"
                                />
                            )
                        }
                    }
                    if (route.name === 'Alerts') {
                        if (focused) {
                            return (
                                <Feather
                                    name="alert-octagon"
                                    size={24}
                                    color="black"
                                />
                            )
                        } else {
                            return (
                                <Feather
                                    name="alert-octagon"
                                    size={24}
                                    color="grey"
                                />
                            )
                        }
                    }
                    if (route.name === 'My Students') {
                        if (focused) {
                            return (
                                <Feather name="smile" size={24} color="black" />
                            )
                        } else {
                            return (
                                <Feather name="smile" size={24} color="grey" />
                            )
                        }
                    }
                    if (route.name === 'Profile') {
                        if (focused) {
                            return (
                                <Feather name="user" size={24} color="black" />
                            )
                        } else {
                            return (
                                <Feather name="user" size={24} color="grey" />
                            )
                        }
                    }
                },
            })}
        >
            <AppTab.Screen name="Feed" component={FeedStackScreens} />
            <AppTab.Screen name="Calendar" component={FeedStackScreens} />
            <AppTab.Screen name="Alerts" component={FeedStackScreens} />
            <AppTab.Screen
                name="My Students"
                component={AssociatedUsersStackScreens}
            />
            <AppTab.Screen name="Profile" component={ProfileStackScreens} />
        </AppTab.Navigator>
    )
}
