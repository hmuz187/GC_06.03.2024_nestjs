<template>
    <div class="sm:flex items-center justify-between">
        <div class="flex items-center">
            <button v-on:click="getShowDraftPublish('all')"
                class="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800">
                <div :class="(setShowDraftPublish == 'all') ? markShowDraftPublish : unmarkShowDraftPublish">
                    <p>All</p>
                </div>
            </button>
            <button v-on:click="getShowDraftPublish('publish')"
                class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
                <div :class="setShowDraftPublish == 'publish' ? markShowDraftPublish : unmarkShowDraftPublish">
                    <p>Published</p>
                </div>
            </button>
            <button v-on:click="getShowDraftPublish('draft')"
                class="rounded-full focus:outline-none focus:ring-2 focus:bg-indigo-50 focus:ring-indigo-800 ml-4 sm:ml-8">
                <div :class="setShowDraftPublish == 'draft' ? markShowDraftPublish : unmarkShowDraftPublish">
                    <p>Draft</p>
                </div>
            </button>
        </div>
        <button
            class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
            <p class="text-sm font-medium leading-none text-white">Add Post</p>
        </button>
    </div>
</template>

<script setup>
import {ref} from 'vue'

import { EditOutlined, DeleteFilled, SearchOutlined, CommentOutlined } from '@ant-design/icons-vue'



const markShowDraftPublish = `py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full`
const unmarkShowDraftPublish = `py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full`

const emits = defineEmits(['updateShowDraftPublish'])


const setShowDraftPublish = ref('all')

const getShowDraftPublish = (value) => {
    setShowDraftPublish.value = value
    emits('updateShowDraftPublish', value)
}

</script>
