import React, { useContext, useEffect } from 'react'

import { View, Heading, Box, VStack, Text } from 'native-base'
import { BackgroundCard } from '../../components/BackgroundCard'
import { UserAuthContext } from '../../hooks/contexts/UserAuthProvider'

// SVGS
import LandingParentSVG from '../../customAssets/landing/LandingParentSVG'
import LandingStudentSVG from '../../customAssets/landing/LandingStudentSVG'
import LandingTeacherSVG from '../../customAssets/landing/LandingTeacherSVG'
import { LandingScreenProps } from '../../routes/stacks/authStack'
// Base
import BaseScreen from '../BaseScreen'
import { UserAuthContextType } from '../../types/UserAuthTypes'

export const LandingScreen = ({ navigation }: LandingScreenProps) => {
    const { perviouslyAuthenticated } = useContext(
        UserAuthContext
    ) as UserAuthContextType

    useEffect(() => {
        perviouslyAuthenticated ? navigation.navigate('UserLogin') : null
    })
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <BaseScreen />
            <View>
                <Heading>Select</Heading>
                <Heading>user type</Heading>
            </View>
            <View mt="16">
                <VStack space={2}>
                    <BackgroundCard
                        userType="Parent"
                        svg={<LandingParentSVG />}
                        onPress={() =>
                            navigation.navigate('UserRegistrationSchool', {
                                accountType: 'parent',
                            })
                        }
                    />
                    <BackgroundCard
                        userType="Student"
                        svg={<LandingStudentSVG />}
                        onPress={() =>
                            navigation.navigate('UserRegistrationSchool', {
                                accountType: 'student',
                            })
                        }
                    />
                    <BackgroundCard
                        userType="Teacher"
                        svg={<LandingTeacherSVG />}
                        onPress={() =>
                            navigation.navigate('UserRegistrationSchool', {
                                accountType: 'teacher',
                            })
                        }
                    />
                </VStack>
            </View>
        </Box>
    )
}
