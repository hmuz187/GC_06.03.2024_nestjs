import { createLogger } from "vuex";
import axios from "../plugins/axios";

// const clientPath = '/v1/acess'
// const baseClient = 'http://localhost:2000/v1/acess'


export const signUp = async (data) => {
    try {
        console.log(data)
        const response = await axios({
            url: `http://localhost:2000/v1/access/signUp`,
            method: 'post',
            data
        })
        return (response)
    } catch (error) {
        return (error.response)
    }
}

export const getVerifyCodeSignup = async (data) => {
    try {
        // const url1 = `http://localhost:2000/v1/access/signup/getVerifyCode` //OK
        // const url2 = `${clientPath}/signup/getVerifyCode`   //not found
        // const url3 = `${baseClient}/signup/getVerifyCode`   //not found
        const response = await axios({
            url: `http://localhost:2000/v1/access/signup/getVerifyCode`,
            method: 'post',
            data
        })
        return (response)
    } catch (error) {
        return (error.response)
    }
}


export const getVerifyCodeForgotPassword = async (data) => {
    try {
        console.log(data)
        const response = await axios({
            url: `http://localhost:2000/v1/access/forgotPassword/getVerifyCode`,
            method: 'post',
            data
        })
        return (response)
    } catch (error) {
        return (error.response)
    }
}


export const forgotPassword = async (data) => {
    try {
        console.log(data)
        const response = await axios({
            url: `http://localhost:2000/v1/access/forgotPassword`,
            method: 'post',
            data
        })
        console.log(response)
        return (response)
    } catch (error) {
        return (error.response)
    }
}

// alex.spencer0209@gmail.com

export const logIn = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url: `http://localhost:2000/v1/access/signin`,
            method: 'post',
            data
        })
        return (response)
    } catch (error) {
        return (error.response)
    }
}




export const logOut = async (data) => {
    try {
        // console.log(data)
        const response = await axios({
            url: `http://localhost:2000/v1/access/logout`,
            method: 'post',
            data
        })
        return (response)
    } catch (error) {
        return (error.response)
    }
}



