<template>
  <div class="container__home">
    <yfSearchBar />
    <div class="container__cards__category">
      <yfCardCategory v-for="(item, idx) in 8" :key="idx" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import yfSearchBar from '@/components/home/yfSearchBar.vue'
import yfCardCategory from '@/components/home/yfCardCategory.vue'

export default {
  name: 'Home',
  components: {
    yfSearchBar,
    yfCardCategory,
  },
}
</script>

<style scoped>
.container__home {
  width: 100%;
  height: 85vh;
}

.container__home .container__cards__category {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
</style>
