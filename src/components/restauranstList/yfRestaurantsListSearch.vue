<template>
  <div class="search_bar">
    <input
      type="text"
      placeholder="Search food, restaurant, ..."
      v-model="search"
      @keyup.enter="updateTerm(search)"
    />
    <i class="fas fa-search"></i>
  </div>
</template>

<script>
/** Import */
import { mapActions } from 'vuex'

export default {
  name: 'yfRestaurantsListSearch',
  data() {
    return {
      search: '',
    }
  },
  watch: {
    search(newValue) {
      if (newValue === '') this.updateTerm('')
    },
  },
  methods: {
    ...mapActions(['updateTerm']),
  },
}
</script>

<style scoped>
.search_bar {
  height: 40px;
  border-radius: 20px;
  margin: 40px 60px 0 60px;
  display: flex;
  align-items: center;
  background-color: #faf9fb;
}

.search_bar input {
  height: 100%;
  width: 160px;
  margin: 10px 10px;
  border-color: transparent;
  background-color: transparent;
  color: var(--text-color);
}

.search_bar i {
  margin-right: 20px;
  margin-left: 10px;
  color: var(--text-color);
}
</style>
