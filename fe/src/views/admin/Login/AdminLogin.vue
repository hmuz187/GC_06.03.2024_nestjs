<template>
    <!-- component -->
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
            <h1 class="font-bold text-gray-600 text-center text-2xl mb-5">DApp Login </h1>
            <div class="bg-white shadow-xl w-full rounded-lg divide-y divide-gray-200">
                <div class="px-5 py-7">
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                    <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" v-model="email" />
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                    <div class="relative">
                        <input :type="showPassword ? `text` : `password`"
                            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" v-model="password" />

                        <!-- Biểu tượng Eye tương ứng -->
                        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pb-4">
                            <EyeOutlined v-if="showPassword == true" class="cursor-pointer" v-on:click="setShowPassword" />
                            <EyeInvisibleOutlined v-if="showPassword == false" class="cursor-pointer"
                                v-on:click="setShowPassword" />
                        </div>
                    </div>
                    <button type="button"
                        class="transition duration-200 bg-pink-500 hover:bg-pink-600 focus:bg-pink-700 focus:shadow-sm focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                        v-on:click="handleLogin">
                        <div v-if="!isLoading"> <span class="inline-block mr-2">Login</span> <svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                class="w-4 h-4 inline-block">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg></div>
                        <div v-if="isLoading"> <span class="inline-block mr-2">
                                <LoadingOutlined class="font-extrabold" />
                            </span> </div>
                    </button>
                </div>
                <div class="py-5">
                    <div class="grid grid-cols-2 gap-1">
                        <div class="text-center sm:text-left whitespace-nowrap">
                            <router-link to="/forgotPassword">
                                <button
                                    class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                    </svg>
                                    <span class="inline-block ml-1">Forgot Password</span>
                                </button>
                            </router-link>
                        </div>
                        <div class="text-center sm:text-right  whitespace-nowrap mr-5">
                            <router-link to="/signup">
                                <button type="button"
                                    class="transition duration-200 bg-pink-200 hover:bg-pink-300 focus:bg-pink-400 focus:shadow-sm focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 text-gray-700 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                    <span class="inline-block mr-2">Signup</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" class="w-4 h-4 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="py-5">
                <div class="grid grid-cols-2 gap-1">
                    <div class="text-center sm:text-left whitespace-nowrap">
                        <router-link to="/">
                            <button
                                class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span class="inline-block ml-1">Back to home</span>
                            </button>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import { EyeOutlined, EyeInvisibleOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

import {isAdmin} from '../../../auth/isAdmin'
import {toast} from 'vue3-toastify'

const email = ref('')
const password = ref('')
const isLoading = ref(false)

const store = useStore()
const router = useRouter()

const showPassword = ref(false)
const setShowPassword = () => {
    showPassword.value = !showPassword.value
}

const handleLogin = () => {
    const dataInput = { email: email.value, password: password.value }
    isLoading.value = !isLoading.value
    store.dispatch('login', dataInput)
    if(isAdmin()) {router.push('/admin/dashboard')}
    if(!isAdmin()) {toast(`Please note that:: this is admin wall!!! if you're not admin, please back to hompage!!!`)}
}



</script>
