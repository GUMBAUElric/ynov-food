<template>
  <div class="pagination">
    <div class="d-flex flex-column justify-content-center align-items-center container">
      <div class="d-flex">
        <div
          class="d-flex justify-content-center align-items-center arrow-right arrow-left"
          :class="page === 1 ? 'd-none' : ''"
          @click="decrementPage"
        >
          <i class="fas fa-chevron-left"></i>
        </div>
        <div
          class="d-flex justify-content-center align-items-center arrow-right"
          @click="incrementPage"
        >
          <i class="fas fa-chevron-right"></i>
        </div>
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
      this.incrementOffset(20)
    },
    /**
     * @function decrementPage
     * @desc This method decrement page
     * @returns {void}
     */
    decrementPage() {
      this.page -= 1
      this.decrementOffset(20)
    },
  },
}
</script>

<style scoped>
.pagination {
  margin-bottom: 20px;
}

.pagination .container .arrow-left,
.pagination .container .arrow-right {
  width: 40px;
  height: 40px;
  margin: 0 10px;
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;
}

.pagination .container .arrow-left i {
  margin-top: 2px;
  margin-right: 2px;
}

.pagination .container .arrow-right i {
  margin-top: 2px;
  margin-left: 2px;
}

.pagination .container .page {
  margin-top: 15px;
  color: #fff;
}
</style>
