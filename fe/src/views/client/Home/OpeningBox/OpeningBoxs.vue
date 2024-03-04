<template>
    <section class='bg-pink-50 opacity-90 mx-auto px-[40px] pb-[100px]'>
        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <OpeningBox v-for="card in openingBoxData" :key="card.id" :card="card" />
        </div>
    </section>
</template>


<script setup>

import clock from '../../../../assets/icons/clock.svg'
import marker from '../../../../assets/icons/marker.svg'
import phone from '../../../../assets/icons/phone.svg'
import OpeningBox from './OpeningBox.vue';


const openingBoxData = [
    {
        id: 1,
        name: 'Opening Hours',
        description: 'Open 9.00 am to 5.00pm everyday',
        icon: clock,
        bgClass: 'bg-gradient-to-r from-theme-2nd to-theme-1st rounded-[14px]'
    },
    {
        id: 2,
        name: 'Our Locations',
        description: 'Open 9.00 am to 5.00pm everyday',
        icon: marker,
        bgClass: 'bg-gradient-to-r from-theme-2nd to-theme-1st rounded-[14px]'
    },
    {
        id: 3,
        name: 'Contact Us',
        description: 'Open 9.00 am to 5.00pm everyday',
        icon: phone,
        bgClass: 'bg-gradient-to-r from-theme-2nd to-theme-1st rounded-[14px]'
    },
]


</script>