import {createApp} from 'vue'
import './index.css'

import App from './App.vue'
import router from './routes/browser'
import store from './store/index'
import 'vue3-toastify/dist/index.css'
import Vue3Toasity from 'vue3-toastify'
import axios from './plugins/axios'

createApp(App).use(router).use(store).use(Vue3Toasity).provide(axios).mount('#app')
