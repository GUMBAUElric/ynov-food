<template>
  <div class="d-flex flex-column align-items-center restaurant-infos">
    <div class="d-flex flex-wrap align-items-center restaurant-title">
      <h1>{{ restaurant_details.name }}</h1>
      <i v-if="isFavorite" class="fas fa-heart"></i>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center container">
      <div class="title">
        <h1>Informations du restaurant</h1>
      </div>
      <div class="d-flex justify-content-around align-items-center restaurant-infos-items">
        <div class="d-inline-flex restaurant-infos-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>{{ fetchLocation }}</p>
        </div>
        <div class="d-inline-flex restaurant-infos-item">
          <i class="fas fa-phone"></i>
          <p>{{ restaurant_details.display_phone }}</p>
        </div>
        <div class="d-inline-flex restaurant-infos-item">
          <i class="far fa-list-alt"></i>
          <p>{{ fetchCategories }}</p>
        </div>
        <div class="d-inline-flex restaurant-infos-item">
          <i class="fas fa-star"></i>
          <p>{{ restaurant_details.rating }}</p>
        </div>
        <div class="d-inline-flex restaurant-infos-item">
          <i class="fas fa-eye"></i>
          <p>{{ restaurant_details.review_count }} vues</p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-evenly gallery">
      <img v-for="(item, idx) in restaurant_details.photos" :key="idx" :src="item" alt="image" />
    </div>
  </div>
</template>

<script>
/** Import */
import { mapState } from 'vuex'

export default {
  name: 'yfRestaurantDetailsInfos',
  computed: {
    ...mapState(['restaurant_details', 'favorites']),
    /**
     * @computed fetchCategories
     * @desc Join categories by ', '
     * @returns {string}
     */
    fetchCategories() {
      return this.restaurant_details.categories.map(item => item.title).join(', ')
    },
    /**
     * @computed fetchLocation
     * @desc Join location by ', '
     * @returns {string}
     */
    fetchLocation() {
      return this.restaurant_details.location.display_address.map(item => item).join(', ')
    },
    /**
     * @computed isFavorite
     * @desc Return if restaurant is favorite
     * @returns {boolean}
     */
    isFavorite() {
      return this.favorites.find(item => item['.key'] === this.restaurant_details.id) !== undefined
    },
  },
}
</script>

<style scoped>
.restaurant-infos {
  width: 100%;
}

.restaurant-infos .restaurant-title h1 {
  font-size: 3.3em;
  font-weight: 300;
}

.restaurant-infos .restaurant-title i {
  margin-left: 10px;
}

.restaurant-infos .container {
  width: 100%;
}

.restaurant-infos .container .title {
  margin: 80px 0;
  width: 100%;
}

.restaurant-infos .container .restaurant-infos-items {
  width: 90%;
}

.restaurant-infos .container .restaurant-infos-items i {
  margin-right: 5px;
}

.restaurant-infos .gallery {
  width: 90%;
  margin-top: 70px;
}

.restaurant-infos .gallery img {
  width: 160px;
  height: 160px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

@media screen and (max-width: 800px) {
  .restaurant-infos .gallery {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
  .restaurant-infos .gallery img {
    margin: 15px 0;
  }
}

@media screen and (max-width: 1100px) {
  .restaurant-infos .container .restaurant-infos-items {
    flex-direction: column;
  }

  .restaurant-infos .container .restaurant-infos-item {
    margin: 15px 0;
  }
}
</style>
