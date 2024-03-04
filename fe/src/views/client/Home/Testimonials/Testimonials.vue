<template>
    <section className='bg-pink-50 opacity-90 px-[101px] lg:pt-[109px] pb-[100px]'>
        <div className='flex justify-between items-center mb-20'>
            <div>
                <h4 class='text-theme-2nd font-bold text-xl leading-[22px] mb-[22px]'>A Minute for hearing</h4>
                <h2 className="text-4xl leading-[41px] font-normal">What Our Patients Says</h2>
            </div>
            <figure>
                <img className='w-24 lg:w-48' src={quote} alt="" />
            </figure>
        </div>
        <div className='grid gap-10 md:gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <Testimonial v-for="review in testimonialData" :key="review.id" :review="review" />
        </div>
    </section>
</template>

<script setup>
import Testimonial from './Testimonial.vue';
import people1 from '../../../../assets/img/people1.png'
import people2 from '../../../../assets/img/people2.png'
import people3 from '../../../../assets/img/people3.png'


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