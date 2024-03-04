
import ClientDefaultLayout from '@/views/layout/client/ClientDefaultLayout.vue'
import { P_CheckLinkBackend, P_CommingSoon, P_ClientContactUs, P_ClientAbout, P_ClientBlogPage, P_ClientForgotPassword, P_ClientHome, P_ClientLogin, P_ClientSignup, P_ClientPage404 } from '../views/client/index'
import {isLogin} from '../auth/isLogin'

const clientRoutes = [
    {
        path: '/', meta: { title: 'DApp - Homepage' },
        component: ClientDefaultLayout,
        children: [{ path: '', component: P_ClientHome }]
    },
    {
        path: '/about', meta: { title: 'DApp - About' },
        component: ClientDefaultLayout,
        children: [{ path: '', component: P_ClientAbout }]
    },
    {
        path: '/contactUs', meta: { title: 'DApp - Contact' },
        component: ClientDefaultLayout,
        children: [{ path: '', component: P_ClientContactUs }]
    },
    {
        path: '/blog', meta: { title: 'DApp - Blog' },
        component: ClientDefaultLayout,
        children: [{ path: '', component: P_ClientBlogPage }]
    },
    {
        path: '/forgotPassword/', meta: { title: 'DApp - ForgotPassword' },
        component: ClientDefaultLayout,
        children: [{ path: '', component: P_ClientForgotPassword }]
    },
    {
        path: '/login', meta: { title: 'DApp - Login' },
        component: ClientDefaultLayout,
        children: [{ path: '', component: isLogin()? P_ClientHome : P_ClientLogin }]
    },
    {
        path: '/signup', meta: { title: 'DApp - Signup' },
        component: ClientDefaultLayout,
        children: [{ path: '', component: isLogin()? P_ClientHome : P_ClientSignup }]
    },
    {
        path: '/shop', meta: { title: 'DApp - Shop' },
        component: ClientDefaultLayout,
        children: [{ path: '', component: P_CommingSoon }]
    },
    {
        path: '/check', meta: { title: 'DApp - check connect backend' },
        children: [{ path: '', component: P_CheckLinkBackend }]
    },
    {
        path: "/:notFound", meta: { title: 'DApp - Not Found' },
        component: ClientDefaultLayout,
        children: [{ path: '', component: P_ClientPage404 }]
    },
]

export default clientRoutes