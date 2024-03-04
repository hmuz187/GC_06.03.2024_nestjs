<script setup>
import HeaderClient from './header/Header.vue'

const {username} = defineProps(['username'])

</script>

<template>
    <div>
        <HeaderClient :username="username"/>
    </div>
</template>

<style scoped>
</style>
