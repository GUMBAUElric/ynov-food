<template>
  <div class="card-material">
    <div class="card-material-content">
      <div class="card-material-header justify-content-around">
        <div class="d-flex align-items-center container-card-step">
          <div
            class="card card-step-booking justify-content-center"
            :class="isPaymentStep ? 'booking-step-inactive' : ''"
          >
            <i class="fas fa-calendar"></i>
          </div>
          <p>Réservation</p>
        </div>
        <div class="d-flex align-items-center container-card-step">
          <div
            class="card card-step-payment justify-content-center"
            :class="isPaymentStep ? 'payment-step-active' : ''"
          >
            <i class="fas fa-shopping-cart"></i>
          </div>
          <p>Payement</p>
        </div>
      </div>
      <div class="card-material-body flex-column">
        <div class="d-flex flex-column align-items-center justify-content-center booking-step">
          <div class="booking booking-name">
            <h3>Nom</h3>
            <input type="text" name="name" />
          </div>
          <div class="booking booking-email">
            <h3>e-mail</h3>
            <input type="text" name="name" />
          </div>
          <div class="booking booking-day">
            <h3>Jour</h3>
            <input type="text" name="name" />
          </div>
          <div class="d-flex flex-column booking booking-number-of-person">
            <label for="pet-select">Nombre de personnes:</label>
            <select name="pets" id="pet-select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </div>
          <div class="booking booking-hour">
            <label for="pet-select">Heures : </label>
            <select name="pets" id="pet-select">
              <option value="1">20:30</option>
              <option value="2">21:00</option>
              <option value="3">21:30</option>
              <option value="4">22:00</option>
              <option value="5">22:30</option>
            </select>
          </div>
          <div class="booking booking-extra-infos">
            <h3>Message :</h3>
            <textarea name="extra-infos" cols="30" rows="7"></textarea>
          </div>
        </div>
        <div class="bottom justify-content-center">
          <div class="container-bottom">
            <button class="btn btn-secondary" @click="goToPaymentStep">Suivant</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantDetailsCardStep',
  data() {
    return {
      isPaymentStep: false,
    }
  },
  methods: {
    goToPaymentStep() {
      this.isPaymentStep = true
    },
  },
}
</script>

<style scoped>
.card-material {
  width: 400px;
  height: 650px;
  padding: 10px 5px;
}

.card-material .card-material-content .card-material-header .container-card-step .card {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.card-material
  .card-material-content
  .card-material-header
  .container-card-step
  .card.card-step-booking {
  background-color: var(--primary-color);
  color: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.card-material
  .card-material-content
  .card-material-header
  .container-card-step
  .card.card-step-payment {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

.card-material .card-material-content .card-material-body h3,
.card-material .card-material-content .card-material-body label {
  margin-bottom: 10px;
}

.card-material .card-material-content .card-material-body input {
  width: 220px;
  height: 25px;
  border-radius: 20px;
  font-size: 0.9em;
  border: 01px solid var(--text-color);
}

.card-material .card-material-content .card-material-body .booking-step {
  width: 100%;
  height: 100%;
  margin: 15px 0;
}

.card-material .card-material-content .card-material-body .booking-step .booking {
  margin: 10px 0;
}

.card-material .card-material-content .card-material-body .bottom {
  width: 100%;
  height: 100%;
  margin: 5px 0;
}

.booking-step-inactive {
  background-color: var(--text-color) !important;
}

.payment-step-active {
  background-color: var(--primary-color);
  color: #fff;
}
</style>
