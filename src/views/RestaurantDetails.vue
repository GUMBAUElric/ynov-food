<template>
  <div class="d-flex justify-content-center align-items-center restaurant-details">
    <div class="d-flex flex-column justify-content-center container" v-if="display">
      <div class="top">
        <yfRestaurantDetailsInfos />
      </div>
      <div class="middle">
        <yfRestaurantDetailsMap />
      </div>
      <div class="bottom">
        <yfRestaurantDetailsReservation />
      </div>
    </div>
    <div v-else>Veuillez attendre svp</div>
  </div>
</template>

<script>
/** Import */
import { mapActions } from 'vuex'
import yfRestaurantDetailsInfos from '@/components/restaurantDetails/yfRestaurantDetailsInfos.vue'
import yfRestaurantDetailsMap from '@/components/restaurantDetails/yfRestaurantDetailsMap.vue'
import yfRestaurantDetailsReservation from '@/components/restaurantDetails/yfRestaurantDetailsReservation.vue'

export default {
  name: 'RestaurantDetails',
  components: {
    yfRestaurantDetailsInfos,
    yfRestaurantDetailsMap,
    yfRestaurantDetailsReservation,
  },
  data() {
    return {
      id_restaurant: this.$route.params.id,
      display: false,
    }
  },
  methods: {
    ...mapActions(['fetchRestaurantsDetails', 'updateRestaurantDetails']),
  },
  async created() {
    try {
      await this.fetchRestaurantsDetails(this.id_restaurant)
      this.display = true
    } catch (error) {
      console.error(error)
    }
  },
  beforeDestroy() {
    this.updateRestaurantDetails({})
  },
}
</script>

<style scoped>
.restaurant-details {
  width: 100%;
}

.restaurant-details .container {
  width: 80%;
}

.restaurant-details .container .top {
  width: 100%;
  margin: 40px 0;
}

.restaurant-details .container .middle {
  width: 100%;
  margin: 40px 0;
}

.restaurant-details .container .bottom {
  width: 100%;
  margin: 40px 0;
}

@media screen and (min-width: 1800px) {
  .restaurant-details .container {
    width: 1700px;
  }
}
</style>
