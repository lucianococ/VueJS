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
  path: '/client',
  name: 'Client',
  component: () => import(/* webpackChunkName: "client" */ '../views/Client.vue')
},
{
  path: '/clientes/:id',
  name: 'clientes',
  component: () => import(/* webpackChunkName: "clientes" */ '../views/Clientes.vue')
},
 { path: '/preu',
  name: 'Preu',
  component: () => import(/* webpackChunkName: "preu" */ '../views/Preu.vue')
},
{
  path: '/magatzem',
  name: 'Magatzem',
  component: () => import(/* webpackChunkName: "magatzem" */ '../views/Magatzem.vue')
},
{
  path: '/botiga/:nombre',
  name: 'Botiga',
  component: () => import(/* webpackChunkName: "botiga" */ '../views/Botiga.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
