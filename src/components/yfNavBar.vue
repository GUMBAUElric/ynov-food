<template>
  <nav class="navbar">
    <div class="container-navbar">
      <ul class="d-flex justify-content-around align-items-center">
        <li class="logo-app" @click="push('RestaurantsList')">
          <img :src="require(`../assets/img/icon/logo-yf.svg`)" alt="logo-yf" />
        </li>
        <li class="title-app"><h1>Ynov Food</h1></li>
        <li class="d-flex calendar" @click="push('Calendar')">
          <i class="far fa-calendar-alt"></i>
          <p>Mes réservations</p>
        </li>
        <li class="d-flex favorite">
          <i class="fas fa-heart"></i>
          <p class="nb_favorite">{{ numberOfFavorites }}</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
/** Import */
import { mapState } from 'vuex'

export default {
  name: 'yfNavBar',
  computed: {
    ...mapState(['favorites']),
    /**
     * @function numberOfFavorites
     * @desc Get the number of favorites
     */
    numberOfFavorites() {
      return this.favorites.length
    },
  },
  methods: {
    /**
     * @function push
     * @desc Go to the specific View
     * @param {string} name The name of the View
     */
    push(name) {
      this.$router.push({ name }).catch(() => {})
    },
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px;
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.navbar .container-navbar {
  width: 80%;
}

.navbar .container-navbar .logo-app img {
  width: 50px;
  cursor: pointer;
}
.navbar .container-navbar .title-app {
  font-size: 1.4em;
}

.navbar .container-navbar .calendar p,
.navbar .container-navbar .favorite .nb_favorite {
  margin-left: 10px;
}

.navbar .container-navbar .calendar {
  cursor: pointer;
}
</style>
