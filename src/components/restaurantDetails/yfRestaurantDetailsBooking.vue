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
      </div>
      <div class="d-flex flex-column justify-content-around align-items-center card-material-body">
        <div class="top">
          <div class="d-flex flex-column align-items-center container-top">
            <div class="d-flex content-form">
              <div class="d-flex flex-column form">
                <h3>Nom</h3>
                <input type="text" />
              </div>
              <div class="d-flex flex-column form">
                <h3>E-mail</h3>
                <input type="email" />
              </div>
            </div>
            <div class="d-flex content-form">
              <div class="d-flex flex-column form">
                <h3>Nombre de personne</h3>
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </div>
              <div class="d-flex flex-column form">
                <h3>Horaire</h3>
                <select>
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
              <h3>Date</h3>
              <yfDatePicker />
            </div>
            <div class="d-flex flex-column form">
              <h3>Message (falcutatif)</h3>
              <textarea cols="24" rows="6"></textarea>
            </div>
          </div>
        </div>
        <div class="bottom">
          <button class="btn btn-secondary">Suivant</button>
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

.card-material .card-material-content .card-material-body .form {
  margin: 20px 20px;
}

.card-material .card-material-content .card-material-body .form h3 {
  margin-bottom: 10px;
}

.card-material .card-material-content .card-material-body .form input {
  border-radius: 10px;
  height: 20px;
  width: 190px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  font-size: 1em;
}

.card-material .card-material-content .card-material-body .form select {
  height: 26px;
  width: 190px;
  border-radius: 10px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  cursor: pointer;
  text-align-last: center;
}

.card-material .card-material-content .card-material-body .bottom {
  margin-top: 25px;
}

.active {
  background-color: var(--primary-color) !important;
}

@media screen and (max-width: 1280px) {
  .card-material {
    margin-top: 20px;
    width: 450px;
  }

  .card-material .card-material-content .card-material-body .content-form {
    flex-direction: column;
  }
}
</style>
