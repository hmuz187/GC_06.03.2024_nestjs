import { createStore } from 'vuex'

import {authClient} from './modules/authClient'
import {alert} from './modules/alert'

const post = {state:{hello:`minh hy`}}

const store = createStore({
    modules: {
        authClient,
        alert,
        post
        // checkAdmin,
        // checkAuth,
    }
})

export default store