
<template>
    <section class="bg-pink-50 opacity-90 lg:pt-[103px] pt-[20px] ">
            <div class='mx-auto px-[21px] mt-[200px] bg-pink-200  '>
                <div class='grid grid-cols-1 lg:grid-cols-2 items-center'>
                    <img :src="doctor" class='-mt-[253px] hidden lg:block' alt="" />
                    <div class='lg:w-[533px] pb-[20px]'>
                        <h4 class='text-theme-2nd font-bold text-xl leading-[22px] pt-[22px] mb-[22px]'>Appointment</h4>
                        <h2 class=' text-4xl mb-[22px]'>Make an appointment Today</h2>
                        <p class=' text-base leading-[21px] mb-11'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton btnText='GET STARTED' />
                    </div>
                </div>
            </div>
        </section>
</template>

<script setup>
import PrimaryButton from '../../../../components/button/PrimaryButton.vue';
import doctor from '../../../../assets/images/dr04.png'
</script>