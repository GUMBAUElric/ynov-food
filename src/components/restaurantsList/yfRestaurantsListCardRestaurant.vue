<template>
  <div class="card-material">
    <div class="card-material-content flex-column">
      <div class="top">
        <img :src="restaurant.image_url" alt="restaurant-image" />
        <div class="favorite">
          <i class="fas fa-heart"></i>
        </div>
      </div>
      <div class="bottom">
        <div class="d-flex flex-column justify-content-center restaurant-infos">
          <div class="container">
            <div class="name">
              <h3>{{ restaurant.name }}</h3>
            </div>
            <div class="d-flex justify-content-evenly rating-city">
              <div class="d-inline-flex rating">
                <i class="fas fa-star"></i>
                <p>{{ restaurant.rating }}</p>
              </div>
              <div class="d-inline-flex city">
                <i class="fas fa-map-marker-alt"></i>
                <p>{{ restaurant.location.city }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex align-items-center restaurant-categories">
          <div class="container">
            <p>{{ fetchCategories }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantsListCardRestaurant',
  data() {
    return {
      rating: 0,
      half_rating: 0,
    }
  },
  props: {
    restaurant: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
  computed: {
    /**
     * @computed fetchCategories
     * @desc Join categories by ', '
     * @returns {object[]}
     */
    fetchCategories() {
      return this.restaurant.categories.map(item => item.title).join(', ')
    },
  },
  methods: {
    /**
     * @function fetchRating
     * @desc This method fetch rating to display in the stars icons
     * @returns {void}
     */
    fetchRating() {
      const [rating, halfRating] = this.restaurant.rating.toString().split('.')
      this.rating = parseInt(rating, 10)
      this.half_rating = halfRating === undefined ? 0 : parseInt(halfRating, 10)
    },
    /**
     * @function checkIfIsHalfNumber
     * @desc This method check if rating is half number
     * @returns {boolean}
     */
    checkIfIsHalfNumber(idx) {
      return this.half_rating !== 0 && idx === 0
    },
  },
}
</script>

<style scoped>
.card-material {
  margin: 20px;
  border-radius: 5px;
}

.card-material .card-material-content {
  margin: 0;
  width: 270px;
  height: 360px;
  position: relative;
}

.card-material .card-material-content .top {
  width: 100%;
  height: 50%;
}

.card-material .card-material-content .top img {
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
}

.card-material .card-material-content .top .favorite {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--text-color);
}
.card-material .card-material-content .top .favorite i {
  color: var(--background-color);
  transform: translateY(5%);
}

.card-material .card-material-content .bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 50%;
}

.card-material .card-material-content .bottom .restaurant-infos {
  width: 100%;
  height: 60%;
}

.card-material .card-material-content .bottom .restaurant-infos .container {
  margin: 0 20px;
}

.card-material .card-material-content .bottom .restaurant-infos .container .name h3 {
  text-align: center;
}

.card-material .card-material-content .bottom .restaurant-infos .container .rating-city {
  margin-top: 30px;
}

.card-material .card-material-content .bottom .restaurant-infos .container .rating-city i {
  margin-right: 5px;
}

.card-material .card-material-content .bottom .restaurant-categories {
  width: 100%;
  height: 40%;
  position: relative;
}

.card-material .card-material-content .bottom .restaurant-categories::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  top: 5px;
  background-color: #c4cbd9;
}

.card-material .card-material-content .bottom .restaurant-categories .container {
  width: 100%;
  margin: 0 10px;
}

.card-material .card-material-content .bottom .restaurant-categories .container p {
  text-align: center;
}
</style>
