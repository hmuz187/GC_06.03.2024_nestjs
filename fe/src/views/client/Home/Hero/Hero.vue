<template>
    <section class="relative bg-pink-50 overflow-hidden">
      <img :src="herobg" class="absolute inset-0 object-cover w-full h-full opacity-20 hidden lg:block" alt="" />
      <div class="relative px-[21px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center pt-12 pb-20 lg:pt-52 lg:pb-60">
          <div class="lg:pl-[52px] order-2 lg:order-1">
            <h2 class="text-theme-3rd font-bold text-4xl leading-[50px] lg:text-5xl lg:leading-[65px] mb-[14px]">
              Your New Smile Starts Here
            </h2>
            <p class="font-normal text-theme-3rd text-base leading-[21px] mb-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the
            </p>
            <PrimaryButton btnText="GET STARTED" />
          </div>
          <div class="lg:pr-[38px] order-1 lg:order-2 opacity-70">
            <img :src="bgsmall" class="rounded-full w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </section>
  </template>
  

<script setup>
import herobg from '../../../../assets/img/bg.jpg'
import bgsmall from '../../../../assets/images/service_img_01.jpg'
import PrimaryButton from '../../../../components/button/PrimaryButton.vue';
</script>