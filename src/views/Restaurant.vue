<template>
  <div class="container__home">
    <div class="container__search__bar">
      <yfSearchBar />
    </div>

    <div class="container__cards__category">
      <yfCardCategory v-for="(item, idx) in 8" :key="idx" />
    </div>
    <div class="container__cards__restaurant">
      <yfCardRestaurant v-for="(item, idx) in 10" :key="idx" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import yfSearchBar from '@/components/home/yfSearchBar.vue'
import yfCardCategory from '@/components/home/yfCardCategory.vue'
import yfCardRestaurant from '@/components/home/yfCardRestaurant.vue'

export default {
  name: 'Home',
  components: {
    yfSearchBar,
    yfCardCategory,
    yfCardRestaurant,
  },
}
</script>

<style scoped>
.container__home {
  width: 100%;
}

.container__home .container__cards__category {
  width: 100%;
  margin: 60px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.container__home .container__search__bar {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container__home .container__cards__restaurant {
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
