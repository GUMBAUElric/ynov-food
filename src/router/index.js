import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Restaurant.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/restaurants',
  },
  {
    path: '/restaurants',
    name: 'Home',
    component: Home,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
