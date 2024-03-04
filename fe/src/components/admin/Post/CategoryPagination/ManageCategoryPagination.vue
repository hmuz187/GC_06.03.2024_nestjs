<template>
    <div class="min-h-[90vh]">
        <div class="sm:px-6 w-full min-h-[90vh]">
            <SearchPost />
            <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                <CategoryOptions />
                <CategoryTableItem :currentItems="currentItems" />
            </div>
        </div>
        <Paginate :pageCount="pageCount"
            :pageClass="`block border border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4 ml-4`"
            :activeClass="`bg-blue-500 text-white`" :prevClass="`text-xl font-bold hover:text-blue-500`"
            :nextClass="`text-xl font-bold hover:text-blue-500`"
            :containerClass="`flex items-center justify-center mt-8 mb-4`" :marginPages="1" :nextText="`>`" :prevText="`<`"
            :clickHandler="handlePageClick">
        </Paginate>
    </div>
</template>


<script setup >
import { ref } from 'vue'
import CategoryTableItem from './CategoryTableItem.vue'
import SearchPost from '../../HELP/SearchArea.vue'
import CategoryOptions from './CategoryOptions.vue'
import Paginate from '../../HELP/Paginate.vue'

const { itemsPerPage, items: itemsAll } = defineProps(['itemsPerPage', 'items'])

const items = ref(itemsAll)

// pagination

const itemOffset = ref(0)
const endOffset = ref(itemOffset.value + itemsPerPage)

const currentItems = ref(items.value.slice(itemOffset.value, endOffset.value))
const pageCount = Math.ceil(items.value.length / itemsPerPage);

const handlePageClick = (selected) => {
    const newOffset = ((selected - 1) * itemsPerPage) % items.value.length
    console.log(
        `User requested page number ${selected}, which is offset ${newOffset}`
    );
    itemOffset.value = newOffset
    endOffset.value = itemOffset.value + itemsPerPage
    currentItems.value = items.value.slice(itemOffset.value, endOffset.value)
};



</script>