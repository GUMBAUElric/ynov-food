import Vue from 'vue'
import Vuex from 'vuex'
import Request from '@/assets/modules/Request'

const { getYelp } = Request()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants_list: [],
    offset: 0,
  },
  mutations: {
    UPDATE_RESTAURANTS_LIST(state, newList) {
      state.restaurants_list = newList
    },
    INCREMENT_OFFSET(state, offset) {
      state.offset += offset
    },
    DECREMENT_OFFSET(state, offset) {
      state.offset -= offset
    },
  },
  actions: {
    async fetchRestaurants({ commit }, params) {
      try {
        if (!params) params = {}

        // Add latitude and longitude of Lyon if it doesn't exist
        if (!('latitude' in params) || !('longitude' in params)) {
          params.latitude = '45.764042'
          params.longitude = '4.835659'
        }

        // Add limit if it doesn't exist
        if (!('limit' in params)) params.limit = 12

        const { businesses } = await getYelp('/businesses/search', params)
        commit('UPDATE_RESTAURANTS_LIST', businesses)
      } catch (error) {
        console.error(error)
      }
    },
    incrementOffset({ commit }, offset) {
      commit('INCREMENT_OFFSET', offset)
    },
    decrementOffset({ commit }, offset) {
      commit('DECREMENT_OFFSET', offset)
    },
  },
})
