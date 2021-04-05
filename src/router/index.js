import Vue from 'vue'
import VueRouter from 'vue-router'
import RestaurantsList from '@/views/RestaurantsList.vue'
import RestaurantDetails from '@/views/RestaurantDetails.vue'
import Redirect from '@/views/Redirect.vue'

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
  {
    path: '/restaurant/details/:id',
    name: 'RestaurantDetails',
    component: RestaurantDetails,
  },
  {
    path: '/redirect',
    name: 'Redirect',
    component: Redirect,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
