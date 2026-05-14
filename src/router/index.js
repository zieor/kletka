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
          component: () => import('../views/Page1.vue'),
      },
  ],
})

export default router
