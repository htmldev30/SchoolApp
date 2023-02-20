import React, { useContext, useState } from 'react'
import { Text, VStack, Box, Modal, Heading, Center } from 'native-base'
import { CustomButton } from '../../components/customButton'
import { AssociateUserForm } from '../../modules/AssociateUsersForms/AssociateUserForm'
import { CustomAvatarWithBG } from '../../components/customAvatarWithBG'
// Custom Imports
export const AssociatedUserScreen = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <Box flex="1" m="4" p="2" safeAreaTop>
            <Heading>My Students</Heading>

            <CustomAvatarWithBG />

            <VStack space={2.5} w="100%" pt="4" px="4">
                <CustomButton
                    label="Add Your Students"
                    onPress={() => setShowModal(true)}
                />
            </VStack>

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
