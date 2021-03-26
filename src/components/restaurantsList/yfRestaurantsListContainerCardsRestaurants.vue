<template>
  <div class="d-flex flex-column justify-content-center cards-restaurants">
    <div class="title">
      <h1>Restaurants</h1>
    </div>
    <div class="d-flex flex-wrap justify-content-around container">
      <yfRestaurantsListCardRestaurant
        v-for="item in restaurants_list"
        :key="item.id"
        :restaurant="item"
        :favorites="favorites"
      />
    </div>
  </div>
</template>

<script>
/** Import */
import { mapState } from 'vuex'
import yfRestaurantsListCardRestaurant from '@/components/restaurantsList/yfRestaurantsListCardRestaurant.vue'

export default {
  name: 'yfRestaurantsListContainerCardsRestaurants',
  components: {
    yfRestaurantsListCardRestaurant,
  },
  computed: {
    ...mapState(['favorites', 'restaurants_list']),
  },
}
</script>

<style scoped>
.cards-restaurants .container {
  width: 100%;
}

@media screen and (min-width: 1600px) {
  .cards-restaurants {
    width: 1700px;
  }
}
</style>
