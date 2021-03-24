<template>
  <div class="card">
    <div class="card-content justify-content-evenly">
      <img :src="require(`../../assets/img/icon/booking.svg`)" alt="booking.svg" />
      <h3>Réserver en un clique !</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantsListTagLine',
}
</script>

<style scoped>
.card {
  width: 800px;
  margin-top: 50px;
  position: relative;
  transition: 300ms ease;
}

.card::before {
  content: '';
  position: absolute;
  background-color: var(--primary-color);
  width: 40px;
  height: 40px;
  bottom: 0;
  border-radius: 0 20px 0 0;
  transition: 500ms ease;
}

.card::after {
  content: '';
  position: absolute;
  background-color: var(--primary-color);
  width: 40px;
  height: 40px;
  top: 0;
  right: 0;
  border-radius: 0 0 0 20px;
}

.card .card-content {
  margin: 30px 0px;
}

.card .card-content img {
  width: 200px;
}

@media screen and (max-width: 900px) {
  .card {
    width: 100%;
  }
  .card .card-content {
    flex-direction: column;
  }

  .card .card-content img {
    width: 180px;
  }

  .card .card-content h3 {
    margin-top: 50px;
  }
}
</style>
