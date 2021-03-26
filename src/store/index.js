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
import { vuexfireMutations, firebaseAction } from 'vuexfire'
import 'firebase/database'
import db from '@/assets/modules/FireBase'

/** @constant {function} getYelp Send HTTP GET Request to yelp API */
const { getYelp } = Request()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants_list: [],
    restaurant_details: {},
    auto_complete: [],
    favorites: [],
    rating: '0',
    params: {
      latitude: '45.764042',
      longitude: '4.835659',
      limit: 20,
      offset: 0,
      open_now: false,
      radius: 0,
      term: '',
    },
  },
  mutations: {
    ...vuexfireMutations,
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
    UPDATE_AUTO_COMPLETE(state, autoComplete) {
      state.auto_complete = autoComplete
    },
    UPDATE_FAVORITES(state, favorites) {
      state.favorites = favorites
    },
    UPDATE_RESTAURANT_DETAILS(state, restaurant) {
      state.restaurant_details = restaurant
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
    async fetchRestaurantsDetails({ commit }, idRestaurant) {
      try {
        const restaurantDetails = await getYelp(`/businesses/${idRestaurant}`)
        commit('UPDATE_RESTAURANT_DETAILS', restaurantDetails)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchAutoComplete({ commit, state }, text) {
      try {
        const { latitude, longitude } = state.params

        let { categories, businesses, terms } = await getYelp('/autocomplete', {
          latitude,
          longitude,
          text,
        })

        categories = categories.map(item => item.title)
        businesses = businesses.map(item => item.name)
        terms = terms.map(item => item.text)

        const autoComplete = [...categories, ...businesses, ...terms]
        commit('UPDATE_AUTO_COMPLETE', autoComplete)
      } catch (error) {
        console.error(error)
      }
    },
    bindFavorites: firebaseAction(async ({ bindFirebaseRef }) => {
      return bindFirebaseRef('favorites', db.ref('favorites'))
    }),
    addToFavorite: firebaseAction(async (context, idRestaurant) => {
      try {
        await db
          .ref(`favorites`)
          .child(idRestaurant)
          .set({ favorite: true })
      } catch (error) {
        console.error(error)
      }
    }),
    removeFavorite: firebaseAction(async (context, idRestaurant) => {
      try {
        await db
          .ref('favorites')
          .child(idRestaurant)
          .remove()
      } catch (error) {
        console.error(error)
      }
    }),
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
    updateAutoComplete({ commit }, text) {
      commit('UPDATE_AUTO_COMPLETE', text)
    },
    resetSearching({ commit }) {
      commit('UPDATE_AUTO_COMPLETE', [])
      commit('UPDATE_TERM', '')
    },
    updateFavorites({ commit }, favorites) {
      commit('UPDATE_FAVORITES', favorites)
    },
    updateRestaurantDetails({ commit }, details) {
      commit('UPDATE_RESTAURANT_DETAILS', details)
    },
  },
})
