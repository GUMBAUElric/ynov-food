<template>
  <div class="card-restaurant">
    <div class="container">
      <div class="restaurant-image">
        <img :src="restaurant.image_url" alt="restaurant-image" />
      </div>
      <div class="favorite">
        <i class="fas fa-heart"></i>
      </div>
      <div class="restaurant-name">
        <h3>{{ restaurant.name }}</h3>
      </div>
      <div class="restaurant-categories">
        <p>{{ fetchCategories }}</p>
      </div>

      <div class="restaurant-city">
        <i class="fas fa-map-marker-alt"></i>
        <p>{{ restaurant.location.city }}</p>
      </div>
      <div class="restaurant-rating">
        <i v-for="(item, idx) in rating" :key="idx" class="fas fa-star"></i>
        <div v-for="(item, idx) in 5 - rating" :key="`_${idx}`">
          <i v-if="checkIfIsHalfNumber(idx)" class="fad fa-star-half-alt"></i>
          <i v-else class="far fa-star"></i>
        </div>
      </div>
      <div class="more-details">
        <button>
          Voir en détails
          <i class="fas fa-chevron-right"></i>
        </button>
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
      required: true,
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
  mounted() {
    this.fetchRating()
  },
}
</script>

<style scoped>
.card-restaurant {
  width: 210px;
  height: 310px;
  margin: 40px 50px;
  border-radius: 20px;
  background-color: #fff;
  transition: 300ms ease;
  z-index: 0;
}

.card-restaurant .container {
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-restaurant .container .restaurant-image img {
  width: 70px;
  height: 70px;
  margin-top: -50px;
  border-radius: 50%;
}

.card-restaurant .container .favorite {
  margin-right: -120px;
  margin-top: -20px;
  margin-bottom: 10px;
  cursor: pointer;
}

.favorite-active {
  color: var(--primary-color);
}

.card-restaurant .container .restaurant-name {
  margin: 20px 0;
}

.card-restaurant .container .restaurant-name h3 {
  text-align: center;
}

.card-restaurant .container .restaurant-categories p {
  text-align: center;
  margin-left: 5px;
}

.card-restaurant .container .restaurant-city {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.card-restaurant .container .restaurant-city p {
  margin-left: 5px;
}

.card-restaurant .container .restaurant-rating {
  margin: 20px 0;
  display: inline-flex;
}

.card-restaurant .container .restaurant-rating i {
  margin: 0 5px;
}

.card-restaurant .container .more-details button {
  position: relative;
  height: 40px;
  width: 130px;
  border-radius: 20px;
  margin-top: 5px;
  background-color: #fff;
  z-index: 0;
  transition: 300ms;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid var(--primary-color);
}

.card-restaurant .container .more-details button:hover {
  width: 160px;
}

.card-restaurant .container .more-details button::before {
  content: '';
  position: absolute;
  height: 40px;
  width: 160px;
  border-radius: 20px;
  top: -2px;
  left: -2px;
  transition: 300ms;
  z-index: -1;
  transform: translate(-100%);
  background-color: var(--primary-color);
}

.card-restaurant .container .more-details button:hover::before {
  transform: translate(0%);
}

.card-restaurant .container .more-details button i {
  transform: scale(0);
  margin-left: -10px;
  font-size: 0.9em;
  transition: 300ms;
}

.card-restaurant .container .more-details button:hover i {
  display: inline;
  margin-left: 10px;
  transform: scale(1);
}
</style>
