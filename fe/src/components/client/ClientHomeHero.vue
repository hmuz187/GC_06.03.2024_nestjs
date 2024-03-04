<template>
    <div class='relative'>
        <div class='bg-[#F6FDFF]'>
            <div :class='styleparent'>
                <div
                    class='bg-[#1A173E] p-[55px] rounded-tr-[80px] lg:h-[600px] xl:h-[520px] rounded-tl-[80px] rounded-bl-[80px] shadow-md shadow-[#04C873]'>
                    <div class='text-[#04C873]'>
                        <h4 class='font-normal text-[20px] leading-5 py-2'>Bác sĩ</h4>
                        <h2 class='font-medium text-[36px] leading-9 py-2'>Néang Chanh Ly</h2>
                        <h4
                            class='font-normal text-[18px] leading-5 py-2 pb-2 relative
           before:content-[""] before:absolute before:w-[45px] before:h-[3px] before:bg-[#04C873] before:rounded-3xl before:-bottom-3 before:right-0 '>
                            Chuyên ngành Sản phụ khoa và sàng lọc trước sinh</h4>
                    </div>

                    <div class='text-white pt-10 font-normal text-[18px] leading-8'>
                        <p>Tốt nghiệp Bác sĩ Trường Đại học Y Dược Cần Thơ, 2015.
                            <br />
                            Chứng chỉ siêu âm sản phụ khoa, 2016.
                            <br />
                            Chứng chỉ hỗ trợ sinh sản IUI, 2018.
                            <br />
                            Bằng CK1 chuyên ngành Sản phụ khoa Trường Đại học Y dược TP Hồ Chí Minh, 2020.
                            <br />
                            Chứng chỉ sàng lọc trước sinh của Tổ chức Fetal Medicine Foundation(FMF, London, UK), 2022.
                            <br />
                            Thành viên Hội nội tiết sinh sản và Vô sinh TPHCM(HOSREM), Thành viên hiệp hội sản phụ khoa Việt
                            Nam(VAGO) . . .
                        </p>
                    </div>
                </div>
                <img class='w-[300px] h-[430px] ml-24' :src="doctor" alt="doctor" />
            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script setup>
import {doctor} from '../../assets/images/index'
const styleparent = 'pt-24 p-[55px] bg-[#1F1B4A] lg:h-[600px] lg:flex justify-center items-center rounded-br-[80px] rounded-bl-[80px]'

</script>

