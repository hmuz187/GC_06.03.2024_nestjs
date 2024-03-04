
<template>
    <div class="shadow-box-shadow rounded-[18px] flex flex-col items-center py-11 px-[56px]">
        <img :src="img" alt="" class="rounded-xl mb-[34px]" />
        <div class="text-center">
            <h2 class="font-semibold text-xl leading-7 mb-2 text-theme-3rd">{{name}}</h2>
            <p class='text-[#000] text-base font-normal leading-5'>{{description}}</p>
        </div>
    </div>
</template>

<script setup>
    const {service} = defineProps(['service'])
    const {img, name, description} = service
</script>