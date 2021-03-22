<template>
  <div class="slider">
    <div class="container">
      <div class="value">{{ range }}</div>
      <input type="range" min="0" max="5" step="0.5" value="0" @change="filterByRating($event)" />
      <i class="fas fa-star"></i>
    </div>
  </div>
</template>

<script>
/** Import */
import { mapActions } from 'vuex'

export default {
  name: 'yfRestaurantsListSlider',
  data() {
    return {
      range: '0',
    }
  },
  methods: {
    ...mapActions(['fetchRestaurants', 'updateRating']),
    /**
     * @function filterByRating
     * @desc Ths method filter restaurant by rating
     * @param {event} e Evenement
     * @returns {void}
     */
    async filterByRating(e) {
      const { value } = e.target
      this.range = value
      this.updateRating(value)
      this.fetchRestaurants()
    },
  },
}
</script>

<style scoped>
.slider {
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
}

.slider .container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.slider .container input {
  margin: 0 20px;
  height: 3px;
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #ddd;
}
</style>
