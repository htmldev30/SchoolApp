import AsyncStorage from '@react-native-async-storage/async-storage'

export interface IUser {
    accountType: string
    grade?: number
    fullName: {
        firstName: string
        lastName: string
    }
    username: string
    email: string
    avatarName: string
    associateUsers: []
    school: string
}
export const storeUserJWTToken = async (userJWTToken: string) => {
    try {
        await AsyncStorage.setItem('userJWTToken', userJWTToken)
        await setPreviouslyAuthenticated('true')
    } catch (error) {
        console.log(error)
    }
}

export const getUserJWTToken = async () => {
    try {
        const userJWTToken = await AsyncStorage.getItem('userJWTToken')
        return userJWTToken !== null ? userJWTToken : null
    } catch (error) {
        console.log(error)
    }
}

export const storeUserInfo = async (user: IUser) => {
    try {
        const userInfoJSON = JSON.stringify(user)
        await AsyncStorage.setItem('userInfo', userInfoJSON)
    } catch (error) {
        console.log(error)
    }
}

export const getUserInfo = async () => {
    try {
        const userInfoJSON = await AsyncStorage.getItem('userInfo')
        return userInfoJSON !== null ? JSON.parse(userInfoJSON) : null
    } catch (error) {
        console.log(error)
    }
}

export const setPreviouslyAuthenticated = async (authenticated: string) => {
    try {
        await AsyncStorage.setItem('isPreviouslyAuthenticated', authenticated) // "false" is value inside the storage
    } catch (error) {
        console.log(error)
    }
}

export const getPreviouslyAuthenticated = async (): Promise<
    boolean | undefined
> => {
    try {
        const isPreviouslyAuthenticated = await AsyncStorage.getItem(
            'isPreviouslyAuthenticated'
        )
        if (isPreviouslyAuthenticated == 'true') {
            return true
        }
        return false
    } catch (error) {
        console.log(error)
    }
}
