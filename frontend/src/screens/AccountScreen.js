import React, { useContext } from 'react'
import { Text, Heading, Box } from 'native-base'
// Custom Imports
import { LogoutForm } from '../modules/AuthForms/LogoutForm'
import { AssociatedUsersContext } from '../hooks/contexts/AssociatedUsersProvider'

export const AccountScreen = () => {
    const { associationRequests } = useContext(AssociatedUsersContext)
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Heading>Association Requests</Heading>
            {associationRequests
                ? associationRequests.map((associationRequest, index) => {
                      return (
                          <Text key={`${index}`}>
                              {associationRequest.associationRequestUserEmail}
                          </Text>
                      )
                  })
                : null}
            <LogoutForm />
        </Box>
    )
}
