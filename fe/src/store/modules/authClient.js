
import { authClientServices } from '../services/authServices'
import router from '../../routes/browser'
import { toast } from 'vue3-toastify'

const initialState = { status: { loggedIn: false, loggingIn: false }, user: null, token: null, options: {} }

export const authClient = {
    state: initialState,
    actions: {
        async login({ dispatch, commit }, data) {
            commit('loginRequest', data.username)
            const response = await authClientServices.LOGIN(data)
            // console.log(response)
            const status = response ? (response.data ? (response.data.code ? response.data.code : null) : null) : null
            if (status == 200 || status == 201) {
                const user = response ? (response.data ? (response.data.metadata ? (response.data.metadata.user ? response.data.metadata.user : null) : null) : null) : null
                const token = response ? (response.data ? (response.data.metadata ? (response.data.metadata.token ? response.data.metadata.token : null) : null) : null) : null
                const clientInfo = { id: user._id, username: user.username, token: token.accessToken ? token.accessToken : null }
                // console.log(token)
                // console.log(clientInfo)
                commit('loginSuccess', clientInfo);
                // router.push('/')
                setTimeout(() => { location.reload(); }, 2000)
                
            }
            if (!(status == 200 || status == 201)) {
                commit('loginFailure');
                toast(`login failed !!! please check your information!!!`)
                setTimeout(() => { window.location.reload() }, 2000)
            }
        },
        async logout({ commit }, data) {
            await authClientServices.LOGOUT(data)
            commit('logout')
            location.reload();
        },
        async signUp({ dispatch, commit }, data) {
            // commit('signUpRequest', data.email)
            const response = await authClientServices.SIGNUP(data)
            // console.log(response)
            const status = response ? (response.data ? (response.data.code ? response.data.code : null) : null) : null
            if (status == 200 || status == 201) {
                const user = response ? (response.data ? (response.data.metadata ? (response.data.metadata.user ? response.data.metadata.user : null) : null) : null) : null
                const clientInfo = { id: user._id, username: user.username }
                commit('signUpSuccess', clientInfo);
                toast(`signup success account with email: ${data.email} !!! please login!!!`)
                router.push('/login')
            }
            if (!(status == 200 || status == 201)) { commit('signUpFailure'); router.push('/signup') }
        },
        async getVerifyCodeSignUp({ dispatch, commit }, data) {
            // commit('getVerifyCodeSignUpRequest')
            const response = await authClientServices.GET_VERIFY_CODE_SIGN_UP(data)
            // console.log(response)
            const message = response ? (response.data? ( response.data.messageId ? (response.data.messageId.messageId ? response.data.messageId.messageId : null) : null) : null) : null
            const status = response ? (response.data? ( response.data.messageId ? (response.data.messageId.status ? response.data.messageId.status : null) : null) : null) : null
            // console.log(status)
            if (status == 'ok') {
                toast(`sent code to email!!! please check your mailbox`);
                // commit('getVerifyCodeSignUpSuccess')
            }
            if (status != 'ok') {
                toast(`problem when check and send!!! please try again!!!`);
                setTimeout(() => { window.location.reload() }, 4000)
            }
        },
        async getVerifyCodeForgotPassword({ dispatch, commit }, data) {
            // commit('getVerifyCodeForgotPassword')
            const response = await authClientServices.GET_VERIFY_CODE_FORGOT_PASSWORD(data)
            // console.log(response)
            const message = response ? (response.data? ( response.data.messageId ? (response.data.messageId.messageId ? response.data.messageId.messageId : null) : null) : null) : null
            const status = response ? (response.data? ( response.data.messageId ? (response.data.messageId.status ? response.data.messageId.status : null) : null) : null) : null
            // console.log(status)
            if (status == 'ok') {
                toast(`${message}`);
                toast(`sent code to email!!! please check your mailbox`);
                // commit('getVerifyCodeSignUpSuccess') 
            }
            if (status != 'ok') {
                toast(`${message}`);
                toast(`problem when check and send!!! please try again!!!`);
                setTimeout(() => { window.location.reload() }, 4000)
            }
        },
        async forgotPassword({ dispatch, commit }, data) {
            const response = await authClientServices.FORGOT_PASSWORD(data)
            const status = response ? (response.data ? (response.data.code ? response.data.code : null) : null) : null
            if (status == 200 || status == 201) {
                const user = response ? (response.data ? (response.data.metadata ? (response.data.metadata.user ? response.data.metadata.user : null) : null) : null) : null
                const clientInfo = { id: user._id, username: user.username }
                commit('forgotPasswordSuccess', clientInfo);
                router.push('/login')
            }
            if (!(status == 200 || status == 201)) {
                router.push('/signup')
            }
        },

    },
    mutations: {
        loginRequest(state, user) { state.status.loggingIn = true; state.user = user; },
        loginSuccess(state, clientInfo) {
            state.status.loggedIn = true; state.status.loggingIn = false; state.user = clientInfo; state.token = clientInfo.token;
            localStorage.setItem('userInfo', JSON.stringify(clientInfo))
        },
        loginFailure(state) { state = initialState },
        logout(state) { state = initialState; localStorage.removeItem('userInfo'); },
        getVerifyCodeSignUpRequest(state) { state.options = { getVerifyCode: `in processing` } },
        getVerifyCodeSignUpSuccess(state) { state.options = { getVerifyCode: `done` } },
        getVerifyCodeSignUpFailure(state) { state.options = { getVerifyCode: `failure` } },

        signUpRequest(state) { },
        signUpSuccess(state, clientInfo) {
            state.user = clientInfo.user;
            localStorage.setItem('userInfo', JSON.stringify(clientInfo))
        },
        signUpFailure(state) { },

        forgotPasswordSuccess(state, clientInfo) {
            state.user = clientInfo.user;
            localStorage.setItem('userInfo', JSON.stringify(clientInfo))
        },
    }
}





