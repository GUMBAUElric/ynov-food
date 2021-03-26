<template>
  <div class="d-flex restaurant-details">
    <div class="left justify-content-center">
      oui
    </div>
    <div class="right justify-content-center align-items-center">
      <yfRestaurantDetailsCardStep />
    </div>
  </div>
</template>

<script>
/** Import */
import { mapActions, mapState } from 'vuex'
import yfRestaurantDetailsCardStep from '@/components/restaurantDetails/yfRestaurantDetailsCardStep.vue'

export default {
  name: 'RestaurantDetails',
  components: {
    yfRestaurantDetailsCardStep,
  },
  data() {
    return {
      id_restaurant: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['restaurant_details']),
  },
  methods: {
    ...mapActions(['fetchRestaurantsDetails']),
  },
  created() {
    this.fetchRestaurantsDetails(this.id_restaurant)
  },
}
</script>

<style scoped>
.restaurant-details {
  height: 90vh;
}

.restaurant-details .left {
  width: 65%;
}

.restaurant-details .right {
  width: 35%;
  height: 100%;
}
</style>
