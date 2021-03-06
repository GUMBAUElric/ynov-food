/**------------------------------------------------------------------------------------------------
 * ?                                           ABOUT
 * @author         :  ElricGUMBAU
 * @email          :  elric.gumbau@ynov.com
 * @description    :  Building Single Page Applications (https://router.vuejs.org/)
 *------------------------------------------------------------------------------------------------* */

import Vue from 'vue'
import VueRouter from 'vue-router'
import RestaurantsList from '@/views/RestaurantsList.vue'
import RestaurantDetails from '@/views/RestaurantDetails.vue'
import Calendar from '@/views/Calendar.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/restaurants/list',
  },
  {
    path: '*',
    redirect: '/notfound',
  },
  {
    path: '/notfound',
    name: 'NotFound',
    component: NotFound,
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
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
