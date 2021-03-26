<template>
  <div>{{ restaurant_details }}</div>
</template>

<script>
/** Import */
import { mapActions, mapState } from 'vuex'

export default {
  name: 'RestaurantDetails',
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

<style scoped></style>
