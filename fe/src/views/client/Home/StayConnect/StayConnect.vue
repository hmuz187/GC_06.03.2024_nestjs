<template>
    <section class='bg-pink-50 pt-[116px] pb-[71px]'>
        <div class='container mx-auto px-[21px] py-[21px] bg-pink-100 w-[700px] items-center rounded-2xl'>
            <div class='lg:w-[450px] mx-auto'>
                <div class='text-center mb-10'>
                    <h4 class='font-bold text-xl leading-[22px] mb-[22px]'>Talk with us</h4>
                    <h2 class="text-xl text-gray-700 leading-[41px] font-normal">Don't hesitate to email us if you have any wonder</h2>
                </div>
                <form>
                    <div class='mb-5'>
                        <input type="email" name="email" placeholder='Email Address'
                            class="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border-none rounded-lg focus:outline-none w-full" />
                    </div>
                    <div class='mb-5'>
                        <input type="text" name="subject" placeholder='Subject'
                            class="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border-none rounded-lg focus:outline-none w-full" />
                    </div>
                    <div class='mb-9'>
                        <textarea name="message" rows="7"
                            class="py-[15px] px-[19px] bg-white text-base placeholder-[#3A425666] text-theme-3rd leading-5 border-none rounded-lg focus:outline-none w-full"
                            placeholder="Your message"></textarea>
                    </div>
                    <div class='text-center'>
                        <PrimaryButton btnText='SUBMIT' />
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import PrimaryButton from '../../../../components/button/PrimaryButton.vue';

</script>