<template>
  <nav class="d-flex justify-content-center align-items-center navbar">
    <div class="container-navbar">
      <ul class="d-flex justify-content-around align-items-center">
        <li class="logo-app">
          <img src="../assets/img/icon/logo_yf.svg" alt="logo-yf" />
        </li>
        <li class="title-app"><h1>Ynov Food</h1></li>
        <li class="d-flex favorite">
          <i class="fas fa-heart"></i>
          <p class="nb_favorite">0</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'yfNavBar',
}
</script>

<style scoped>
.navbar {
  height: 70px;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.navbar .container-navbar {
  width: 80%;
}

.navbar .container-navbar .logo-app img {
  width: 50px;
}
.navbar .container-navbar .title-app {
  font-size: 1.4em;
}

.navbar .container-navbar .favorite .nb_favorite {
  margin-left: 10px;
}
</style>
