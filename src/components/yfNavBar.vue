<template>
  <div class="container">
    <div class="logo_app">
      <img src="../assets/img/icon/logo_yf.svg" alt="logo_yf" />
    </div>
    <div class="title-app">
      <h1>Ynov Food</h1>
    </div>

    <div class="favorite">
      <i class="fas fa-star"></i>
      <p class="nb_favorite">0</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfNavBar',
}
</script>

<style scoped>
.container {
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: #303241;
}

.container .logo_app img {
  width: 50px;
}
.container .title-app {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
}

.container .favorite {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.container .favorite .nb_favorite {
  margin-left: 10px;
}
</style>
