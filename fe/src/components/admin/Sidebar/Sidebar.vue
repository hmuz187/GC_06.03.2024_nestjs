<template>
    <div class="bg-white min-w-[180px] overflow-x-hidden transition-transform duration-300 ease-in-out">
        <div class="space-y-6 md:space-y-10 mt-10">
            <div id="profile" class="space-y-3">
                <img :src="ceo" alt="Avatar user" class="w-20 rounded-full mx-auto" />
                <div>
                    <h2 class="font-medium text-xs text-center text-teal-500">DApp CEO</h2>
                    <p class="text-xs text-gray-500 text-center">Administrator</p>
                </div>
            </div>

            <div id="menu" class="flex flex-col space-y-2">
                <router-link :to="AdminLinkRoute.HOMEPAGE"
                    class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <HomeOutlined class="w-6 h-6 fill-current inline-block" />
                <span class=""> Back to Home</span>
                </router-link>
                <router-link :to="AdminLinkRoute.DASHBOARD"
                    class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                <BookOutlined class="w-6 h-6 fill-current inline-block" />
                <span class=""> Dashboard</span>
                </router-link>
                <router-link :to="AdminLinkRoute.ADD_POST"
                    class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                <BookOutlined class="w-6 h-6 fill-current inline-block" />
                <span class=""> Add Post</span>
                </router-link>
                <router-link :to="AdminLinkRoute.LIST_POST"
                    class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <OrderedListOutlined class="w-6 h-6 fill-current inline-block" />
                <span class=""> Manage Post</span>
                </router-link>

                <router-link :to="AdminLinkRoute.CATEGORY"
                    class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <OrderedListOutlined class="w-6 h-6 fill-current inline-block" />
                <span class=""> Post Category</span>
                </router-link>
                <router-link :to="AdminLinkRoute.GALLERY"
                    class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <FileImageOutlined class="w-6 h-6 fill-current inline-block" />
                <span class=""> Gallery</span>
                </router-link>
                <router-link :to="AdminLinkRoute.MANAGE_USER"
                    class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <UserOutlined class="w-6 h-6 fill-current inline-block" />
                <span class=""> Manage Users</span>
                </router-link>
                <router-link :to="AdminLinkRoute.MANAGE_TAG"
                    class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <TagOutlined class="w-6 h-6 fill-current inline-block" />
                <span class=""> Tags</span>
                </router-link>
                <router-link :to="AdminLinkRoute.MANAGE_FILE"
                    class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <FileFilled class="w-6 h-6 fill-current inline-block" />
                <span class=""> Files</span>
                </router-link>
                <router-link :to="AdminLinkRoute.MANAGE_SHOP"
                    class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <ShopFilled class="w-6 h-6 fill-current inline-block" />
                <span class=""> Manage Shop</span>
                </router-link>
                <router-link :to="AdminLinkRoute.ADD_PRODUCT"
                    class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                <ShoppingCartOutlined class="w-6 h-6 fill-current inline-block" />
                <span class=""> Add Product</span>
                </router-link>

                <!-- <SidebarList v-for="hello in hellos" :key="hello.id" :SidebarTitle="hello" /> -->
                
            </div>


            <hr />
            <div class="flex border-2 border-gray-200 rounded-md focus-within:ring-2 ring-teal-500">
                <input type="text"
                    class="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
                    placeholder="Search" />
                <button class="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block">
                    <SearchOutlined />
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
import { SearchOutlined, ShoppingCartOutlined, ShopFilled, FileFilled, TagOutlined, UserOutlined, FileImageOutlined, HomeOutlined, BookOutlined, OrderedListOutlined } from '@ant-design/icons-vue'
import ceo from '../../../assets/img/people1.png'
import { AdminLinkRoute } from '../../../routes/ListAdminLink'
import SidebarList from '../Title/SidebarList.vue'

const hellos = [{
    id: 1,
    name: 'Opening Hours',
    link: AdminLinkRoute.HOMEPAGE,
    icon: ShoppingCartOutlined,
},
{
    id: 2,
    name: 'Closing Hours',
    link: AdminLinkRoute.HOMEPAGE,
    icon: ShoppingCartOutlined,
}]

</script>