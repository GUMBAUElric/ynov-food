/**------------------------------------------------------------------------
 * ?                                ABOUT
 * @author         : ElricGUMBAU
 * @email          : elric.gumbau@ynov.com
 * @description    : State management
 *------------------------------------------------------------------------* */

/** Import */
import Vue from 'vue'
import Vuex from 'vuex'
import Request from '@/assets/modules/Request'

/** @constant {function} getYelp Send HTTP GET Request to yelp API */
const { getYelp } = Request()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants_list: [],
    rating: '0',
    params: {
      latitude: '45.764042',
      longitude: '4.835659',
      limit: 12,
      offset: 0,
      open_now: false,
      radius: 0,
      term: '',
    },
  },
  mutations: {
    UPDATE_RESTAURANTS_LIST(state, newList) {
      state.restaurants_list = newList
    },
    INCREMENT_OFFSET(state, offset) {
      state.params.offset += offset
    },
    DECREMENT_OFFSET(state, offset) {
      state.params.offset -= offset
    },
    UPDATE_TERM(state, category) {
      state.params.term = category
    },
    UPDATE_LATITUDE(state, latitude) {
      state.params.latitude = latitude
    },
    UPDATE_LONGITUDE(state, longitude) {
      state.params.longitude = longitude
    },
    UPDATE_RADIUS(state, radius) {
      state.params.radius = radius
    },
    UPDATE_OPEN_NOW(state, openNow) {
      state.params.open_now = openNow
    },
    UPDATE_RATING(state, rating) {
      state.rating = rating
    },
  },
  actions: {
    async fetchRestaurants({ commit, state }) {
      try {
        let { businesses } = await getYelp('/businesses/search', state.params)

        if (state.rating !== '0') {
          businesses = businesses.filter(item => state.rating === item.rating.toString())
        }

        commit('UPDATE_RESTAURANTS_LIST', businesses)
      } catch (error) {
        console.error(error)
      }
    },
    incrementOffset({ commit, dispatch }, offset) {
      commit('INCREMENT_OFFSET', offset)
      dispatch('fetchRestaurants')
    },
    decrementOffset({ commit, dispatch }, offset) {
      commit('DECREMENT_OFFSET', offset)
      dispatch('fetchRestaurants')
    },
    updateTerm({ commit, dispatch }, term) {
      commit('UPDATE_TERM', term)
      dispatch('fetchRestaurants')
    },
    enableGeolocation({ commit, dispatch }, geolocation) {
      commit('UPDATE_LATITUDE', geolocation.latitude)
      commit('UPDATE_LONGITUDE', geolocation.longitude)
      commit('UPDATE_RADIUS', geolocation.radius)
      dispatch('fetchRestaurants')
    },
    disableGeolocation({ commit, dispatch }) {
      commit('UPDATE_LATITUDE', '45.764042')
      commit('UPDATE_LONGITUDE', '4.835659')
      commit('UPDATE_RADIUS', 0)
      dispatch('fetchRestaurants')
    },
    updateOpenNow({ commit, dispatch }, openNow) {
      commit('UPDATE_OPEN_NOW', openNow)
      dispatch('fetchRestaurants')
    },
    updateRating({ commit }, rating) {
      commit('UPDATE_RATING', rating)
    },
  },
})
