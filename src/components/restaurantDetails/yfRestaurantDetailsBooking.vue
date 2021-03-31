<template>
  <div class="card-material">
    <div class="card-material-content">
      <div class="card-material-header">
        <div class="d-flex flex-column card-material-header-content">
          <div class="d-flex justify-content-center tagline">
            <h1>Réserver dès maintenant !</h1>
          </div>
          <div class="d-flex justify-content-around step">
            <div class="d-flex align-items-center step-booking">
              <div class="icon" :class="!isStepPayment ? 'active' : ''">
                <i class="far fa-calendar-alt"></i>
              </div>
              <div class="infos">
                <h3>Étape 1</h3>
                <p>Réservation</p>
              </div>
            </div>
            <div class="d-flex align-items-center step step-payment">
              <div class="icon" :class="isStepPayment ? 'active' : ''">
                <i class="far fa-shopping-cart"></i>
              </div>
              <div class="infos">
                <h3>Étape 2</h3>
                <p>Paiement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column justify-content-around align-items-center card-material-body">
        <yfRestaurantDetailsBookingInfos @bookingData="goToStepPayment" />
        <yfRestaurantDetailsBookingPayment />
      </div>
    </div>
  </div>
</template>

<script>
/** Import */
import { mapActions, mapState } from 'vuex'
import yfRestaurantDetailsBookingInfos from '@/components/restaurantDetails/yfRestaurantDetailsBookingInfos.vue'
import yfRestaurantDetailsBookingPayment from '@/components/restaurantDetails/yfRestaurantDetailsBookingPayment.vue'
import Payment from '@/assets/utils/Payment'

export default {
  name: 'yfRestaurantDetailsBooking',
  inject: ['notyf'],
  components: {
    yfRestaurantDetailsBookingInfos,
    yfRestaurantDetailsBookingPayment,
  },
  data() {
    return {
      isStepPayment: false,
      payment: Payment(),
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

        console.log(booking)

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
.card-material {
  width: 500px;
  overflow: hidden;
}

.card-material .card-material-content {
  margin: 0;
}

.card-material .card-material-content .card-material-header {
  align-items: flex-start;
  height: 30%;
}

.card-material .card-material-content .card-material-header .card-material-header-content {
  width: 100%;
  margin-top: 50px;
}

.card-material .card-material-content .card-material-header .card-material-header-content .tagline {
  margin-bottom: 20px;
}

.card-material
  .card-material-content
  .card-material-header
  .card-material-header-content
  .tagline
  h1 {
  color: var(--primary-color);
  text-transform: uppercase;
}

.card-material .card-material-content .card-material-header .card-material-header-content .step {
  margin: 10px 0;
}

.card-material
  .card-material-content
  .card-material-header
  .card-material-header-content
  .step
  .icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background: var(--text-color);
  color: #fff;
}

.card-material
  .card-material-content
  .card-material-header
  .card-material-header-content
  .step
  .icon
  i {
  font-size: 1.3em;
}

.card-material
  .card-material-content
  .card-material-header
  .card-material-header-content
  .step
  .infos {
  margin: 0 10px;
}

.card-material
  .card-material-content
  .card-material-header
  .card-material-header-content
  .step
  .infos
  h3 {
  font-size: 1.2em;
  margin-bottom: 5px;
}

.card-material .card-material-content .card-material-body {
  height: 70%;
  margin: 30px 0;
}

.card-material .card-material-content .active {
  background-color: var(--primary-color) !important;
}

@media screen and (max-width: 1280px) {
  .card-material {
    margin-top: 20px;
    width: 450px;
  }
}
</style>
