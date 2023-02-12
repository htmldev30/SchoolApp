import 'react-native-gesture-handler' // As per documentation, goes at very top
import React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { RootStackScreen } from './src/routes/rootNavigation'
// UI
import { NativeBaseProvider, extendTheme } from 'native-base'

const customColorTheme = {
    custom_white: {
        DEFAULT: '#FFFFFF',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#FFFFFF',
        400: '#FFFFFF',
        500: '#FFFFFF',
        600: '#E3E3E3',
        700: '#C7C7C7',
        800: '#ABABAB',
        900: '#8F8F8F',
    },
    custom_dark: {
        DEFAULT: '#43515C',
        50: '#9EADB8',
        100: '#92A3B0',
        200: '#7B8F9F',
        300: '#657B8B',
        400: '#546674',
        500: '#43515C',
        600: '#2B343C',
        700: '#14181B',
        800: '#000000',
        900: '#000000',
    },
    custom_green: {
        DEFAULT: '#CCD5AE',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#EEF1E4',
        400: '#DDE3C9',
        500: '#CCD5AE',
        600: '#B5C289',
        700: '#9DAF64',
        800: '#80904B',
        900: '#5F6B38',
    },
    custom_lightGreen: {
        DEFAULT: '#E9EDC9',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#FFFFFF',
        400: '#F5F7E8',
        500: '#E9EDC9',
        600: '#D8DF9F',
        700: '#C7D175',
        800: '#B6C34B',
        900: '#94A035',
    },
    custom_light: {
        DEFAULT: '#FEFAE0',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#FFFFFF',
        400: '#FFFFFF',
        500: '#FEFAE0',
        600: '#FCF1AA',
        700: '#FAE873',
        800: '#F9E03D',
        900: '#F6D608',
    },
    custom_muted: {
        DEFAULT: '#FAEDCD',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#FFFFFF',
        400: '#FEFAF2',
        500: '#FAEDCD',
        600: '#F5DB9A',
        700: '#F0C867',
        800: '#EBB634',
        900: '#D29B15',
    },
    custom_brown: {
        DEFAULT: '#D4A373',
        50: '#FFFFFF',
        100: '#FAF5F0',
        200: '#F1E1D1',
        300: '#E7CCB1',
        400: '#DEB892',
        500: '#D4A373',
        600: '#C78748',
        700: '#A46B32',
        800: '#794F25',
        900: '#4E3318',
    },
}

const theme = extendTheme({
    colors: customColorTheme,
    components: {
        Input: {
            baseStyle: {
                backgroundColor: customColorTheme.custom_white[500],
                borderColor: customColorTheme.custom_dark[100],
                _focus: {
                    borderColor: customColorTheme.custom_dark[500],
                },
            },
        },
    },
})
export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <NavigationContainer>
                <RootStackScreen isAuthenticated={false} />
            </NavigationContainer>
        </NativeBaseProvider>
    )
}
