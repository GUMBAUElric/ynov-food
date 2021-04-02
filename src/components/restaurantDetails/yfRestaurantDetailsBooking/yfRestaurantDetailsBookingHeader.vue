<template>
  <div class="card-material step-header">
    <div class="card-material-content">
      <div class="card-material-body">
        <div class="d-flex flex-column card-material-body-content">
          <div class="d-flex justify-content-center tagline">
            <h1>Réserver dès maintenant !</h1>
          </div>
          <div class="d-flex justify-content-around step">
            <div class="d-flex align-items-center step-booking">
              <div class="icon" :class="!isStepPayment ? 'active' : ''">
                <i class="icon-cal far fa-calendar-alt"></i>
              </div>
              <div class="infos">
                <h3>Étape 1</h3>
                <p>Réservation</p>
              </div>
            </div>
            <div class="d-flex align-items-center step step-payment">
              <div class="icon" :class="isStepPayment ? 'active' : ''">
                <i class="icon-shopping far fa-shopping-cart"></i>
              </div>
              <div class="infos">
                <h3>Étape 2</h3>
                <p>Paiement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantDetailsBookingHeader',
  props: {
    isStepPayment: {
      type: Boolean,
      default: false,
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

.card-material.step-header .card-material-content .card-material-body {
  align-items: flex-start;
}

.card-material.step-header .card-material-content .card-material-body .card-material-body-content {
  width: 100%;
  margin-top: 5px;
}

.card-material.step-header
  .card-material-content
  .card-material-body
  .card-material-body-content
  .tagline {
  margin-bottom: 20px;
}

.card-material.step-header
  .card-material-content
  .card-material-body
  .card-material-body-content
  .tagline
  h1 {
  color: var(--primary-color);
  text-transform: uppercase;
}

.card-material.step-header
  .card-material-content
  .card-material-body
  .card-material-body-content
  .step {
  margin: 10px 0;
}

.card-material.step-header
  .card-material-content
  .card-material-body
  .card-material-body-content
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

.card-material.step-header
  .card-material-content
  .card-material-body
  .card-material-body-content
  .step
  .icon
  i {
  font-size: 1.3em;
}

.card-material.step-header
  .card-material-content
  .card-material-body
  .card-material-body-content
  .step
  .icon
  .icon-cal {
  font-size: 1.3em;
  margin-left: 2px;
}

.card-material.step-header
  .card-material-content
  .card-material-body
  .card-material-body-content
  .step
  .icon
  .icon-shopping {
  margin-right: 1px;
}

.card-material.step-header
  .card-material-content
  .card-material-body
  .card-material-body-content
  .step
  .infos {
  margin: 0 10px;
}

.card-material.step-header
  .card-material-content
  .card-material-body
  .card-material-body-content
  .step
  .infos
  h3 {
  font-size: 1.2em;
  margin-bottom: 5px;
}

.card-material.step-header .card-material-content .card-material-body {
  height: 70%;
  margin: 30px 0;
}

.card-material.step-header .card-material-content .active {
  background-color: var(--primary-color) !important;
}

@media screen and (max-width: 1280px) {
  .card-material {
    margin-top: 20px;
    width: 450px;
  }
}
</style>
