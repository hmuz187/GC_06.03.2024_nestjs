<template>
    <div class="sm:px-6 w-full">
        <!--  Search bar  -->
        <div class="px-4 md:px-10 py-4 md:py-7">
            <div class="flex items-center justify-between">

                <div class='flex flex-col min-w-[400px]'>
                    <form>
                        <label for="default-search"
                            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                        <div class="relative">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <SearchOutlined />
                            </div>
                            <input type="search" id="default-search"
                                class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:outline-none focus:border-blue-500"
                                placeholder="Search Post" required />
                            <button type="submit"
                                class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                </div>

                <div
                    class="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
                    <p>Sort By:</p>
                    <select aria-label="select" class="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                        <option class="text-sm text-indigo-800">Latest</option>
                        <option class="text-sm text-indigo-800">Oldest</option>
                    </select>
                </div>

            </div>
        </div>
        <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
            <!--  Quick Filter  -->
            <div class="sm:flex items-center justify-between">
                <div class="flex items-center">
                    <button v-on:click="getShowDraftPublish('all')"
                        class="rounded-full focus:outline-none focus:ring-2  focus:bg-indigo-50 focus:ring-indigo-800">
                        <div :class="setShowDraftPublish == 'all' ? markShowDraftPublish : unmarkShowDraftPublish">
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

            <!-- Post Table List -->
            <div class="mt-7 overflow-x-auto">
                <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">

                    <thead class="bg-gray-50">
                        <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
                            <td>
                                <div class="ml-2">
                                    <div
                                        class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input placeholder="checkbox" checked="" type="checkbox"
                                            class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                    </div>
                                </div>
                            </td>
                            <td class="">
                                <div class="flex items-center pl-5 min-w-[250px]">
                                    <p class="text-base font-medium leading-none text-gray-700 mr-2">Title</p>
                                </div>
                            </td>
                            <td class="pl-4">
                                <p class="text-base font-medium leading-none text-gray-700 mr-2">Author</p>
                            </td>
                            <td class="pl-4">
                                <p class="text-base font-medium leading-none text-gray-700 mr-2 min-w-[100px]">Main Category
                                </p>
                            </td>
                            <td class="pl-4">
                                <p class="text-base font-medium leading-none text-gray-700 mr-2 min-w-[100px]">Tags</p>
                            </td>
                            <td class="pl-4">
                                <p class="text-base font-medium leading-none text-gray-700 mr-2">Comment</p>
                            </td>
                            <td class="pl-4">
                                <p class="text-base font-medium leading-none text-gray-700 mr-2">Date</p>
                            </td>
                            <td class="pl-4">
                                <p class="text-base font-medium leading-none text-gray-700 mr-2">Task</p>
                            </td>
                            <td class="pl-4">
                                <p class="text-base font-medium leading-none text-gray-700 mr-2">Status</p>
                            </td>
                        </tr>
                    </thead>

                    <tbody v-for="item in currentItems" :key="item.id" :item="item" tabindex="0" class="divide-y divide-gray-100 border-t border-gray-100">
                        <tr 
                            v-if="(item.isDraft && setShowDraftPublish == 'draft') || (item.isPublish && setShowDraftPublish == 'publish') || (setShowDraftPublish == 'all')"
                            class="focus:outline-none h-16 border border-gray-100 rounded">
                            <td>
                                <div class="ml-2">
                                    <div
                                        class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                        <input placeholder="checkbox" type="checkbox"
                                            class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                        <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                            <svg class="icon icon-tabler icon-tabler-check"
                                                xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                <path d="M5 12l5 5l10 -10"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="">
                                <div class="flex items-center pl-2">
                                    <p class="text-base font-medium leading-none text-gray-700 mr-2">{{ item.title }}</p>
                                </div>
                            </td>
                            <td class="pl-4">
                                <div class="flex items-center">
                                    <p class="text-sm leading-none text-gray-600 ml-2">{{ item.author }}</p>
                                </div>
                            </td>
                            <td class="pl-4">
                                <div class="flex flex-col items-left">
                                    <p v-for="cate in item.category" class="text-sm leading-none text-gray-600 mb-1">{{ cate
                                    }}</p>
                                </div>
                            </td>
                            <td class="pl-4">
                                <div class="flex items-center">
                                    <p v-for="tag in item.tags" class="text-sm leading-none text-gray-600 ml-1">{{ tag }},
                                    </p>
                                </div>
                            </td>
                            <td class="pl-4">
                                <div class="flex items-center">
                                    <CommentOutlined />
                                    <p class="text-sm leading-none text-gray-600 ml-2">{{ item.comment_count }}</p>
                                </div>
                            </td>
                            <td class="pl-4">
                                <button
                                    class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">{{
                                        item.createSignUp }}</button>
                            </td>
                            <td class="pl-4">
                                <div class="flex gap-4">
                                    <DeleteFilled class="w-6 h-6 fill-current inline-block"
                                        v-on:click="() => { navigate(`/admin/deletePost/id`) }" />
                                    <EditOutlined class="w-6 h-6 fill-current inline-block"
                                        v-on:click="() => { navigate(`/admin/editPost/id`) }" />
                                </div>
                            </td>
                            <td class="pl-4">
                                <p class="text-sm leading-none text-gray-600 mx-2">
                                    <span v-if="item.isDraft">Draft</span><span v-if="item.isPublish">Publish</span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import router from '@/routes/browser';
import { EditOutlined, DeleteFilled, SearchOutlined, CommentOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'

const { currentItems } = defineProps(['currentItems'])

const navigate = (link) => {
    router.push(link)
}

const setShowDraftPublish = ref('all')
const markShowDraftPublish = `py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full`
const unmarkShowDraftPublish = `py-2 px-8 text-gray-600 hover:text-indigo-700 hover:bg-indigo-100 rounded-full`

const getShowDraftPublish = (value) => {
    setShowDraftPublish.value = value
    console.log(setShowDraftPublish.value)
}

</script>