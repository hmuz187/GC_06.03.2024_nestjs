<template>
    <div>
        <C_AdminManageCategoryPagination :items="ListCategory" :itemsPerPage="4" />
    </div>
</template>


<script setup>
import { ListCategory} from '../DataExamples'
import { C_AdminManageCategoryPagination  } from '../../../components/admin/index'

</script>