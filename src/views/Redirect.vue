<template>
  <div class="d-flex flex-column justify-content-center align-items-center container">
    <img
      src="https://www.flaticon.com/svg/vstatic/svg/2094/2094661.svg?token=exp=1617658172~hmac=f46ecf505352026109d1b40b852735cb"
      alt=""
    />
    <p class="infos">Votre réservation a bien été effectuée !</p>
    <p>Vous serez redirigé dans {{ time }} secondes.</p>
  </div>
</template>

<script>
export default {
  name: 'Redirect',
  data() {
    return {
      time: 8,
      timer: setInterval(() => {
        this.time -= 1
        if (this.time === 0) {
          clearInterval(this.timer)
          this.$router.push({ name: 'RestaurantsList' })
        }
      }, 1000),
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 90vh;
}
.container img {
  width: 60px;
  animation: rotate 3s ease infinite alternate-reverse;
}

.container .infos {
  margin: 30px 0;
}

/** ANIMATION */

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
