import Vue from 'vue'
import VueRouter from 'vue-router'
import RestaurantList from '@/views/RestaurantList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/restaurants/list',
  },
  {
    path: '/restaurants/list',
    name: 'RestaurantList',
    component: RestaurantList,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
