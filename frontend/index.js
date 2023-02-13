import 'react-native-gesture-handler' // As per documentation, goes at very top
import React, { useContext } from 'react'
// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { RootStackScreen } from './src/routes/rootNavigation'
// Contexts
import { UserAuthContext } from './src/hooks/contexts/UserAuthProvider'
export default function Index() {
    const { isAuthenticated } = useContext(UserAuthContext)
    return (
        <NavigationContainer>
            <RootStackScreen isAuthenticated={isAuthenticated} />
        </NavigationContainer>
    )
}
