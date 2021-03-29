<template>
  <div class="card-material">
    <div class="card-material-content">
      <div class="card-material-header">
        <img :src="restaurant.image_url" alt="restaurant-image" />
        <button class="btn btn-primary" @click="handleFavorite">
          <i class="fas fa-heart" :class="isFavorite ? 'favorite' : ''"></i>
        </button>
      </div>
      <div class="card-material-body flex-column justify-content-evenly">
        <div class="d-flex flex-column justify-content-center restaurant-infos">
          <div class="container">
            <div class="name">
              <h3>{{ restaurant.name }}</h3>
            </div>
            <div class="d-flex flex-wrap justify-content-evenly rating-city">
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
              <button class="btn btn-secondary" @click="pushToDetails">Voir en details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/** Import */
import { mapActions, mapState } from 'vuex'

export default {
  name: 'yfRestaurantsListCardRestaurant',
  inject: ['notyf'],
  props: {
    restaurant: {
      type: Object,
      default: () => {
        return {}
      },
    },
    favorites: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  computed: {
    ...mapState(['favoritesref']),
    /**
     * @computed fetchCategories
     * @desc Join categories by ', '
     * @returns {string}
     */
    fetchCategories() {
      return this.restaurant.categories.map(item => item.title).join(', ')
    },
    /**
     * @computed isFavorite
     * @desc Return if restaurant is favorite
     * @returns {boolean}
     */
    isFavorite() {
      return this.favorites.find(item => item['.key'] === this.restaurant.id) !== undefined
    },
  },
  methods: {
    ...mapActions(['addToFavorite', 'removeFavorite']),
    /**
     * @function handleFavorite
     * @desc Handle restaurant favorite
     * @returns {object[]}
     */
    async handleFavorite() {
      const { id } = this.restaurant
      try {
        if (!this.isFavorite) {
          await this.addToFavorite(id)
          this.notyf.success('Favoris ajouté')
        } else {
          await this.removeFavorite(id)
          this.notyf.success('Favoris supprimé')
        }
      } catch (error) {
        console.error(error)
        this.notyf.error('Désolé. Une erreur est survenue')
      }
    },
    /**
     * @function pushToDetails
     * @desc Push router to view restaurant list
     */
    pushToDetails() {
      this.$router.push({ name: 'RestaurantDetails', params: { id: this.restaurant.id } })
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

.favorite {
  color: var(--primary-color) !important;
}
</style>
