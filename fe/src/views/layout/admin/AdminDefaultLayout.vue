<script setup>
import { C_AdminFooter, C_Sidebar, C_AdminHeader } from '../../../components/admin'
</script>

<template>
    <div>

        <div class=''>
            <div class="flex flex-col h-fit font-poppins antialiased">
                <div id="view" class="min-h-full w-full flex flex-row ">
                    <!-- sidebar -->
                    <C_Sidebar />
                    <!-- main -->
                    <div class='flex flex-col h-full w-full'>
                        <router-view class="h-full min-h-screen"> </router-view>
                    </div>
                </div>
            </div>
        </div>

        <div class='bottom-0'>
            <!-- footer -->
            <C_AdminFooter />
        </div>
    </div>
</template>

<style scoped></style>
