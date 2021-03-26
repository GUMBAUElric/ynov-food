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
    ...mapActions(['bindFavorites']),
  },
  created() {
    // this.bindFavorites()
  },
}
</script>

<style scoped></style>
