import React, { useState, useEffect } from 'react'
import { Box, Modal, Heading, Flex, IconButton, ScrollView } from 'native-base'
// Customs
import { AssociateUserForm } from '../../modules/AssociateUsersForms/AssociateUserForm'
import { CustomAvatarWithBG } from '../../components/customAvatarWithBG'
import { Feather } from '@expo/vector-icons'
import { getUserInfo } from '../../shared/asyncStorage'

// Custom Imports
export const AssociatedUsersScreen = () => {
    const [showModal, setShowModal] = useState(false)
    const [associatedUsers, setAssociatedUsers] = useState(null)
    useEffect(() => {
        getAssociatedUsers()
    }, [])
    const getAssociatedUsers = async () => {
        const { associatedUsers } = await getUserInfo()
        setAssociatedUsers(associatedUsers)
    }
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Flex direction={'row'} justifyContent="space-between">
                <Heading>My Students</Heading>
                <IconButton
                    onPress={() => setShowModal(true)}
                    size={'lg'}
                    variant="ghost"
                    _pressed={{
                        bg: 'custom_primary.100',
                    }}
                    _icon={{
                        as: Feather,
                        color: 'custom_primary.500',
                        name: 'user-plus',
                    }}
                />
            </Flex>
            <ScrollView showsVerticalScrollIndicator={false}>
                {associatedUsers.map((associatedUser, index) => {
                    return (
                        <CustomAvatarWithBG
                            key={index}
                            associatedUserName={associatedUser}
                        />
                    )
                })}
            </ScrollView>

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                size="xl"
                avoidKeyboard
            >
                <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>Add Your Students</Modal.Header>
                    <Modal.Body>
                        <AssociateUserForm />
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </Box>
    )
}
