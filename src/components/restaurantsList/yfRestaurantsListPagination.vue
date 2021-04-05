<template>
  <div class="pagination">
    <div class="d-flex flex-column justify-content-center align-items-center container">
      <div class="d-flex">
        <button class="btn btn-primary" :class="page === 1 ? 'd-none' : ''" @click="decrementPage">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="btn btn-primary" @click="incrementPage">
          <i class="fas fa-chevron-right"></i>
        </button>
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
      page: parseInt(sessionStorage.getItem('pagination'), 10) || 1,
    }
  },
  methods: {
    ...mapActions(['fetchRestaurants', 'incrementOffset', 'decrementOffset']),
    /**
     * @function incrementPage
     * @desc This method increment page
     */
    incrementPage() {
      this.page += 1
      sessionStorage.setItem('pagination', this.page)
      this.incrementOffset(20)
    },
    /**
     * @function decrementPage
     * @desc This method decrement page
     */
    decrementPage() {
      this.page -= 1
      sessionStorage.setItem('pagination', this.page)
      this.decrementOffset(20)
    },
  },
}
</script>

<style scoped>
.pagination {
  margin-bottom: 20px;
}

.pagination .container button {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  margin: 0 10px;
}

.pagination .container .page {
  margin-top: 15px;
}
</style>
