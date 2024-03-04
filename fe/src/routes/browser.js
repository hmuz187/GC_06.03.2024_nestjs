
import {nextTick} from 'vue'
import {createRouter, createWebHistory} from 'vue-router';
import clientRoutes from './client.route.js';
import adminRoutes from './admin.route.js';


const routes = [...adminRoutes, ...clientRoutes]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const DEFAULT_TITLE = 'DApp';
router.afterEach((to, from) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    nextTick(() => {
        document.title = to.meta.title || DEFAULT_TITLE;
    });
});

export default router