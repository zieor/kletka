import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/levels',
            name: 'Levels',
            component: () => import('@/views/levels.vue')
        },

        {
            path: '/levels/gigakhrushch',
            name: 'Gigakhrushch',
            component: () => import('@/views/levels/gigakhrushch.vue')
        },
        {
            path: '/levels/elevator',
            name: 'Elevator',
            component: () => import('@/views/levels/elevator.vue')
        },
        {
            path: '/news',
            name: 'News',
            component: () => import('@/views/News.vue')
        },
        {
            path: '/levels/residential',
            name: 'Residential',
            component: () => import('@/views/levels/residential.vue')
        },
        {
            path: '/levels/anomalous',
            name: 'Anomalous',
            component: () => import('@/views/levels/anomalous.vue')
        },
        {
            path: '/levels/shop',
            name: 'Shop',
            component: () => import('@/views/levels/shop.vue')
        },
        {
            path: '/levels/street',
            name: 'Street',
            component: () => import('@/views/levels/street.vue')
        },
        {
            path: '/illustrations',
            name: 'Illustrations',
            component: () => import('@/views/Illustrations.vue')
        },
        {
            path: '/levels/secret',
            name: 'Secret',
            component: () => import('@/views/levels/secret.vue')
        },
        {
            path: '/account',
            name: 'Account',
            component: () => import('@/views/Account.vue')
        }

    ]
})

export default router