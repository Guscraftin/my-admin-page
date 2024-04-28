import { createRouter, createWebHistory } from 'vue-router'
import AdminPage from '../views/AdminPage.vue'

const routes = [
  {
    path: '/',
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router