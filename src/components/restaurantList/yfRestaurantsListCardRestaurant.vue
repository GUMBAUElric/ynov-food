<template>
  <div class="card__restaurant">
    <div class="container__card__restaurant">
      <div class="image_restaurant">
        <img :src="restaurant.image_url" alt="image_restaurant" />
      </div>
      <div class="favorite">
        <i class="fas fa-heart"></i>
      </div>
      <div class="name_restaurant">
        <h3>{{ restaurant.name }}</h3>
      </div>
      <div class="categories_restaurant">
        <p>{{ fetchCategories }}</p>
      </div>
      <div class="rating_restaurant">
        <i v-for="(item, idx) in rating" :key="idx" class="fas fa-star"></i>
        <div v-for="(item, idx) in 5 - rating" :key="idx">
          <i v-if="half_rating !== 0 && idx === 0" class="fad fa-star-half-alt"></i>
          <i v-else class="far fa-star"></i>
        </div>
      </div>
      <div class="city_restaurant">
        <i class="fas fa-map-marker-alt"></i>
        <p>{{ restaurant.location.city }}</p>
      </div>
      <div class="see_details">
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
    fetchCategories() {
      return this.restaurant.categories.map(item => item.title).join(', ')
    },
  },
  methods: {
    fetchRating() {
      const [rating, halfRating] = this.restaurant.rating.toString().split('.')
      this.rating = parseInt(rating, 10)
      this.half_rating = halfRating === undefined ? 0 : parseInt(halfRating, 10)
    },
  },
  mounted() {
    this.fetchRating()
  },
}
</script>

<style scoped>
.card__restaurant {
  width: 210px;
  height: 310px;
  margin: 40px 50px;
  border-radius: 20px;
  background-color: #fff;
  transition: 300ms ease;
  z-index: 0;
}

.card__restaurant .container__card__restaurant {
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card__restaurant .container__card__restaurant .image_restaurant img {
  width: 70px;
  height: 70px;
  margin-top: -50px;
  border-radius: 50%;
}

.card__restaurant .container__card__restaurant .favorite {
  margin-right: -120px;
  margin-top: -20px;
  margin-bottom: 10px;
  cursor: pointer;
}

.favorite-active {
  color: var(--primary-color);
}

.card__restaurant .container__card__restaurant .name_restaurant {
  margin: 20px 0;
}

.card__restaurant .container__card__restaurant .name_restaurant h3 {
  text-align: center;
}

.card__restaurant .container__card__restaurant .categories_restaurant p {
  text-align: center;
}

.card__restaurant .container__card__restaurant .rating_restaurant {
  margin: 20px 0;
  display: inline-flex;
}

.card__restaurant .container__card__restaurant .rating_restaurant i {
  margin: 0 5px;
}

.card__restaurant .container__card__restaurant .city_restaurant {
  display: flex;
  align-items: center;
}

.card__restaurant .container__card__restaurant .city_restaurant p {
  margin-left: 5px;
}

.card__restaurant .container__card__restaurant .see_details {
  margin-top: 10px;
}

.card__restaurant .container__card__restaurant .see_details button {
  position: relative;
  height: 40px;
  width: 130px;
  margin-top: 15px;
  border-radius: 20px;
  background-color: #fff;
  z-index: 0;
  transition: 300ms;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid var(--primary-color);
}

.card__restaurant .container__card__restaurant .see_details button:hover {
  width: 160px;
}

.card__restaurant .container__card__restaurant .see_details button::before {
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

.card__restaurant .container__card__restaurant .see_details button:hover::before {
  transform: translate(0%);
}

.card__restaurant .container__card__restaurant .see_details button i {
  transform: scale(0);
  margin-left: -10px;
  font-size: 0.9em;
  transition: 300ms;
}

.card__restaurant .container__card__restaurant .see_details button:hover i {
  display: inline;
  margin-left: 10px;
  transform: scale(1);
}
</style>
