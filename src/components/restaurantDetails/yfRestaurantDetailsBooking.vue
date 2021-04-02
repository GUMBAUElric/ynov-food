<template>
  <div class="container-booking">
    <yfRestaurantDetailsBookingHeader :isStepPayment="isStepPayment" />
    <transition name="fade">
      <yfRestaurantDetailsBookingInfos v-if="!isStepPayment" @bookingData="goToStepPayment" />
    </transition>
    <yfRestaurantDetailsBookingPayment v-if="isStepPayment" :booking="booking" />
  </div>
</template>

<script>
/** Import */
import { mapActions, mapState } from 'vuex'
import yfRestaurantDetailsBookingHeader from '@/components/restaurantDetails/yfRestaurantDetailsBookingHeader.vue'
import yfRestaurantDetailsBookingInfos from '@/components/restaurantDetails/yfRestaurantDetailsBookingInfos.vue'
import yfRestaurantDetailsBookingPayment from '@/components/restaurantDetails/yfRestaurantDetailsBookingPayment.vue'
import Payment from '@/assets/utils/Payment'

export default {
  name: 'yfRestaurantDetailsBooking',
  inject: ['notyf'],
  components: {
    yfRestaurantDetailsBookingHeader,
    yfRestaurantDetailsBookingInfos,
    yfRestaurantDetailsBookingPayment,
  },
  data() {
    return {
      isStepPayment: false,
      payment: Payment(),
      booking: {},
    }
  },
  computed: {
    ...mapState(['restaurant_details']),
  },
  methods: {
    ...mapActions(['addToBookings']),
    async goToStepPayment(booking) {
      try {
        // const { id } = this.restaurant_details

        //  await this.addToBookings({ idRestaurant: id, booking: this.booking })

        this.booking = booking

        this.notyf.success('Réservation ajoutée')

        this.isStepPayment = true
      } catch (error) {
        this.notyf.error(error.message)
      }
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
