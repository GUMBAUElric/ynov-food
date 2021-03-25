<template>
  <div class="d-flex flex-column align-items-center restaurants-list">
    <div class="top flex-column">
      <yfRestaurantsListTagLine />
      <yfRestaurantsListOptions />
    </div>
    <div class="middle flex-column">
      <yfRestaurantsListCategories />
    </div>
    <div class="bottom d-flex flex-column justify-content-center">
      <yfRestaurantsListContainerCardsRestaurants :restaurantsList="restaurantsList" />
      <yfRestaurantsListPagination />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import yfRestaurantsListTagLine from '@/components/restaurantsList/yfRestaurantsListTagLine.vue'
import yfRestaurantsListOptions from '@/components/restaurantsList/yfRestaurantsListOptions.vue'
import yfRestaurantsListCategories from '@/components/restaurantsList/yfRestaurantsListCategories.vue'
import yfRestaurantsListContainerCardsRestaurants from '@/components/restaurantsList/yfRestaurantsListContainerCardsRestaurants.vue'
import yfRestaurantsListPagination from '@/components/restaurantsList/yfRestaurantsListPagination.vue'
import restaurantsList from '@/assets/json/restaurantsList.json'

export default {
  name: 'RestaurantsList',
  components: {
    yfRestaurantsListTagLine,
    yfRestaurantsListOptions,
    yfRestaurantsListCategories,
    yfRestaurantsListContainerCardsRestaurants,
    yfRestaurantsListPagination,
  },
  data() {
    return {
      restaurantsList,
    }
  },
  computed: {
    ...mapState(['restaurants_list']),
  },
  methods: {
    ...mapActions(['fetchRestaurants', 'updateTerm']),
  },
  mounted() {
    // this.fetchRestaurants()
  },
}
</script>

<style scoped>
.restaurants-list {
  width: 100%;
}

.restaurants-list .top {
  width: 95%;
}

.restaurants-list .middle {
  width: 95%;
}

.restaurants-list .bottom {
  width: 95%;
}
</style>
