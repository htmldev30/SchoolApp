import React, { useState, useContext } from 'react'
import { VStack, Icon } from 'native-base'
import { Feather } from '@expo/vector-icons'
import axios from 'axios'

// Custom Imports
import { axiosClient } from '../../../axiosClient'
import { CustomButton } from '../../components/customButton'
import { CustomInput } from '../../components/customInput'
import { getUserJWTToken, getUserInfo } from '../../shared/asyncStorage'

export const AssociateUserForm = () => {
    const [userToAssociateFirstName, setUserToAssociateFirstName] = useState('')
    const [userToAssociateLastName, setUserToAssociateLastName] = useState('')
    const [userToAssociateEmail, setUserToAssociateEmail] = useState('')
    const [userToAssociateGrade, setUserToAssociateGrade] = useState()
    const handleSubmit = async () => {
        const userInfo = await getUserInfo()
        await axiosClient
            .post('/v1/userAssociated/associateUser', {
                accountType: userInfo.accountType,
                userEmail: userInfo.email,
                usersToAssociate: [
                    {
                        userToAssociateFullName: {
                            firstName: userToAssociateFirstName,
                            lastName: userToAssociateLastName,
                        },
                        userToAssociateEmail: userToAssociateEmail,
                        userToAssociateGrade: userToAssociateGrade,
                    },
                ],
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
                type="name"
                size="lg"
                placeHolder="First Name"
                onChangeText={(newFirstNameText) =>
                    setUserToAssociateFirstName(newFirstNameText)
                }
                InputLeftElement={<Icon as={<Feather name="user" />} />}
            />
            <CustomInput
                type="name"
                size="lg"
                placeHolder="Last Name"
                onChangeText={(newLastNameText) =>
                    setUserToAssociateLastName(newLastNameText)
                }
                InputLeftElement={<Icon as={<Feather name="user" />} />}
            />
            <CustomInput
                type="email"
                size="lg"
                placeHolder="Email"
                onChangeText={(newEmailText) =>
                    setUserToAssociateEmail(newEmailText)
                }
                InputLeftElement={<Icon as={<Feather name="mail" />} />}
            />
            <CustomInput
                keyboardType="numeric"
                size="lg"
                placeHolder="Grade"
                onChangeText={(newGradeNum) =>
                    setUserToAssociateGrade(newGradeNum)
                }
                InputLeftElement={<Icon as={<Feather name="user" />} />}
            />
            <CustomButton label="Add Student" onPress={handleSubmit} />
        </VStack>
    )
}
