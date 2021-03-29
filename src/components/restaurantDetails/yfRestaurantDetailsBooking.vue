<template>
  <div class="card-material">
    <div class="card-material-content">
      <div class="card-material-header">
        <div class="d-flex justify-content-around card-material-header-content">
          <div class="d-flex align-items-center step step-booking">
            <h1>Reserver dès maintenant !</h1>
            <div class="icon active">
              <i class="far fa-calendar-alt"></i>
            </div>
            <div class="infos">
              <h3>Étape 1</h3>
              <p>Réservation</p>
            </div>
          </div>
          <div class="d-flex align-items-center step step-payment">
            <div class="icon">
              <i class="far fa-shopping-cart"></i>
            </div>
            <div class="infos">
              <h3>Étape 2</h3>
              <p>Paiement</p>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-around align-items-center card-material-body">
        <div class="left">
          <div class="d-flex flex-column align-items-center container-left">
            <input type="text" class="form" placeholder="Nom" />
            <input type="email" class="form" placeholder="E-mail" />
            <yfDatePicker />
          </div>
        </div>
        <div class="right">
          <div class="d-flex flex-column align-items-center container-right">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            <select>
              <option>20:30</option>
              <option>21:00</option>
              <option>21:30</option>
              <option>22:00</option>
              <option>22:30</option>
            </select>
            <textarea cols="10" rows="5"></textarea>
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
  name: 'yfRestaurantDetailsBooking',
  components: {
    yfDatePicker,
  },
}
</script>

<style scoped>
.card-material {
  width: 500px;
}

.card-material .card-material-content .card-material-header {
  align-items: flex-start;
  height: 30%;
}

.card-material .card-material-content .card-material-header .card-material-header-content {
  width: 100%;
  margin-top: 50px;
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
}

.card-material .card-material-content .card-material-body input {
  border-radius: 10px;
  margin: 33px 0;
  height: 20px;
  width: 190px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  font-size: 1em;
}

.card-material .card-material-content .card-material-body select {
  margin: 30px 0;
  height: 26px;
  width: 190px;
  font-size: 1em;
}

.active {
  background-color: var(--primary-color) !important;
}
</style>
