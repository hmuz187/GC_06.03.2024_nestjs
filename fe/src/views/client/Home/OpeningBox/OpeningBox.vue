<template>
    <div :class="`bg-pink-200 text-gray-700 pt-5 pb-8 pl-[18px] pr-[13px] md:py-14 md:px-8 shadow-xl ${bgClass} flex gap-[22px]
        items-center flex-col md:flex-row`">
        <img :src="icon" alt="" />
        <div>
            <h2 class="font-bold text-[22px] mb-[15px] leading-7">{{ name }}</h2>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
const {card} = defineProps(['card'])
const { bgClass, icon, name, description } = card
</script>