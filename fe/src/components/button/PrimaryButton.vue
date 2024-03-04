<template>
    <div>
        <button
            :class="`p-4 rounded-lg bg-gradient-to-r from-theme-2nd to-theme-1st text-sm leading-5 font-bold ${classes}`">{{
                btnText }}</button>
    </div>
</template>
  
<!-- <script setup>
const { btnText } = defineProps(['classes', 'btnText']);
</script> -->

<script>
export default {
    props: {
        btnText: {type: String, required: true},
        classes: {type: String}
    }
}
</script>