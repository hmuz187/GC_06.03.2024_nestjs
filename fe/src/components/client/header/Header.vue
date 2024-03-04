<script setup>
import logo  from '../../../assets/images/logo.png';
import NavFull from './NavFull.vue';
import NavMobile from './NavMobile.vue';

const {username} = defineProps(['username'])
</script>

<template>
    <div class='relative scroll-smooth h-full'>
        <header class='active  p-4 lg:px-0 w-full fixed z-10 transition-all duration-300 bg-theme-2nd'>
            <div class='container mx-auto flex items-center justify-between'>
                <a href="/"><img class='h-[50px] ' :src="logo" alt="logo-img" /></a>
                <NavFull :username = "username"/>
                <NavMobile :username = "username" />
            </div>
        </header>

    </div>
</template>

<style scoped></style>
