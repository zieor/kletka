import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHashHistory (import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
        component: Home,
    },

      {
          path: '/page1',
          name: 'Page1',
          component: () => import('../views/levels.vue'),
      },
      {
          path: '/news',
          name: 'News',
          component: () => import('../views/news.vue'),
      },
      {
          path: '/locations',
          name: 'Locations',
          component: () => import('@/views/levels.vue')
      },
      {
          path: '/locations/gigakhrushch',
          name: 'Gigakhrushch',
          component: () => import('@/views/levels/gigakhrushch.vue')
      },


  ],
})

export default router
