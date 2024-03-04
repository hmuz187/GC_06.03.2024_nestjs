import AdminDefaultLayout from '@/views/layout/admin/AdminDefaultLayout.vue'
import BlankLayout from '@/views/layout/admin/BlankLayout.vue'


import { P_WaitingPage, P_AddNewPost, P_AdminListCategory, P_AdminAddPost, P_AdminDashboard, P_AdminEditPost, P_AdminListPost, P_AdminLogin } from '../views/admin/index'
import {isAdmin} from '../auth/isAdmin'

const adminRoutes = [
    {
        path: '/admin/login', meta: { title: 'DApp - Admin Login' },
        component:  isAdmin() ? AdminDefaultLayout : BlankLayout ,
        children: [{ path: '', component: isAdmin() ? P_AdminDashboard : P_AdminLogin }]
    },
    {
        path: '/admin/dashboard', meta: { title: 'DApp - Admin Dashboard' },
        component: AdminDefaultLayout,
        children: [{ path: '', component: P_AdminDashboard }],
        beforeEnter: (to, from, next) => {
            if (isAdmin()) {
                next();
            } else {
                next('/admin/login');
            }
        }
    },
    {
        path: '/admin/addPost/', meta: { title: 'DApp - Add Post' },
        component: AdminDefaultLayout,
        children: [{ path: '', component: P_AddNewPost }],
        beforeEnter: (to, from, next) => {
            if (isAdmin()) {
                next();
            } else {
                next('/admin/login');
            }
        }
    },
    {
        path: '/admin/editPost', meta: { title: 'DApp - Edit Post' },
        component: AdminDefaultLayout,
        children: [{ path: '', component: P_AdminEditPost }],
        beforeEnter: (to, from, next) => {
            if (isAdmin()) {
                next();
            } else {
                next('/admin/login');
            }
        }
    },
    {
        path: '/admin/listAllPost', meta: { title: 'DApp - List All Post' },
        component: AdminDefaultLayout,
        children: [{ path: '', component: P_AdminListPost }],
        beforeEnter: (to, from, next) => {
            if (isAdmin()) {
                next();
            } else {
                next('/admin/login');
            }
        }
    },
    {
        path: '/admin/listCategory', meta: { title: 'DApp - List All Post' },
        component: AdminDefaultLayout,
        children: [{ path: '', component: P_AdminListCategory }],
        beforeEnter: (to, from, next) => {
            if (isAdmin()) {
                next();
            } else {
                next('/admin/login');
            }
        }
    },
    {
        path: '/admin/listImage', meta: { title: 'DApp - List All Post' },
        component: AdminDefaultLayout,
        children: [{ path: '', component: P_WaitingPage }],
        beforeEnter: (to, from, next) => {
            if (isAdmin()) {
                next();
            } else {
                next('/admin/login');
            }
        }
    },
    {
        path: '/admin/listUser', meta: { title: 'DApp - List All Post' },
        component: AdminDefaultLayout,
        children: [{ path: '', component: P_WaitingPage }],
        beforeEnter: (to, from, next) => {
            if (isAdmin()) {
                next();
            } else {
                next('/admin/login');
            }
        }
    },

    {
        path: '/admin/listTag', meta: { title: 'DApp - List All Post' },
        component: AdminDefaultLayout,
        children: [{ path: '', component: P_WaitingPage }],
        beforeEnter: (to, from, next) => {
            if (isAdmin()) {
                next();
            } else {
                next('/admin/login');
            }
        }
    },
    {
        path: '/admin/listFile', meta: { title: 'DApp - List All Post' },
        component: AdminDefaultLayout,
        children: [{ path: '', component: P_WaitingPage }],
        beforeEnter: (to, from, next) => {
            if (isAdmin()) {
                next();
            } else {
                next('/admin/login');
            }
        }
    },
    {
        path: '/admin/manageShop', meta: { title: 'DApp - List All Post' },
        component: AdminDefaultLayout,
        children: [{ path: '', component: P_WaitingPage }],
        beforeEnter: (to, from, next) => {
            if (isAdmin()) {
                next();
            } else {
                next('/admin/login');
            }
        }
    },
    {
        path: '/admin/addProduct', meta: { title: 'DApp - List All Post' },
        component: AdminDefaultLayout,
        children: [{ path: '', component: P_WaitingPage }],
        beforeEnter: (to, from, next) => {
            if (isAdmin()) {
                next();
            } else {
                next('/admin/login');
            }
        }
    },
    {
        path: '/comming-soon', meta: { title: 'DApp - Not Ready Page' },
        children: [{ path: '', component: P_WaitingPage }]
    },
]





export default adminRoutes