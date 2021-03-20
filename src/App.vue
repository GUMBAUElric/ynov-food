<template>
  <div id="app">
    <yfNavBar />
    <router-view />
  </div>
</template>

<script>
/** Import */
import yfNavBar from '@/components/yfNavBar.vue'
import Firebase from '@/assets/modules/FireBase'

const { initializeApp } = Firebase()

export default {
  name: 'App',
  components: {
    yfNavBar,
  },
  created() {
    initializeApp()
  },
}
</script>

<style scoped></style>
