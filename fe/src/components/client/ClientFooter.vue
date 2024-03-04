

<template>
    <div class='lg:px-[200px] items-center bg-theme-2nd text-white flex justify-between'>
      <div class=' text-xl cursor-pointer '>
        <ul class='flex justify-center items-center  m-0  '>
          <li class='p-2.5'><FacebookFilled class='hover:text-[#3B5999]' /></li>
          <li class='p-2.5'><YoutubeFilled class='hover:text-[#CD201F]' /></li>
          <!-- <li class='p-2.5'><WhatsAppOutlined class='hover:text-green-600' /></li>
          <li class='p-2.5'><TwitterCircleFilled class='hover:text-[#00ACEE]' /></li>
          <li class='p-2.5'><InstagramFilled class='hover:text-[#E4405F]' /></li>
          <li class='p-2.5'><LinkedinFilled class='hover:text-[#0077B5]' /></li> -->
        </ul>
      </div>
      <a href="#" class='hover:text-gray-600 '><h3 class='lg:text-[18px] text-sm font-normal p-[10px]'>All rights reserved © DApp Group</h3></a>
    </div>
</template>

<script setup>
import {YoutubeFilled, FacebookFilled, LinkedinFilled, TwitterCircleFilled, WhatsAppOutlined, InstagramFilled} from '@ant-design/icons-vue'
</script>