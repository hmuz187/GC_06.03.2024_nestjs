<script setup>
import {C_AdminPostDefaulPagination,C_AdminFilterPostPagination } from '../../../components/admin/index'
import { ListPostExamples } from '../DataExamples'

</script>

<template>
    <div>
        <C_AdminFilterPostPagination :items="ListPostExamples" :itemsPerPage="4"/>
    </div>
</template>
