import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackScreen } from './src/routes/rootNavigation'

export default function App() {
    return (
        <NavigationContainer>
            <RootStackScreen isAuthenticated={false} />
        </NavigationContainer>
    )
}
