<template>
  <div class="navbar">
    <div class="container__navbar">
      <div class="logo__app">
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
  </div>
</template>

<script>
export default {
  name: 'yfNavBar',
}
</script>

<style scoped>
.navbar {
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #fefefe;
}

.navbar .container__navbar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

.navbar .container__navbar .logo__app img {
  width: 50px;
}
.navbar .container__navbar .title-app {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4em;
}

.navbar .container__navbar .favorite {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.navbar .container__navbar .favorite .nb_favorite {
  margin-left: 10px;
}
</style>
