import React, { useContext } from 'react'
import { Text, Heading, Box, Flex, Icon, Badge } from 'native-base'
import { Feather } from '@expo/vector-icons'
// Custom Imports
import { LogoutForm } from '../modules/AuthForms/LogoutForm'
import { Pressable } from 'react-native'

export const AccountScreen = ({ navigation, route }) => {
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Flex direction={'row'} justifyContent="space-between">
                <Heading>Account Screen</Heading>
                {route.params.accountType == 'student' ? (
                    <Pressable
                        onPress={() =>
                            navigation.navigate('AssociationRequests')
                        }
                    >
                        <Badge
                            colorScheme={'danger'}
                            rounded="full"
                            mb={-4}
                            mr={-2}
                            zIndex={1}
                            variant="solid"
                            alignSelf={'flex-end'}
                            _text={{ fontSize: 8 }}
                        >
                            2
                        </Badge>
                        <Icon
                            size={6}
                            color={'custom_primary.500'}
                            as={<Feather name="bell" />}
                        />
                    </Pressable>
                ) : null}
            </Flex>

            <LogoutForm />
        </Box>
    )
}
