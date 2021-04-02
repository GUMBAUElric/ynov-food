<template>
  <div class="container-booking">
    <yfRestaurantDetailsBookingHeader :isStepPayment="isStepPayment" />
    <transition name="fade">
      <yfRestaurantDetailsBookingInfos v-if="!isStepPayment" @bookingData="goToStepPayment" />
    </transition>
    <yfRestaurantDetailsBookingPayment v-if="isStepPayment" :booking="booking" />
    <div v-if="isStepPayment" class="d-flex justify-content-center infos-covid">
      <p><sup>*</sup> Au vu de la situation sanitaire, toutes vos réservations sont offertes.</p>
    </div>
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
    goToStepPayment(booking) {
      this.booking = booking

      console.log(this.booking)
      this.isStepPayment = true
    },
  },
}
</script>

<style scoped>
.container-booking .infos-covid {
  margin-top: 15px;
  opacity: 0;
  animation: fade 500ms ease-out forwards;
  animation-delay: 5s;
}

.container-booking .infos-covid p {
  width: 230px;
  text-align: justify;
}

.container-booking .infos-covid img {
  width: 150px;
}

/** Animations */
@keyframes fade {
  100% {
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
