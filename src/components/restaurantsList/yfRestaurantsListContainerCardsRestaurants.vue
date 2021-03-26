<template>
  <div class="d-flex flex-column justify-content-center cards-restaurants">
    <div class="title">
      <h1>Restaurants</h1>
    </div>
    <div class="d-flex flex-wrap justify-content-around container">
      <yfRestaurantsListCardRestaurant
        v-for="item in restaurantsList"
        :key="item.id"
        :restaurant="item"
        :favorites="favorites"
      />
    </div>
  </div>
</template>

<script>
/** Import */
import { mapState, mapActions } from 'vuex'
import yfRestaurantsListCardRestaurant from '@/components/restaurantsList/yfRestaurantsListCardRestaurant.vue'

export default {
  name: 'yfRestaurantsListContainerCardsRestaurants',
  components: {
    yfRestaurantsListCardRestaurant,
  },
  props: {
    /** The list of restaurants */
    restaurantsList: {
      type: Array,
      required: true,
      default: () => {
        return []
      },
    },
  },
  computed: {
    ...mapState(['favorites']),
  },
  methods: {
    ...mapActions(['bindFavorites']),
  },
  created() {
    this.bindFavorites()
  },
}
</script>

<style scoped>
.cards-restaurants .title {
  position: relative;
  margin: 50px;
}

.cards-restaurants .title::before {
  content: '';
  position: absolute;
  width: 7px;
  height: 7px;
  bottom: 5px;
  border-radius: 50%;
  left: -10px;
  background-color: var(--primary-color);
}

.cards-restaurants .title h1 {
  font-size: 1.8em;
  font-weight: 300;
}

.cards-restaurants .container {
  width: 100%;
}

@media screen and (min-width: 1600px) {
  .cards-restaurants {
    width: 1700px;
  }
}
</style>
