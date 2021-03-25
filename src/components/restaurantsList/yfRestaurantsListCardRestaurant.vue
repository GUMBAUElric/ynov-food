<template>
  <div class="card-material">
    <div class="card-material-content">
      <div class="card-material-header">
        <img :src="restaurant.image_url" alt="restaurant-image" />
        <button class="btn btn-primary">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      <div class="card-material-body flex-column justify-content-evenly">
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
            <div class="d-flex justify-content-center more-details">
              <button class="btn btn-secondary">Voir en details</button>
            </div>
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
  width: 270px;
  height: 400px;
}

.card-material .card-material-content {
  margin: 0;
  position: relative;
}

.card-material .card-material-content .card-material-header {
  height: 45%;
}

.card-material .card-material-content .card-material-header img {
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0 0;
}

.card-material .card-material-content .card-material-header .btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
}

.card-material .card-material-content .card-material-header .btn:hover {
  background-color: #fff;
}

.card-material .card-material-content .card-material-header .btn i {
  color: var(--text-color);
  transform: translateY(5%);
  transition: 200ms ease;
}

.card-material .card-material-content .card-material-header .btn:hover i {
  color: var(--primary-color);
}

.card-material .card-material-content .card-material-body .restaurant-infos {
  width: 100%;
  height: 45%;
}

.card-material .card-material-content .card-material-body .restaurant-infos .container {
  margin: 0 20px;
}

.card-material .card-material-content .card-material-body .restaurant-infos .container .name h3 {
  text-align: center;
  margin-top: 10px;
}

.card-material
  .card-material-content
  .card-material-body
  .restaurant-infos
  .container
  .rating-city {
  margin-top: 30px;
}

.card-material
  .card-material-content
  .card-material-body
  .restaurant-infos
  .container
  .rating-city
  i {
  margin-right: 5px;
}

.card-material .card-material-content .card-material-body .restaurant-categories {
  width: 100%;
  height: 55%;
  position: relative;
}

.card-material .card-material-content .card-material-body .restaurant-categories .container {
  width: 100%;
  margin: 0 10px;
}

.card-material .card-material-content .card-material-body .restaurant-categories .container p {
  text-align: center;
}

.card-material
  .card-material-content
  .card-material-body
  .restaurant-categories
  .container
  .more-details {
  margin-top: 20px;
}

.card-material
  .card-material-content
  .card-material-body
  .restaurant-categories
  .container
  .more-details
  button {
  width: 130px;
  height: 40px;
}
</style>
