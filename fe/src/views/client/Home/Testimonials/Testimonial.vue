<template>
    <div class="shadow-box-shadow rounded-[18px] px-8 py-9">
        <p class="mb-[38px] leading-[21px] text-black">{{ review.review }}</p>
        <div class="flex gap-[14px] items-center">
            <img class="w-[75px] rounded-full ring ring-theme-2nd ring-offset-2" :src="review.img" alt="" />
            <div>
                <h3>{{ review.name }}</h3>
                <p>{{ review.location }}</p>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const { review } = defineProps(['review']);
</script>
  