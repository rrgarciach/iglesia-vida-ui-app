import MensajesVue from '@/views/Mensajes.vue'
import CampusDeliciasVue from '@/views/CampusDelicias.vue'
import CampusChihuahuaVue from '@/views/CampusChihuahua.vue'
import CampusCuauhtemocVue from '@/views/CampusCuauhtemoc.vue'
import CampusParralVue from '@/views/CampusParral.vue'
import RegistroVue from '@/views/Registro.vue'
import CampusMainVue from '@/views/CampusMain.vue'
import CasaVue from '@/views/Casa.vue'
import DarVue from '../views/Dar.vue'
import HomeView from '../views/HomeView.vue'

import { createRouter, createWebHistory } from 'vue-router'


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
    },
    {
      path: '/campus-delicias',
      name: 'campusdelicias',
      component: CampusDeliciasVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/campus-chihuahua',
      name: 'campuschihuahua',
      component: CampusChihuahuaVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/campus-cuauhtemoc',
      name: 'campuscuauhtemoc',
      component: CampusCuauhtemocVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/campus-parral',
      name: 'campusparral',
      component: CampusParralVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/registro',
      name: 'registro',
      component: RegistroVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      path: '/mensajes',
      name: 'mensajes',
      component: MensajesVue
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

export default router
