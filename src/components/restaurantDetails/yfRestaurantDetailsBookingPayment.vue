<template>
  <div class="container">
    <h1>Récapitulatif</h1>
    {{ booking }}
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantDetailsBookingPayment',
  props: {
    booking: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.container {
  width: 500px;
  margin-top: 10px;
}
</style>
