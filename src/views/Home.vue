<template>
  <div class="container__home">
    <yfSearchBar />
  </div>
</template>

<script>
// @ is an alias to /src
import yfSearchBar from '@/components/home/yfSearchBar.vue'

export default {
  name: 'Home',
  components: {
    yfSearchBar,
  },
}
</script>

<style scoped>
.container__home {
  width: 100%;
  height: 85vh;
}
</style>
