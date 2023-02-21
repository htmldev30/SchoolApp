import React, { useContext } from 'react'
import {
    Text,
    Heading,
    Box,
    VStack,
    Badge,
    Flex,
    Spacer,
    HStack,
    Icon,
    Pressable,
} from 'native-base'
import { Feather } from '@expo/vector-icons'

// Custom Imports
import { UserAssociationRequestContext } from '../../hooks/contexts/UserAssociationRequestProvider'
import { AssociateUserAcceptRejectForm } from '../../modules/AssociateUsersForms/AssociateUserAcceptRejectForm'

export const AssociationRequestsScreen = () => {
    const { associationRequests, getAssociationRequests } = useContext(
        UserAssociationRequestContext
    )
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Heading>Association Requests</Heading>
            <VStack mt={4} space={4}>
                {associationRequests
                    ? associationRequests.map((associationRequest, index) => {
                          return (
                              <Flex
                                  key={index}
                                  direction={'row'}
                                  justifyContent="space-between"
                              >
                                  <Text>
                                      {
                                          associationRequest
                                              .associationRequestUserFullName
                                              .firstName
                                      }
                                      {
                                          associationRequest
                                              .associationRequestUserFullName
                                              .lastName
                                      }
                                  </Text>
                                  <AssociateUserAcceptRejectForm
                                      associateRequestId={
                                          associationRequest.associateRequestId
                                      }
                                      getAssociationRequests={
                                          getAssociationRequests
                                      }
                                  />
                              </Flex>
                          )
                      })
                    : null}
            </VStack>
        </Box>
    )
}
