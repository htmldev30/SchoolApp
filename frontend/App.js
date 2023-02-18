import 'react-native-gesture-handler' // As per documentation, goes at very top
import React from 'react'
// UI
import { NativeBaseProvider, extendTheme } from 'native-base'
// Contexts
import { UserAuthProvider } from './src/hooks/contexts/UserAuthProvider'
// Customs
import Index from './index'
const customColorTheme = {
    // 500 is the default color for each color
    custom_primary: {
        DEFAULT: '#6D466B',
        50: '#C5A5C4',
        100: '#BD99BC',
        200: '#AD80AB',
        300: '#9D679B',
        400: '#865683',
        500: '#6D466B',
        600: '#4B3049',
        700: '#291A28',
        800: '#070406',
        900: '#000000',
    },
    custom_secondary: {
        DEFAULT: '#B49FCC',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#F2EFF6',
        300: '#DED4E8',
        400: '#C9BADA',
        500: '#B49FCC',
        600: '#977AB9',
        700: '#7B57A4',
        800: '#5F447F',
        900: '#44305B',
    },
    custom_darkPurple: {
        DEFAULT: '#412234',
        50: '#B16A93',
        100: '#AA5C89',
        200: '#914C74',
        300: '#773E5F',
        400: '#5C3049',
        500: '#412234',
        600: '#1C0F17',
        700: '#000000',
        800: '#000000',
        900: '#000000',
    },
    custom_muted: {
        DEFAULT: '#EAD7D7',
        50: '#FFFFFF',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#FFFFFF',
        400: '#F8F2F2',
        500: '#EAD7D7',
        600: '#D7B2B2',
        700: '#C38D8D',
        800: '#B06969',
        900: '#934D4D',
    },
    custom_mutedDark: {
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
    custom_darkGray: {
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
}

const theme = extendTheme({
    colors: customColorTheme,
    components: {
        Heading: {
            baseStyle: {
                color: customColorTheme.custom_primary[500],
            },
        },
        Text: {
            baseStyle: {
                color: customColorTheme.custom_primary[600],
            },
        },
        Button: {
            baseStyle: {
                borderColor: customColorTheme.custom_secondary[500],
                borderRadius: 12,
                height: 12,
            },
        },
        Input: {
            baseStyle: {
                backgroundColor: customColorTheme.custom_white[500],
                borderRadius: 8,
                height: 12,
                borderColor: customColorTheme.custom_secondary[300],
                _focus: {
                    borderColor: customColorTheme.custom_secondary[600],
                },
            },
        },
        Icon: {
            baseStyle: {
                size: 5,
                ml: '2',
                color: customColorTheme.custom_muted[500],
            },
        },
    },
})
export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <UserAuthProvider>
                <Index />
            </UserAuthProvider>
        </NativeBaseProvider>
    )
}
