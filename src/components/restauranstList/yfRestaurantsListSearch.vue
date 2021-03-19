<template>
  <div class="search_bar">
    <!--<input
      type="text"
      placeholder="Search food, restaurant, ..."
      v-model="search"
      @keyup.enter="updateTerm(search)"
    />-->
    <v-select class="style-chooser" :options="options"></v-select>
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
      options: [],
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
  margin: 40px 60px 0 60px;
  display: flex;
  align-items: center;
}
</style>
