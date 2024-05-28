import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: HomeView
    },
    {
      path: '/login',
      name: 'login',
      components: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashbord',
      name: 'dashbord',
      components: () => import('../views/DashboardView.vue')
    }
  ]
})

export default router
