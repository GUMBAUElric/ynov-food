<template>
  <div class="card-material step-content">
    <div class="card-material-content">
      <div class="d-flex flex-column justify-content-around align-items-center card-material-body">
        <div class="d-flex flex-column align-items-center card-material-body-content">
          <div class="top">
            <div class="d-flex flex-column align-items-center container-top">
              <div class="d-flex content-form">
                <div class="d-flex flex-column form">
                  <h3>Nom</h3>
                  <input type="text" v-model="booking.name" />
                </div>
                <div class="d-flex flex-column form">
                  <h3>E-mail</h3>
                  <input type="email" v-model="booking.email" />
                </div>
              </div>
              <div class="d-flex content-form">
                <div class="d-flex flex-column form">
                  <h3>Nombre de personne</h3>
                  <select v-model="booking.nb_of_persons">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>
                <div class="d-flex flex-column form">
                  <h3>Heure de réservation</h3>
                  <select v-model="booking.reservation.time">
                    <option>20:30</option>
                    <option>21:00</option>
                    <option>21:30</option>
                    <option>22:00</option>
                    <option>22:30</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="middle">
            <div class="d-flex align-items-center content-form">
              <div class="d-flex flex-column form">
                <h3>Jour de réservation</h3>
                <yfDatePicker @dateSelected="handleReservationDay" />
              </div>
              <div class="d-flex flex-column form">
                <h3>Message (falcutatif)</h3>
                <textarea cols="24" rows="6" v-model="booking.message"></textarea>
              </div>
            </div>
          </div>
          <div class="bottom">
            <button class="btn btn-secondary" @click="handleBooking">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/** Import */
import yfDatePicker from '@/components/yfDatePicker.vue'

export default {
  name: 'yfRestaurantDetailsBookingInfos',
  inject: ['notyf'],
  components: {
    yfDatePicker,
  },
  data() {
    return {
      booking: {
        name: '',
        email: '',
        nb_of_persons: '1',
        reservation: {
          day: '',
          time: '20:30',
        },
        message: '',
        is_checkout: false,
      },
    }
  },
  methods: {
    /**
     * @function handleReservationDay
     * @desc Set reservation day to booking
     */
    handleReservationDay(day) {
      this.booking.reservation.day = day
    },
    /**
     * @function checkBookingData
     * @desc Check data of booking
     */
    checkBookingData() {
      return new Promise((resolve, reject) => {
        const { name, email, reservation } = this.booking
        const REGEX_NUMBER = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        /* ------------------ NAME ----------------- */
        if (name === '') reject(new Error('Le nom est invalide'))

        /* ------------------ EMAIL ----------------- */
        if (!REGEX_NUMBER.test(email)) reject(new Error("L'email est invalide"))

        /* ------------------ RESERVATION DAY ----------------- */
        if (reservation.day === '') reject(new Error('Jour de réservation vide'))

        resolve()
      })
    },
    /**
     * @function checkBookingData
     * @desc handle data booking
     */
    async handleBooking() {
      try {
        // await this.checkBookingData()
        this.$emit('bookingData', this.booking)
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

.card-material.step-content {
  margin-top: 20px;
}

.card-material.step-content .card-material-content .card-material-body-content .form {
  margin: 20px 20px;
}

.card-material.step-content .card-material-content .card-material-body-content .form h3 {
  margin-bottom: 10px;
}

.card-material.step-content .card-material-content .card-material-body-content .form input {
  border-radius: 10px;
  height: 20px;
  width: 190px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  font-size: 1em;
}

.card-material.step-content .card-material-content .card-material-body-content .form select {
  height: 26px;
  width: 200px;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  cursor: pointer;
  text-align-last: center;
}

.card-material.step-content .card-material-content .card-material-body-content .bottom {
  margin-top: 25px;
}

@media screen and (max-width: 1280px) {
  .card-material {
    margin-top: 20px;
    width: 450px;
  }

  .card-material.step-content .card-material-content .card-material-body-content .content-form {
    flex-direction: column;
  }
}
</style>
