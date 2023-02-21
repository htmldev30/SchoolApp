import React, { useContext, useState } from 'react'
import { Text, Heading, Box, Flex, Icon, Badge, Pressable } from 'native-base'
import { Feather } from '@expo/vector-icons'
// Custom Imports
import { LogoutForm } from '../modules/AuthForms/LogoutForm'
import { UserAssociationRequestContext } from '../hooks/contexts/UserAssociationRequestProvider'

export const AccountScreen = ({ navigation, route }) => {
    const numAssociationRequests = () => {
        const { associationRequests } = useContext(
            UserAssociationRequestContext
        )
        if (associationRequests) {
            return (
                <Pressable
                    onPress={() => navigation.navigate('AssociationRequests')}
                >
                    {associationRequests.length > 0 ? (
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
                            {associationRequests.length}
                        </Badge>
                    ) : null}
                    <Icon
                        size={6}
                        color={'custom_primary.500'}
                        as={<Feather name="bell" />}
                    />
                </Pressable>
            )
        }
    }

    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Flex direction={'row'} justifyContent="space-between">
                <Heading>Account Screen</Heading>
                {route.params.accountType == 'student'
                    ? numAssociationRequests()
                    : null}
            </Flex>

            <LogoutForm />
        </Box>
    )
}
