<template>
    <section class='bg-pink-50 opacity-70 mx-auto px-[21px] py-[20px] lg:pt-[131px] lg:pb-[154px]'>
        <div class='lg:w-[1057px] mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[102px] items-center'>
            <img :src="doctor" class='rounded-lg' alt="" />
            <div>
                <h2 class='font-bold text-theme-3rd text-4xl leading-[45px] md:text-5xl lg:leading-[55px] mb-[26px]'>
                    Care your Health and your Future</h2>
                <p class='text-black text-base leading-[21px] mb-11'>It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout. The point of using Lorem
                    Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here,
                    content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton btnText='GET STARTED' />
            </div>
        </div>
    </section>
</template>


<script setup>
import PrimaryButton from '../../../../components/button/PrimaryButton.vue';
import doctor from '../../../../assets/images/service_img_02.jpg'

</script>