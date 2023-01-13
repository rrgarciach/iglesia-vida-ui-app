import CampusMainVue from '@/views/CampusMain.vue'
import CasaVue from '@/views/Casa.vue'
import { createRouter, createWebHistory } from 'vue-router'
import DarVue from '../views/Dar.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/dar',
      name: 'dar',
      component: DarVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/casa',
      name: 'casa',
      component: CasaVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/campus',
      name: 'campus',
      component: CampusMainVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

export default router
