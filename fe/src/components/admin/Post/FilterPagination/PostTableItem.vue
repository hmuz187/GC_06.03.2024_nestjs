<template>
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

            <tbody v-for="item in currentItems" :key="item.id" :item="item" tabindex="0"
                class="divide-y divide-gray-100 border-t border-gray-100">
                <tr class="focus:outline-none h-16 border border-gray-100 rounded">
                    <td>
                        <div class="ml-2">
                            <div
                                class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input placeholder="checkbox" type="checkbox"
                                    class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                                <div class="check-icon hidden bg-indigo-700 text-white rounded-sm">
                                    <svg class="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg"
                                        width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                        <button class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">{{
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
</template>

<script setup>
import router from '@/routes/browser';
import { EditOutlined, DeleteFilled, SearchOutlined, CommentOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue';

const { currentItems } = defineProps(['currentItems'])

const navigate = (link) => {
    router.push(link)
}

</script>