<template>
  <div class="ticket" :class="layout.showBoxShadow ? 'box-shadow' : ''">
    <div class="ticket-header">
      <div class="ticket-logo-wrapper">
        <img
          :src="require('../../../assets/img/icon/logo-yf.svg')"
          alt="ticket"
          class="ticket-logo"
        />
      </div>

      <div class="ticket-header-info">
        <span class="ticket-date">{{ date.day }}</span>
        <span class="ticket-ref">{{ date.hour }}</span>
      </div>
      <img
        class="img-mask"
        :src="require('../../../assets/img/mask-covid.jpeg')"
        alt="masque-obg-covid"
      />
    </div>
    <div class="ticket-subheader-wrapper">
      <div class="ticket-subheader">
        <h1 class="ticket-username">{{ restaurant_details.name }}</h1>
        <span class="ticket-help-text">Nom de la réservation : {{ booking.name }}</span
        ><br />
        <span class="ticket-help-text">E-mail : {{ booking.email }}</span>
      </div>
    </div>
    <div class="ticket-cart">
      <h2 class="ticket-cart-title">Votre réservation :</h2>
      <ul class="ticket-cart-list">
        <li class="ticket-cart-item">
          <span class="ticket-index">Le</span>
          <span class="ticket-item-name">{{ booking.reservation.day }}</span>
          <span class="ticket-item-price">2 €</span>
        </li>
        <li class="ticket-cart-item">
          <span class="ticket-index">À</span>
          <span class="ticket-item-name">{{ booking.reservation.time.value }}</span>
          <span class="ticket-item-price">{{ booking.reservation.time.price }} €</span>
        </li>
        <li class="ticket-cart-item">
          <span class="ticket-index">Pour</span>
          <span class="ticket-item-name">{{ numberOfPersons }}</span>
          <span class="ticket-item-price">{{ booking.nb_of_persons.price }} €</span>
        </li>
        <li v-if="booking.message" class="ticket-cart-item">
          <span class="ticket-index">Message :</span>
          <p class="ticket-item-name">{{ booking.message }}</p>
        </li>
        <li class="ticket-cart-item">
          <span class="ticket-cart-total">Total</span>
          <div class="d-flex flex-column align-items-flex-end total-price">
            <span class="ticket-item-price old-price">{{ totalAmount }}.00 €</span>
            <span class="ticket-item-price new-price"><sup>*</sup>0 €</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="d-flex justify-content-center ticket-footer">
      <button class="btn btn-secondary" @click="handlePayment" v-if="!layout.loading">
        <span>{{ layout.paymentError ? 'Recommencer' : 'Réserver' }}</span>
        <i :class="layout.paymentError ? 'far fa-undo-alt' : 'fad fa-credit-card-front'"></i>
      </button>
      <div class="loader animate__animated animate__fadeIn" v-if="layout.loading">
        <svg viewBox="0 0 80 80">
          <circle id="test" cx="40" cy="40" r="32"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
/** Import */
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
import Payment from '@/assets/utils/Payment'

moment.locale()

export default {
  name: 'yfRestaurantDetailsBookingPayment',
  inject: ['notyf'],
  data() {
    return {
      date: {
        day: moment().format('L'),
        hour: moment().format('HH:mm:ss'),
      },
      layout: {
        showBoxShadow: false,
        loading: false,
        paymentError: false,
      },
      payment: Payment(),
    }
  },
  props: {
    booking: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    ...mapState(['restaurant_details']),
    /**
     * @computed numberOfPersons
     * @desc Get the number of persons
     * @returns {string}
     */
    numberOfPersons() {
      const { value } = this.booking.nb_of_persons
      return value === '1' ? `${value} personne` : `${value} personnes`
    },
    /**
     * @computed totalAmount
     * @desc Get the total amount of the price
     * @returns {string}
     */
    totalAmount() {
      const priceReservationTime = parseInt(this.booking.reservation.time.price, 10)
      const priceNbOfPersons = parseInt(this.booking.nb_of_persons.price, 10)

      return 2 + priceNbOfPersons + priceReservationTime
    },
    /**
     * @computed bookingPaymentDetails
     * @desc Get the booking details for payment
     * @returns {object}
     */
    bookingPaymentDetails() {
      return {
        displayItems: [
          {
            label: `Réservation chez ${this.restaurant_details.name}`,
            amount: { currency: 'EUR', value: this.totalAmount },
          },
          {
            label: 'Réduction COVID-19',
            amount: { currency: 'EUR', value: `-${this.totalAmount}` },
          },
        ],
        total: {
          label: 'Total',
          amount: { currency: 'EUR', value: '0.00' },
        },
      }
    },
    /**
     * @computed bookingFireBaseDetails
     * @desc Get the booking details for firebase
     * @returns {object}
     */
    bookingFireBaseDetails() {
      const { email, is_checkout, message, name, nb_of_persons, reservation } = this.booking
      return {
        email,
        is_checkout: !is_checkout,
        message,
        name,
        nb_of_persons: nb_of_persons.value,
        reservation: {
          time: reservation.time.value,
          day: reservation.day,
        },
      }
    },
  },
  methods: {
    ...mapActions(['addToBookings']),
    /**
     * @function handlePayment
     * @desc Do the payment
     */
    async handlePayment() {
      try {
        this.layout.loading = true
        this.layout.paymentError = false

        await this.payment.doPayment(this.bookingPaymentDetails)

        setTimeout(() => {
          this.addToBookings({
            idRestaurant: this.restaurant_details.id,
            booking: this.bookingFireBaseDetails,
          })
        }, 1000)
      } catch (error) {
        console.error(error.message)
        this.notyf.error('Paiement échoué')
        this.layout.loading = false
        this.layout.paymentError = true
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.layout.showBoxShadow = true
    }, 4000)
  },
}
</script>

<style scoped>
/** TICKET */

.img-mask {
  width: 80px;
  margin-top: -15px;
}

.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 300ms ease;
}

.ticket {
  position: relative;
  left: 50%;
  display: inline-block;
  max-width: 100%;
  width: 400px;
  margin: 20px auto 0;
  clear: both;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  -o-transform: translateX(-50%);
  transform: translateX(-50%);
}

.ticket-header {
  display: flex;
  -ms-align-items: flex-start;
  align-items: flex-start;
  padding: 30px 30px 45px;
  background: #fff;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.ticket-logo-wrapper {
  flex: 1 0 40%;
}

.ticket-logo {
  display: block;
  width: 50px;
  height: auto;
  margin-left: 15px;
}

.ticket-header-info {
  flex: 1 0 40%;
}

.ticket-date,
.ticket-ref {
  display: block;
  font-size: 19px;
  color: #aaa;
  font-weight: 300;
}

.ticket-date {
  margin-bottom: 5px;
}

.ticket-subheader-wrapper {
  background: #fff;
  padding-bottom: 20px;
}

.ticket-subheader {
  padding: 0 45px 0 40px;
  border-left: 5px solid var(--primary-color);
}

.ticket-username {
  margin: 0 0 10px 0;
  font-size: 22px;
  font-weight: 600;
}

.ticket-help-text {
  color: #aaa;
  font-weight: 300;
}

.ticket-cart {
  display: block;
  padding: 25px 30px 45px;
}

.ticket-cart-title {
  display: block;
  margin-top: 0;
  margin-bottom: 25px;
  text-align: center;
}

.ticket-cart-list {
  margin: 0;
  padding: 0 15px;
  list-style: none;
}

.ticket-cart-item {
  display: block;
  padding-top: 20px;
  margin-bottom: 20px;
  border-top: 2px dashed #aaa;

  font-size: 18px;
}

.ticket-cart-item:first-child {
  border-top: 0;
}

.ticket-cart-item:last-child {
  margin-bottom: 0;
  border-top: 2px solid #ffe155;
}

.ticket-index {
  padding-right: 15px;
  color: #aaa;
  font-weight: 300;
}

.ticket-item-name {
  color: #aaa;
  font-weight: 300;
}

.ticket-item-price {
  float: right;
  letter-spacing: 1px;
  position: relative;
}

.old-price::after {
  content: '';
  position: absolute;
  height: 3px;
  top: 7px;
  left: 0;
  animation: strike-out 500ms ease-out forwards;
  animation-delay: 5s;
  background-color: var(--primary-color);
}

.new-price {
  opacity: 0;
  animation: fade 500ms ease-out forwards;
  animation-delay: 5s;
}

.ticket-cart-total {
  font-size: 20px;
  text-transform: uppercase;
}

.total-price {
  width: 100%;
  margin-top: -20px;
}

.ticket-footer {
  position: relative;
  padding: 30px 20px;
  border-top: 2px dashed #ff84a1;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.ticket-footer .btn {
  width: 130px;
}

.ticket-footer .btn i {
  transform: scale(0);
  margin-left: -23px;
  transition: 300ms ease;
  margin-top: 1px;
}

.ticket-footer .btn:hover {
  width: 150px;
}

.ticket-footer .btn:hover i {
  transform: scale(1);
  margin-left: 3px;
}

.ticket-footer::before,
.ticket-footer::after {
  content: '';
  position: absolute;
  top: 0;
  border: 4px solid transparent;

  -webkit-transform: translateY(calc(-50% - 1px));
  -ms-transform: translateY(calc(-50% - 1px));
  -o-transform: translateY(calc(-50% - 1px));
  transform: translateY(calc(-50% - 1px));
}

.ticket-footer::before {
  left: 0;
  border-left: 7px solid #ff85a1;
}

.ticket-footer::after {
  right: 0;
  border-right: 7px solid #ff85a1;
}

/**
 * ticket Animations
 */

@keyframes strike-out {
  0% {
    width: 0px;
  }

  100% {
    width: 66%;
  }
}

@keyframes fade {
  100% {
    opacity: 1;
  }
}

@keyframes show-ticket {
  0% {
    opacity: 0;
    transform: scale(0) translateX(-50%);
  }

  85% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: scale(1) translateX(-50%);
  }
}

.ticket {
  transform-origin: top left;
  animation: show-ticket 1s ease-out forwards;
}

@keyframes show-subheader {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  65% {
    opacity: 0;
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.ticket-subheader {
  opacity: 0;
  animation: show-subheader 1s 0.5s ease-out forwards;
}

@keyframes slide-down {
  to {
    transform: perspective(100px) rotateX(0) translate3d(0, 0, 0);
  }
}

.ticket-cart {
  background-color: #fff;

  transform-style: preserve-3d;
  transform-origin: top center;
  transform: perspective(100px) rotateX(-90deg) translate3d(0, 0, 0);

  animation: slide-down 0.4s 2s ease-out forwards;
}

.ticket-footer {
  background-color: #fff;

  transform-style: preserve-3d;
  transform-origin: top center;
  transform: perspective(100px) rotateX(-90deg) translate3d(0, 0, 0);

  animation: slide-down 0.4s 2.5s ease-out forwards;
}

@keyframes show-cart-title {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ticket-cart-title {
  opacity: 0;
  transform: translateY(10px);

  animation: show-cart-title 0.5s 2.25s ease-in forwards;
}

@keyframes show-cart-item {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.ticket-cart-item {
  opacity: 0;
  transform: translateX(-30px);

  animation: show-cart-item 0.3s 2.75s ease-in forwards;
}

.ticket-cart-item:nth-child(2) {
  animation-delay: 2.9s;
}

.ticket-cart-item:nth-child(3) {
  animation-delay: 3.05s;
}

.ticket-cart-item:nth-child(4) {
  animation-delay: 3.2s;
}

/** LOADER */

.loader {
  --path: var(--primary-color);
  --dot: var(--primary-color);
  --duration: 3s;
  width: 44px;
  height: 44px;
  position: relative;
}
.loader:before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
  display: block;
  background: var(--dot);
  top: 37px;
  left: 19px;
  transform: translate(-18px, -18px);
  animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}
.loader svg {
  display: block;
  width: 100%;
  height: 100%;
}
.loader svg rect,
.loader svg polygon,
.loader svg circle {
  fill: none;
  stroke: var(--path);
  stroke-width: 10px;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.loader svg polygon {
  stroke-dasharray: 145 76 145 76;
  stroke-dashoffset: 0;
  animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}
.loader svg rect {
  stroke-dasharray: 192 64 192 64;
  stroke-dashoffset: 0;
  animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}
.loader svg circle {
  stroke-dasharray: 150 50 150 50;
  stroke-dashoffset: 75;
  animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}
.loader.triangle {
  width: 48px;
}
.loader.triangle:before {
  left: 21px;
  transform: translate(-10px, -18px);
  animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
}
@keyframes pathTriangle {
  33% {
    stroke-dashoffset: 74;
  }
  66% {
    stroke-dashoffset: 147;
  }
  100% {
    stroke-dashoffset: 221;
  }
}
@keyframes dotTriangle {
  33% {
    transform: translate(0, 0);
  }
  66% {
    transform: translate(10px, -18px);
  }
  100% {
    transform: translate(-10px, -18px);
  }
}
@keyframes pathRect {
  25% {
    stroke-dashoffset: 64;
  }
  50% {
    stroke-dashoffset: 128;
  }
  75% {
    stroke-dashoffset: 192;
  }
  100% {
    stroke-dashoffset: 256;
  }
}
@keyframes dotRect {
  25% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(18px, -18px);
  }
  75% {
    transform: translate(0, -36px);
  }
  100% {
    transform: translate(-18px, -18px);
  }
}
@keyframes pathCircle {
  25% {
    stroke-dashoffset: 125;
  }
  50% {
    stroke-dashoffset: 175;
  }
  75% {
    stroke-dashoffset: 225;
  }
  100% {
    stroke-dashoffset: 275;
  }
}
.loader {
  display: inline-block;
  margin: 0 16px;
}
</style>
