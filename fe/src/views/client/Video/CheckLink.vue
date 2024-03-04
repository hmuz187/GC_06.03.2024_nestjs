<script setup>

import axios from "../../../plugins/axios"
import {getVerifyCodeSignup} from '../../../apis/client.access'

const checkConnect = async () => {
    const response = await getVerifyCodeSignup({userEmail:"alex.spencer0209@gmail.com"})
    console.log(response)
}



</script>

<template>
    <div>
        <button class="transition duration-200 bg-pink-500 hover:bg-pink-600 focus:bg-pink-700 focus:shadow-sm focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
         v-on:click="checkConnect"> Check connect backend</button>
    </div>
</template>
