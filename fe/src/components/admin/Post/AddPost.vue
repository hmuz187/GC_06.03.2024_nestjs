<template>
    <!-- <AddPost /> -->

    <div v-if="isPreview">
        <div class='w-full'>
            <!-- component -->
            <div class="heading text-center font-bold text-2xl m-5 text-gray-800">Add New Post</div>
            <div class="editor w-full mx-auto flex flex-col text-gray-800 p-4 shadow-lg ">


                <div class="w-full mx-auto">
                    <input
                        class="title w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 p-2 mb-4 outline-none"
                        spellcheck="false" placeholder="Title" type="text" v-model="title" />

                    <div class="mb-4 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                        <div class="flex w-full justify-between items-center py-2 px-3 border-b dark:border-gray-600">
                            <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x dark:divide-gray-600">
                                <div class="flex items-center space-x-1 sm:pr-4">
                                    <button title='Attachment' type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <button title='Location' type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <button title='JavaScript/HTML/CSS snippet' type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <button title='Emotion' type="button"
                                        class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                            <label htmlFor="editor" class="sr-only">Publish post</label>
                            <textarea id="editor" rows="8"
                                class="block px-0 min-h-[200px] w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                placeholder="Write an article..." required></textarea>
                        </div>

                    </div>
                    <div class='flex flex-row'>
                        <button type="submit"
                            class="flex items-right m-5 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                            v-on:click="(e) => {
                                setIsDraft(false)
                                setIsPublish(true)
                                handleSubmit()
                            }"> Publish post </button>
                        <button type="submit"
                            class="flex items-right m-5 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                            v-on:click="(e) => {
                                setIsDraft(false)
                                setIsPublish(true)
                                handleSubmit()
                            }"> Preview </button>
                    </div>
                </div>

                <!--  icons  -->
                <div class="icons flex text-gray-500 m-2">
                    <div class="count ml-auto text-gray-400 text-xs font-semibold">characters: {{ characters.value }} -
                        words:
                        {{ words.value }}</div>
                </div>

                <!--  buttons  -->
                <div class="buttons flex">
                    <div class="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto"
                        v-on:click="handleCancelPost()">Cancel
                    </div>
                    <div class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                        v-on:click="(e) => {
                            setIsDraft(true)
                            setIsPublish(false)
                            handleSubmit()
                        }">Save Draft
                    </div>


                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isPreview = ref(true)
const characters = ref(0)
const words = ref(0)


const title = ref('')
const content = ref('')
const abstract = ref('')
const fullContent = ref('')
const author = ref('')
const isDraft = ref(false)
const isPublish = ref(false)



const handleSubmit = async (e) => {
    const postInput = {
        isDraft: isDraft.value,
        isPublish: isPublish.value,
        title: title.value,
        content: content.value,
        abstract: abstract.value,
        fullContent: fullContent.value,
        author: 'chanhly'
    }

    // const response = await creatNewPost(postInput)

    // console.log(response)
    console.log(postInput)
}

const handleCancelPost = async (e) => {

    // const formData = new FormData()
    // formData.append('picturePro',)
    // const response = await addPicture(formData)
}


const handlePreview = async () => {
    isPreview.value = !isPreview.value
}

const setIsDraft = async (value) => {
    isDraft.value = value
}

const setIsPublish = async (value) => {
    isPublish.value = value
}




</script>