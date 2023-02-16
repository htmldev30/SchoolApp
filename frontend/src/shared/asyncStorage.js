import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeUserJWTToken = async (userJWTToken) => {
    try {
        await AsyncStorage.setItem('userJWTToken', userJWTToken)
    } catch (err) {
        console.log(err)
    }
}

export const storeUserInfo = async (user) => {
    try {
        const userInfoJSON = JSON.stringify(user)
        await AsyncStorage.setItem('userInfo', userInfoJSON)
    } catch (err) {
        console.log(err)
    }
}

export const getUserJWTToken = async () => {
    try {
        const userJWTToken = await AsyncStorage.getItem('userJWTToken')
        return userJWTToken !== null ? userJWTToken : null
    } catch (err) {
        console.log(err)
    }
}

export const getUserInfo = async () => {
    try {
        userInfoJSON = await AsyncStorage.getItem('userInfo')
        return userInfoJSON !== null ? JSON.parse(userInfoJSON) : null
    } catch (err) {
        console.log(err)
    }
}
