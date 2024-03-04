<template>
    <div class="flex flex-row flex-wrap mx-auto">

        <div v-for="item in currentItems" :key="item.id" :item="item" class="transition-all duration-150 flex px-4 py-6  w-full md:w-1/2 lg:w-1/3">
            <div
                class="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                <div class="flex items-center justify-between px-4 py-2 overflow-hidden">
                    <span class="text-xs font-medium text-blue-600 uppercase">{{ item.main_category }}</span>
                    <div class="flex flex-row items-center">
                        <div class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
                            <FundViewOutlined class="w-4 h-4 mr-1" /><span>{{ item.views_count }}</span>
                        </div>

                        <div class="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
                            <CommentOutlined class="w-4 h-4 mr-1" /> <span>{{ item.comment_count }}</span>
                        </div>

                        <div class="text-xs font-medium text-gray-500 flex flex-row items-center">
                            <LikeFilled class="w-4 h-4 mr-1" /> <span>{{ item.like_count }}</span>
                        </div>
                    </div>
                </div>
                <hr class="border-gray-300" />
                <div class="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
                    <a href="#" class="hover:underline">
                        <h2 class="text-2xl font-bold tracking-normal text-gray-800">
                            {{ item.title }}
                        </h2>
                    </a>
                </div>
                <hr class="border-gray-300" />
                <p class="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
                    {{ item.abstract }} </p>
                <hr class="border-gray-300" />
                <section class="px-4 py-2 mt-2">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center flex-1">
                            <img class="object-cover h-10 rounded-full" src={item.author_avatar} alt="Avatar" />
                            <div class="flex flex-col mx-2">
                                <a href="" class="font-semibold text-gray-700 hover:underline"> {{ item.author }} </a>
                                <span class="mx-1 text-xs text-gray-600">{{ item.createSignUp }}</span>
                            </div>
                        </div>
                        <p class="mt-1 text-xs text-gray-600">{{ item.createAt }}</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>


<script setup>
import {CommentOutlined, LikeFilled, FundViewOutlined} from '@ant-design/icons-vue'

const { currentItems } = defineProps(['currentItems'])

// console.log(currentItems)
</script>