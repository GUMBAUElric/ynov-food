import Vue from 'vue'
import Vuex from 'vuex'
import Request from '@/assets/modules/Request'

const { getYelp } = Request()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants_list: [],
    offset: 0,
    category: '',
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
    UPDATE_TERM(state, category) {
      state.category = category
    },
  },
  actions: {
    async fetchRestaurants({ commit, state }, params = {}) {
      try {
        // Add latitude and longitude of Lyon if it doesn't exist
        if (!('latitude' in params) || !('longitude' in params)) {
          params.latitude = '45.764042'
          params.longitude = '4.835659'
        }

        // Add limit if it doesn't exist
        if (!('limit' in params)) params.limit = 12

        // Check offset and category
        if (state.offset) params.offset = state.offset
        if (state.category) params.term = state.category

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
    updateCategory({ commit }, category) {
      commit('UPDATE_TERM', category)
    },
  },
})
