<template>
    <div>
        <router-link :to={link}
            class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
            <component :is="icon" class="w-6 h-6 fill-current inline-block" />
            <span> {{ name ? name : 'no name'}}</span>
        </router-link>
        <h1>kgjyh</h1>
    </div>
</template>

<script setup>
const sidebarData  = defineProps(['SidebarTitle'])
const { name, icon, link } = sidebarData
console.log(link)
// const link = '/admin/dashboard'
console.log(sidebarData)
</script>