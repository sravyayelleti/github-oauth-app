import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '',
        component: () => import('../views/LoginPage.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomePage.vue')
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('../views/DataList.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginPage.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
