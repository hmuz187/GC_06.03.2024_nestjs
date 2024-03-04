<script setup>
import { C_ClientFooter, C_ClientHeader } from '../../../components/client';
import { ref } from 'vue'


const userInfo = JSON.parse(localStorage.getItem('userInfo'))
const username = ref(userInfo ? (userInfo.username ? userInfo.username : null) : null)

</script>

<template>
    <div>
        <C_ClientHeader :username="username"/>
        <router-view class="min-h-screen" />
        <C_ClientFooter />
    </div>
</template>

<style scoped></style>
