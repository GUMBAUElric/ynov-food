<template>
  <div class="container-booking">
    <yfRestaurantDetailsBookingHeader :isStepPayment="layout.isStepPayment" />
    <transition name="fade" mode="out-in">
      <yfRestaurantDetailsBookingInfos
        v-if="!layout.isStepPayment"
        :booking="booking"
        @bookingData="goToStepPayment"
      />
    </transition>
    <yfRestaurantDetailsBookingPayment v-if="layout.isStepPayment" :booking="booking" />
    <div
      v-if="layout.isStepPayment"
      class="d-flex flex-column justify-content-center align-items-center footer"
    >
      <p><sup>*</sup> Au vu de la situation sanitaire, toutes vos réservations sont offertes.</p>
      <button class="btn" @click="goToStepBooking">
        <i class="fas fa-long-arrow-alt-left"></i>
        <span>Retour</span>
      </button>
    </div>
  </div>
</template>

<script>
/** Import */
import yfRestaurantDetailsBookingHeader from '@/components/restaurantDetails/yfRestaurantDetailsBooking/yfRestaurantDetailsBookingHeader.vue'
import yfRestaurantDetailsBookingInfos from '@/components/restaurantDetails/yfRestaurantDetailsBooking/yfRestaurantDetailsBookingInfos.vue'
import yfRestaurantDetailsBookingPayment from '@/components/restaurantDetails/yfRestaurantDetailsBooking/yfRestaurantDetailsBookingPayment.vue'

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
      layout: {
        isStepPayment: false,
      },
      booking: {
        name: '',
        email: '',
        nb_of_persons: {
          price: 1,
          value: '1',
        },
        reservation: {
          day: '',
          time: {
            price: 2,
            value: '20:30',
          },
        },
        message: '',
        is_checkout: false,
      },
    }
  },
  methods: {
    /**
     * @function goToStepPayment
     * @desc Go to the step payment
     * @param {object} booking The data booking
     */
    goToStepPayment(booking) {
      this.booking = booking
      this.layout.isStepPayment = true
    },
    /**
     * @function goToStepBooking
     * @desc Go to the step booking
     */
    goToStepBooking() {
      this.layout.isStepPayment = false
    },
  },
}
</script>

<style scoped>
.container-booking .footer {
  margin-top: 15px;
  opacity: 0;
  animation: fade 500ms ease-out forwards;
  animation-delay: 5s;
}

.container-booking .footer p {
  width: 230px;
  text-align: justify;
}

.container-booking .footer .btn {
  border-radius: 5px;
  height: 30px;
  width: 70px;
  font-size: 0.9em;
  margin-top: 20px;
}

.container-booking .footer .btn i {
  transform: scale(0);
  margin-right: -17px;
  transition: 300ms ease;
  margin-top: 1px;
}

.container-booking .footer .btn:hover {
  width: 90px;
}

.container-booking .footer .btn:hover i {
  transform: scale(1);
  margin-right: 3px;
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
