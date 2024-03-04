<!-- <script setup>
import {VuejsPaginate} from 'vuejs-paginate'

const clickCallback = (pageNum) => {
      console.log(pageNum)
    }
</script>

<template>

<template>
  <VuejsPaginate
    :page-count="20"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="'pagination'"
    :page-class="'page-item'">
  </VuejsPaginate>
</template>

</template> --> 

<template>
  <div>
    <div class="min-h-[90vh]">
      <PostTableItem :currentItems="currentItems" />
    </div>
    <!-- <div class="min-h-[90vh]">
      <PostListItem :currentItems="currentItems" />
    </div> -->
    <Paginate :pageCount="pageCount"
      :pageClass="`block border border-solid border-lightGray hover:bg-lightGray w-10 h-10 flex items-center justify-center rounded-md mr-4 ml-4`"
      :activeClass="`bg-blue-500 text-white`" :prevClass="`text-xl font-bold hover:text-blue-500`"
      :nextClass="`text-xl font-bold hover:text-blue-500`" :containerClass="`flex items-center justify-center mt-8 mb-4`"
      :marginPages="1" :nextText="`>`" :prevText="`<`" :clickHandler="handlePageClick">
    </Paginate>
  </div>
</template>




<script setup>
import { ref } from 'vue'
import PostListItem from './PostListItem.vue'
import PostTableItem from './PostTableItem.vue'

import Paginate from '../../HELP/Paginate.vue'

const { itemsPerPage, items } = defineProps(['itemsPerPage', 'items'])

const itemOffset = ref(0)
const endOffset = ref(itemOffset.value + itemsPerPage)

const currentItems = ref(items.slice(itemOffset.value, endOffset.value))
const pageCount = Math.ceil(items.length / itemsPerPage);

const handlePageClick = (selected) => {
  const newOffset = ((selected - 1) * itemsPerPage) % items.length
  console.log(
    `User requested page number ${selected}, which is offset ${newOffset}`
  );
  itemOffset.value = newOffset
  endOffset.value = itemOffset.value + itemsPerPage
  currentItems.value = items.slice(itemOffset.value, endOffset.value)
};


</script> 
