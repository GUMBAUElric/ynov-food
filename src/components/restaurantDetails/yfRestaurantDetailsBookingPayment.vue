<template>
  <div class="ticket">
    <div class="ticket-header">
      <div class="ticket-logo-wrapper">
        <img :src="require('../../assets/img/icon/logo-yf.svg')" alt="ticket" class="ticket-logo" />
      </div>

      <div class="ticket-header-info">
        <span class="ticket-date">{{ date.day }}</span>
        <span class="ticket-ref">{{ date.hour }}</span>
      </div>
      <img
        class="img-mask"
        src="https://lh3.googleusercontent.com/proxy/n4vVGiQy9MnA6KeEaWchFClgOQShI9oGOIKZIo0BJ5w7deVeIQbNxKkCp6qSGjyIco-9R8m7xE2gJCbkCC3lIL83TLQ-mGJ9Hho0osF87v_8Q-aLvIE5TJNWsQAQO8ufnyRr5GScoc3F3t0l0Dnlh-TTKnT45LJnnZh4wdWarEl0keGwFKeBd5Sdm4csaYUtKvySZ-UHK-mDN3l7"
        alt=""
      />
    </div>

    <div class="ticket-subheader-wrapper">
      <div class="ticket-subheader">
        <h1 class="ticket-username">Mozzato</h1>
        <span class="ticket-help-text">Nom de la réservation : GUMBAU</span>
      </div>
    </div>

    <div class="ticket-cart">
      <h2 class="ticket-cart-title">Votre réservation :</h2>

      <ul class="ticket-cart-list">
        <li class="ticket-cart-item">
          <span class="ticket-index">Le</span>
          <span class="ticket-item-name">10/04/2021</span>
          <span class="ticket-item-price">0 €</span>
        </li>

        <li class="ticket-cart-item">
          <span class="ticket-index">À</span>
          <span class="ticket-item-name">21:00</span>
          <span class="ticket-item-price">0 €</span>
        </li>

        <li class="ticket-cart-item">
          <span class="ticket-index">Pour</span>
          <span class="ticket-item-name">4 personnes</span>
          <span class="ticket-item-price">0 €</span>
        </li>

        <li class="ticket-cart-item">
          <span class="ticket-cart-total">Total</span>
          <div class="d-flex flex-column align-items-flex-end total-price">
            <span class="ticket-item-price old-price">268.00 €</span>
            <span class="ticket-item-price new-price"><sup>*</sup>0 €</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="d-flex justify-content-center ticket-footer">
      <button class="btn btn-secondary">Procéder au paiement</button>
    </div>
  </div>
</template>

<script>
/** Import */
import moment from 'moment'

moment.locale()
export default {
  name: 'yfRestaurantDetailsBookingPayment',
  data() {
    return {
      date: {
        day: moment().format('L'),
        hour: moment().format('HH:mm:ss'),
      },
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
  mounted() {},
}
</script>

<style scoped>
.inspired-by {
  display: block;
  position: relative;
  margin-bottom: 15px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}

.img-mask {
  width: 80px;
  margin-top: -15px;
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

.box-shadow {
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
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
  border-left: 5px solid #029de0;
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

.ticket-barcode {
  display: block;
  margin: 0 auto;
  max-width: 300px;
  height: auto;
}

/**
 * ticket Animations
 */

@keyframes strike-out {
  0% {
    width: 0px;
  }

  100% {
    width: 60px;
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

@keyframes show-box-shadow {
  100% {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }
}

.ticket {
  transform-origin: top left;
  animation: show-ticket 1s ease-out forwards;
  animation: show-box-shadow 1s ease-out forwards;
  animation-delay: 3s;
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
</style>
