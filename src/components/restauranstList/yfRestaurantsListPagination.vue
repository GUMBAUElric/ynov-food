<template>
  <div class="pagination">
    <div class="container">
      <div class="arrow_left " :class="page === 1 ? 'hidden' : ''" @click="decrementPage">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="arrow_right" @click="incrementPage">
        <i class="fas fa-chevron-right"></i>
      </div>
      <div class="page">
        <p>Page : {{ page }}</p>
      </div>
    </div>
  </div>
</template>

<script>
/** Import */
import { mapActions } from 'vuex'

export default {
  name: 'yfRestaurantsListPagination',
  data() {
    return {
      page: 1,
    }
  },
  methods: {
    ...mapActions(['fetchRestaurants', 'incrementOffset', 'decrementOffset']),
    /**
     * @function incrementPage
     * @desc This method increment page
     * @returns {void}
     */
    incrementPage() {
      this.page += 1
      this.incrementOffset(14)
    },
    /**
     * @function decrementPage
     * @desc This method decrement page
     * @returns {void}
     */
    decrementPage() {
      this.page -= 1
      this.decrementOffset(14)
    },
  },
}
</script>

<style scoped>
.pagination {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pagination .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination .container .arrow_left,
.pagination .container .arrow_right {
  width: 40px;
  height: 40px;
  margin: 0 10px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.pagination .container .arrow_left.hidden {
  display: none;
}

.pagination .container .arrow_left i {
  margin-top: 2px;
  margin-right: 2px;
}

.pagination .container .arrow_right i {
  margin-top: 2px;
  margin-left: 2px;
}

.pagination .container .page {
  margin-top: 15px;
  color: #fff;
}
</style>
