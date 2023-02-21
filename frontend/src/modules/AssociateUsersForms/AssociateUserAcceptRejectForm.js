import React, { useState, useContext } from 'react'
import { HStack, Pressable, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'

// Custom Imports
import { axiosClient } from '../../../axiosClient'
import { getUserInfo } from '../../shared/asyncStorage'

export const AssociateUserAcceptRejectForm = ({
    associateRequestId,
    getAssociationRequests,
}) => {
    const handleSubmit = async (associationStatus) => {
        const userInfo = await getUserInfo()
        await axiosClient
            .put('/v1/userAssociate/verifyAssociation', {
                associateRequestId: associateRequestId,
                status: associationStatus,
            })
            .then((res) => {
                getAssociationRequests()
            })
            .catch((err) => {
                console.log(err.response.data.error)
            })
    }
    return (
        <HStack space={2}>
            <Pressable onPress={() => handleSubmit('accept')}>
                <Icon
                    size={6}
                    color={'success.500'}
                    as={<Feather name="user-check" />}
                />
            </Pressable>

            <Pressable onPress={() => handleSubmit('reject')}>
                <Icon
                    size={6}
                    color={'danger.500'}
                    as={<Feather name="user-x" />}
                />
            </Pressable>
        </HStack>
    )
}
