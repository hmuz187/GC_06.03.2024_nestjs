
<template>
    <section class='bg-pink-100 opacity-90 mx-auto px-[21px] py-[20px] lg:pt-[131px] lg:pb-[154px]'>
        <div class='text-center mb-[70px]'>
            <h3 class='text-xl font-bold text-theme-1st uppercase'>Our Services</h3>
            <h2 class='text-3xl'>Services We Provide</h2>
        </div>
        <div class='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Service v-for="service in servicesData" :key="service.id" :service="service" />
        </div>
    </section>
</template>

<script setup>
import stick001 from '../../../../assets/img/stick_001.png'
import stick002 from '../../../../assets/img/stick_002.png'
import stick003 from '../../../../assets/img/stick_003.png'
import Service from './Service.vue';


const servicesData = [
    {
        id: 1,
        name: 'Đi sinh',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: stick001
    },
    {
        id: 2,
        name: 'Chăm sóc thai kì',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: stick002
    },
    {
        id: 3,
        name: 'Chuẩn bị mang thai',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        img: stick003
    },
]
</script>