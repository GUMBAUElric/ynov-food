<template>
  <div id="app">
    <yfNavBar />
    <router-view />
  </div>
</template>

<script>
/** Import */
import yfNavBar from '@/components/yfNavBar.vue'

export default {
  name: 'App',
  components: {
    yfNavBar,
  },
}
</script>

<style scoped></style>
