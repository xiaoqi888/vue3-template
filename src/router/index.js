import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/page1',
      component: () => import('../views/page1.vue'),
      meta: { title: 'page1' }
    },
    {
      path: '/page2',
      component: () => import('../views/page2.vue'),
      meta: { title: 'page2' }
    }
  ]
})

export default router