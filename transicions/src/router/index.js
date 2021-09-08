import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/modal',
    name: 'Modal',
    component: () => import(/* webpackChunkName: "modal" */ '../views/Modal.vue')
  },
  {
    path: '/buscador',
    name: 'Buscador',
    component: () => import(/* webpackChunkName: "buscador" */ '../views/Buscador.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
