import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
// Screens
import { LandingScreen } from '../../screens/Auth/LandingScreen'
import { UserRegistrationScreen } from '../../screens/Auth/UserRegistrationScreen'
import { UserRegistrationSchoolScreen } from '../../screens/Auth/UserRegistrationSchoolScreen'
import { UserLoginScreen } from '../../screens/Auth/UserLoginScreen'

export type AuthStackParamList = {
    Landing: undefined
    UserRegistrationSchool: { accountType: string }
    UserRegistration: {
        accountType: string
        schoolJoinCode: string
        schoolInfo: {
            name: string
            address: {
                street: string
                city: string
                zip: string
                state: string
                country: string
            }
        }
    }
    UserLogin: undefined
}

// #region
export type LandingScreenProps = NativeStackScreenProps<
    AuthStackParamList,
    'Landing'
>

export type UserRegistrationSchoolScreenProps = NativeStackScreenProps<
    AuthStackParamList,
    'UserRegistrationSchool'
>

export type UserRegistrationScreenProps = NativeStackScreenProps<
    AuthStackParamList,
    'UserRegistration'
>

export type UserLoginScreenProps = NativeStackScreenProps<
    AuthStackParamList,
    'UserLogin'
>
//#endregion
const AuthStack = createStackNavigator<AuthStackParamList>()

export const AuthStackScreens = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen component={LandingScreen} name="Landing" />
            <AuthStack.Screen
                component={UserRegistrationSchoolScreen}
                name="UserRegistrationSchool"
            />
            <AuthStack.Screen
                component={UserRegistrationScreen}
                name="UserRegistration"
            />
            <AuthStack.Screen component={UserLoginScreen} name="UserLogin" />
        </AuthStack.Navigator>
    )
}
