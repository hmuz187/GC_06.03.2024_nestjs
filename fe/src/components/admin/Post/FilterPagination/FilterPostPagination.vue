<template>
    <div>
        <div class="sm:px-6 w-full min-h-[90vh]">
            <SearchPost />
            <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                <ChangeDraftPublish @updateShowDraftPublish="updateShowDraftPublish" />
                <PostTableItem :currentItems="currentItems" />
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
import PostTableItem from './PostTableItem.vue'
import SearchPost from '../../HELP/SearchArea.vue'
import ChangeDraftPublish from '../../HELP/ChangeDraftPublishArea.vue'
import Paginate from '../../HELP/Paginate.vue'

const { itemsPerPage, items: itemsAll } = defineProps(['itemsPerPage', 'items'])

//get draft/publish info --- use emit 
const items = ref(itemsAll)
const showDraftPublish = ref('all');
const updateShowDraftPublish = (newValue) => {
    showDraftPublish.value = newValue
    if (newValue == 'draft') { items.value = itemsAll.filter(item => item.isDraft)}
    if (newValue == 'publish') { items.value = itemsAll.filter(item => item.isPublish)}
    if (newValue == 'all') { items.value = itemsAll}

    itemOffset.value = 0
    endOffset.value = itemOffset.value + itemsPerPage
    currentItems.value = items.value.slice(itemOffset.value, endOffset.value)
};

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