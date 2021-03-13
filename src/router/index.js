import Vue from 'vue'
import VueRouter from 'vue-router'
import RestaurantsList from '@/views/RestaurantsList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/restaurants/list',
  },
  {
    path: '/restaurants/list',
    name: 'RestaurantsList',
    component: RestaurantsList,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
