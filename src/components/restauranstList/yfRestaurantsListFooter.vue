<template>
  <div class="footer">
    <div class="pagination">
      <div class="arrow_left " :class="page === 1 ? 'hidden' : ''" @click="decrementPage">
        <i class="fas fa-chevron-left"></i>
      </div>
      <div class="arrow_right" @click="incrementPage">
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div class="page">
      <p>Page : {{ page }}</p>
    </div>
  </div>
</template>

<script>
/** Import */
import { mapActions } from 'vuex'

export default {
  name: 'yfRestaurantsListFooter',
  data() {
    return {
      page: 1,
    }
  },
  methods: {
    ...mapActions(['fetchRestaurants', 'incrementOffset', 'decrementOffset']),
    incrementPage() {
      this.page += 1
      this.incrementOffset(12)
    },
    decrementPage() {
      this.page -= 1
      this.decrementOffset(12)
    },
  },
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.footer .pagination {
  display: flex;
  align-items: center;
}

.footer .pagination .arrow_left,
.footer .pagination .arrow_right {
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

.footer .pagination .arrow_left.hidden {
  display: none;
}

.footer .pagination .arrow_left i {
  margin-top: 2px;
  margin-right: 2px;
}

.footer .pagination .arrow_right i {
  margin-top: 2px;
  margin-left: 2px;
}

.footer .page {
  margin-top: 15px;
  color: #fff;
}
</style>
