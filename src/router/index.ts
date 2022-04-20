import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/home-index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue')
  }
]
export default createRouter({
  history: createWebHashHistory(),
  routes
})
