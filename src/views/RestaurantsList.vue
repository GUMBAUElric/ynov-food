<template>
  <section class="d-flex flex-column align-items-center restaurants-list">
    <div class="top flex-column">
      <yfRestaurantsListTagLine />
      <yfRestaurantsListOptions />
    </div>
    <div class="middle flex-column">
      <yfRestaurantsListCategories />
    </div>
    <div class="bottom d-flex">
      <div class="container d-flex flex-wrap justify-content-around">
        <yfRestaurantsListCardRestaurant
          v-for="item in restaurantsList"
          :key="item.id"
          :restaurant="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import yfRestaurantsListTagLine from '@/components/restaurantsList/yfRestaurantsListTagLine.vue'
import yfRestaurantsListOptions from '@/components/restaurantsList/yfRestaurantsListOptions.vue'
import yfRestaurantsListCategories from '@/components/restaurantsList/yfRestaurantsListCategories.vue'
import yfRestaurantsListCardRestaurant from '@/components/restaurantsList/yfRestaurantsListCardRestaurant.vue'
import restaurantsList from '@/assets/json/restaurantsList.json'

export default {
  name: 'RestaurantsList',
  components: {
    yfRestaurantsListTagLine,
    yfRestaurantsListOptions,
    yfRestaurantsListCategories,
    yfRestaurantsListCardRestaurant,
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

.restaurants-list .bottom .container {
  width: 100%;
  margin-top: 25px;
}

@media screen and (min-width: 1800px) {
  .restaurants-list .container-restaurants {
    width: 1700px;
  }
}
</style>
