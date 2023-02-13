// Code Adapted From https://daily.dev/blog/a-guide-to-writing-clean-api-calls-using-axios by Agustinus Theodorus
// Agustinus Theodorus: March, 9th, 2021
// Mohammed Hit: February, 12th, 2023
import axios from 'axios'

export const axiosClient = axios.create({
    baseURL: `http://127.0.0.1:3000`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})
