import React, { useState, useContext } from 'react'
import { VStack, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'
import axios from 'axios'

// Custom Imports
import { axiosClient } from '../../../axiosClient'
import { CustomButton } from '../../components/customButton'
import { CustomInput } from '../../components/customInput'
import { getUserInfo } from '../../shared/asyncStorage'

export const AssociateUserForm = () => {
    const [userToAssociateEmail, setUserToAssociateEmail] = useState('')
    const handleSubmit = async () => {
        const userInfo = await getUserInfo()
        console.log(userInfo)

        await axiosClient
            .post('/v1/userAssociate/requestAssociation', {
                requesterEmail: userInfo.email,
                recipientEmail: userToAssociateEmail,
            })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <VStack space={2.5} w="100%" pt="4">
            <CustomInput
                type="email"
                size="lg"
                placeHolder="Email"
                onChangeText={(newEmailText) =>
                    setUserToAssociateEmail(newEmailText)
                }
                InputLeftElement={<Icon as={<Feather name="mail" />} />}
            />

            <CustomButton label="Add Student" onPress={handleSubmit} />
        </VStack>
    )
}
