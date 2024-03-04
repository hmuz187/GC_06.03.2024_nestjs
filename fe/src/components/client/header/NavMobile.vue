

<template>
    <nav class="lg:hidden relative z-20">
        <!-- menu icons -->
        <button v-on:click="toggleMenu">
            <span class="content-none absolute -top-1 -right-1 w-4 h-4 p-4 rounded-sm"></span>
            <BarsOutlined class="text-white text-3xl relative" />
        </button>
        <!-- nav list -->
        <ul :class="{ 'right-0': isOpen, 'right-full': !isOpen }"
            class="bg-theme-1st fixed top-0 w-full h-screen text-theme-3rd transition-all flex flex-col justify-center items-center space-y-8 text-lg ">
            <!-- close button -->
            <button v-on:click="toggleMenu" class="absolute top-6 left-6">
                <BarsOutlined class="text-white text-3xl" />
            </button>
            <li class="hover:text-pink-700 text-2xl font-bold"><router-link @click.native="toggleMenu" to="/">Home</router-link></li>
            <li class="hover:text-pink-700 text-2xl font-bold"><router-link @click.native="toggleMenu" to="/about">About</router-link></li>
            <li class="hover:text-pink-700 text-2xl font-bold"><router-link @click.native="toggleMenu" to="/contactus">Contact</router-link></li>
            <li class="hover:text-pink-700 text-2xl font-bold"><router-link @click.native="toggleMenu" to="/blog">Blog</router-link></li>
            <li class="hover:text-pink-700 text-2xl font-bold"><router-link @click.native="toggleMenu" to="/shop">Shop</router-link></li>
            <li>
                <button v-if="username" v-on:click="handleLogout"
                    class="text-theme-3rd border border-theme-3rd rounded-[26px] py-3 px-6 text-xl leading-6 hover:bg-theme-1st hover:text-pink-700 font-bold"> <li class="hover:text-pink-700 text-2xl font-bold"><router-link @click.native="toggleMenu" to="/">Logout</router-link></li></button>
                <button v-if="!username"
                    class="text-theme-3rd border border-theme-3rd rounded-[26px] py-3 px-6 text-xl leading-6 hover:bg-theme-1st hover:text-pink-700 font-bold"> <li class="hover:text-pink-700 text-2xl font-bold"><router-link @click.native="toggleMenu" to="/login">Account</router-link></li></button>
            </li>
            <li>
                <button v-if="username"
                    class="text-theme-3rd text-nowrap rounded-[26px] py-3 px-6 text-xl leading-6 hover:bg-theme-1st hover:text-pink-700 font-bold"> <li class="hover:text-pink-700 text-2xl font-bold"><router-link @click.native="toggleMenu" to="/">Hi, {{ username }}</router-link></li></button>
            </li>
        </ul>
    </nav>
</template>


<script setup>
import { BarsOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useStore } from 'vuex'


const isOpen = ref(false)

const toggleMenu = () => {
    console.log(isOpen.value)
    isOpen.value = isOpen.value == false ? true : false;
}


const store = useStore()

const { username } = defineProps(['username'])

const handleLogout = async () => {
    store.dispatch('logout')
}


</script>