<template>
  <div id="app">
    <yfNavBar />
    <router-view />
  </div>
</template>

<script>
/** Import */
import { mapActions } from 'vuex'
import yfNavBar from '@/components/yfNavBar.vue'

export default {
  name: 'App',
  components: {
    yfNavBar,
  },
  methods: {
    ...mapActions(['bindFavorites', 'bindBookings']),
  },
  created() {
    sessionStorage.clear()
    // this.bindFavorites()
    this.bindBookings()
  },
}
</script>

<style scoped></style>
