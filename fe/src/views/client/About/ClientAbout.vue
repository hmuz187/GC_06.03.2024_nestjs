

<template>
    <div class='pt-20'>
        <section class='container mx-auto px-[21px] pb-20 md:pb-28 lg:pb-40'>
            <div class='lg:w-[1057px] mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[102px] items-center'>
                <img :src="doctor" class='rounded-lg' alt="" />
                <div>
                    <h2
                        class='font-bold text-theme-3rd text-4xl leading-[45px] md:text-5xl lg:leading-[55px] mb-[26px]'>
                        Care your Health and your Future</h2>
                    <p class='text-black text-base leading-[21px] mb-11'>It is a long established fact that a reader
                        will be distracted by the readable content of a page when looking at its layout. The point of using
                        Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content
                        here, content here', making it look like readable English. Many desktop publishing packages and web
                        page</p>
                    <PrimaryButton btnText='GET STARTED' />
                </div>
            </div>
        </section>
        <div class='pb-20 md:pb-28 lg:pb-40'>
            <section class='container mx-auto px-[21px]'>
                <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    <OpeningBox v-for="card in openingBoxData" :key="card.id" :card="card" />
                </div>
            </section>
        </div>
        <section class='container mx-auto px-[21px] mb-20 lg:mb-[149px]'>
            <div class='flex justify-between items-center mb-20'>
                <div>
                    <h4 class='text-theme-2nd font-bold text-xl leading-[22px] mb-[22px]'>A Minute for hearing</h4>
                    <h2 class="text-4xl text-theme-3rd leading-[41px] font-normal">What Our Patients Says</h2>
                </div>
                <figure>
                    <img class='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div class="grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Testimonial v-for="review in testimonialData" :key="review.id" :review="review" />
        </div>
        </section>
    </div>
</template>

<script setup>

import doctor from '../../../assets/images/service_img_02.jpg'

import PrimaryButton from '../../../components/button/PrimaryButton.vue'
import Testimonial from '../../../components/button/Testimonial.vue'
import OpeningBox from '../../../components/button/OpeningBox.vue'

import people1 from '../../../assets/img/people1.png'
import people2 from '../../../assets/img/people2.png'
import people3 from '../../../assets/img/people3.png'

import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

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

const testimonialData = [
    {
        id: 1,
        name: 'Winson Herry',
        img: people1,
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'California'
    },
    {
        id: 2,
        name: 'Winson Herry',
        img: people2,
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'California'
    },
    {
        id: 3,
        name: 'Winson Herry',
        img: people3,
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'California'
    },
]

</script>