<script setup>

import { useStore } from 'vuex'

const store = useStore()

const { username } = defineProps(['username'])

const handleLogout = async () => {
    store.dispatch('logout')
}

</script>

<template>
    <nav class="hidden lg:flex">
        <ul class="text-theme-3rd lg:flex space-x-16 items-center text-[18px] leading-6 font-normal lg:mr-32">
            <li class="ml-6">
                <router-link class="cursor-pointer hover:text-pink-700 transition-all delay-200" to="/">Home</router-link>
            </li>
            <li class="ml-6">
                <router-link class="cursor-pointer hover:text-pink-700 transition-all delay-200"
                    to="/about">About</router-link>
            </li>
            <li>
                <router-link class="cursor-pointer hover:text-pink-700 transition-all delay-200"
                    to="/contactus">Contact</router-link>
            </li>
            <li>
                <router-link class="cursor-pointer hover:text-pink-700 transition-all delay-200"
                    to="/blog">Blog</router-link>
            </li>
            <li>
                <router-link class="cursor-pointer hover:text-pink-700 transition-all delay-200"
                    to="/Shop">Shop</router-link>
            </li>
            <li>
                <button v-if="username" v-on:click="handleLogout"
                    class="text-theme-3rd transition-all delay-100 border border-theme-3rd rounded-[16px] py-1 px-6 text-[18px] leading-6 hover:bg-theme-1st hover:text-pink-700">
                    <router-link class="cursor-pointer hover:text-pink-700 transition-all delay-200" to="/">
                        Logout
                    </router-link>
                </button>
                <button v-if="!username"
                    class="text-theme-3rd transition-all delay-100 border border-theme-3rd rounded-[16px] py-1 px-6 text-[18px] font-medium leading-6 hover:bg-theme-1st hover:text-pink-700">
                    <router-link class="cursor-pointer hover:text-pink-700 transition-all delay-200" to="/login">
                        Account
                    </router-link>
                </button>
            </li>
            <li>
                <button v-if="username"
                    class="text-theme-3rd transition-all delay-100 rounded-[16px] py-1 px-6 text-[18px] leading-6 hover:bg-theme-1st hover:text-pink-700 text-nowrap">
                    <router-link class="cursor-pointer hover:text-pink-700 transition-all delay-200" to="/">
                        <span> Hi, {{ username }} </span>
                    </router-link>
                </button>
            </li>
        </ul>
    </nav>
</template>

