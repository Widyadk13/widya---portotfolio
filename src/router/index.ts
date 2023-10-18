import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Pages/homePages/index.vue')
    },
    {
      path: '/pendidikan',
      name: 'pendidikan',
      component: () => import('../views/Pages/pendidikan/index.vue')
    },
    {
      path: '/pengalaman',
      name: 'pengalaman',
      component: () => import('../views/Pages/pengalaman/index.vue')
    },
    {
      path: '/projek',
      name: 'projek',
      component: () => import('../views/Pages/projek/index.vue')
    },
    {
      path: '/kontak-saya',
      name: 'kontak saya',
      component: () => import('../views/Pages/kontakSaya/index.vue')
    }
  ]
})

export default router
