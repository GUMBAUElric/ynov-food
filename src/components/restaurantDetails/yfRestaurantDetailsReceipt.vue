<template>
  <div class="container">
    <div class="receipt">
      <h2 class="receipt-title">Merci !</h2>
      <p class="receipt-subtitle">Voici les détails de votre réservation :</p>
      <ul class="receipt-lines">
        <li class="receipt-line">
          <span class="receipt-line-item">Le {{ booking.reservation.day }}</span>
          <span class="receipt-line-price"><i class="far fa-calendar-alt"></i></span>
        </li>
        <li class="receipt-line">
          <span class="receipt-line-item">À {{ booking.reservation.time }}</span>
          <span class="receipt-line-price"><i class="far fa-clock"></i></span>
        </li>
        <li class="receipt-line">
          <span class="receipt-line-item">Pour {{ numberOfPersons }}</span>
          <span class="receipt-line-price"><i class="fal fa-users"></i></span>
        </li>
        <li class="receipt-line">
          <span class="receipt-line-item">Au nom {{ booking.name }}</span>
          <span class="receipt-line-price"><i class="fal fa-users"></i></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantDetailsReceipt',
  props: {
    booking: {
      type: Object,
      required: true,
    },
  },
  computed: {
    /**
     * @computed numberOfPersons
     * @desc Get the number of persons
     * @returns {string}
     */
    numberOfPersons() {
      return this.booking.nb_of_persons === '1'
        ? `${this.booking.nb_of_persons} personne`
        : `${this.booking.nb_of_persons} personnes`
    },
  },
}
</script>

<style scoped>
.receipt {
  position: relative;
  flex: none;
  padding: 30px 0;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

@import url('https://fonts.googleapis.com/css2?family=Parisienne&display=swap');

.receipt-title {
  margin-bottom: 15px;
  padding: 0 30px;
  font-family: 'Parisienne', cursive;
  font-size: 3em;
  color: #00b09b;
}

.receipt-subtitle {
  padding: 0 30px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 18px;
  margin-bottom: -20px;
}

.receipt-lines {
  margin-top: 50px;
  padding: 30px;
  border-top: 1px dashed #dce2d6;
  margin-bottom: -30px;
}

.receipt-line {
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
  font-size: 18px;
}

.receipt-line-item {
  font-weight: 300;
}
</style>
