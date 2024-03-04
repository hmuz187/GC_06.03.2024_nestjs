<template>
    <!-- Category Table List -->
    <div class="mt-7 overflow-x-auto">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">

            <thead class="bg-gray-50">
                <tr class="focus:outline-none h-16 border border-gray-100 rounded">
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
                            <p class="text-base font-medium leading-none text-gray-700 mr-2">Name</p>
                        </div>
                    </td>
                    <td class="pl-4">
                        <p class="text-base font-medium leading-none text-gray-700 mr-2">Author</p>
                    </td>
                    <td class="pl-4">
                        <p class="text-base font-medium leading-none text-gray-700 mr-2">Total Post</p>
                    </td>
                    <td class="pl-4">
                        <p class="text-base font-medium leading-none text-gray-700 mr-2">Date</p>
                    </td>
                    <td class="pl-4">
                        <p class="text-base font-medium leading-none text-gray-700 mr-2">Task</p>
                    </td>
                    <td class="pl-4">
                        <p class="text-base font-medium leading-none text-gray-700 mr-2">Export</p>
                    </td>
                </tr>
            </thead>

            <tbody v-for="item in currentItems" :key="item.id" :item="item" class="divide-y divide-gray-100 border-t border-gray-100">
                <tr tabindex="0" class="focus:outline-none h-16 border border-gray-100 rounded">
                    <td>
                        <div class="ml-2">
                            <div
                                class="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                                <input placeholder="checkbox" type="checkbox"
                                    class="focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full" />
                            </div>
                        </div>
                    </td>
                    <td class="">
                        <div class="flex items-center pl-2">
                            <p class="text-base font-medium leading-none text-gray-700 mr-2">{{item.name}}</p>
                        </div>
                    </td>
                    <td class="pl-4">
                        <div class="flex items-center">
                            <p class="text-sm leading-none text-gray-600 ml-2">{{item.author}}</p>
                        </div>
                    </td>
                    <td class="pl-4">
                        <div class="flex items-center">
                            <CommentOutlined />
                            <p class="text-sm leading-none text-gray-600 ml-2">{{item.totalPost}}</p>
                        </div>
                    </td>
                    <td class="pl-4">
                        <button
                            class="py-3 px-3 text-sm focus:outline-none leading-none text-red-700 bg-red-100 rounded">{{new
                            Date(item.createdAt).toDateString()}}</button>
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
                        <DownloadOutlined size={24} />
                    </td>
                </tr>
            </tbody>
        </table>
</div></template>

<script setup>
import router from '@/routes/browser';
import { EditOutlined, DeleteFilled, CommentOutlined, DownloadOutlined} from '@ant-design/icons-vue'
import { ref } from 'vue';

const { currentItems } = defineProps(['currentItems'])

const navigate = (link) => {
    router.push(link)
}

</script>