import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/service/problem',
      name: 'problem',
      component: () => import('../views/Problem.vue')
    },
    {
      path: '/service/maintain',
      name: 'maintain',
      component: () => import('../views/Maintain.vue')
    },
    {
      path: '/service/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
