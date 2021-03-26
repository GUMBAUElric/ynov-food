<template>
  <div class="d-flex justify-content-around container-options">
    <div class="d-flex align-items-center options">
      <yfRestaurantsListOptionsSearch />
    </div>
    <div class="options">
      <button
        class="btn btn-primary"
        :class="isSelected.aroundMe ? 'btn-primary-selected' : ''"
        @click="filterByGeoLocation"
      >
        <i class="far fa-compass"></i>
        <span>Autour de moi</span>
      </button>
    </div>
    <div class="options">
      <button
        class="btn btn-primary"
        :class="isSelected.isOpen ? 'btn-primary-selected' : ''"
        @click="filterByOpening"
      >
        <i class="far fa-door-open"></i>
        <span>Restaurant ouvert</span>
      </button>
    </div>
    <div class="options card-material">
      <div class="card-material-content">
        <div class="card-material-body">
          <yfSlider icon="fas fa-star" @rangeValue="filterByRating" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/** Import */
import { mapActions } from 'vuex'
import yfSlider from '@/components/yfSlider.vue'
import yfRestaurantsListOptionsSearch from '@/components/restaurantsList/yfRestaurantsListOptionsSearch.vue'
import Geolocation from '@/assets/modules/Geolocation'

const { getPermissionStatus, getGeolocation } = Geolocation()

export default {
  name: 'yfRestaurantsListOptions',
  components: {
    yfSlider,
    yfRestaurantsListOptionsSearch,
  },
  data() {
    return {
      isSelected: {
        aroundMe: false,
        isOpen: false,
      },
    }
  },
  methods: {
    ...mapActions([
      'fetchRestaurants',
      'enableGeolocation',
      'disableGeolocation',
      'updateOpenNow',
      'updateRating',
    ]),
    /**
     * @function filterByGeoLocation
     * @desc This method filter restaurant by latitute and longitude
     * @returns {void}
     */
    async filterByGeoLocation() {
      this.isSelected.aroundMe = !this.isSelected.aroundMe

      if (this.isSelected.aroundMe) {
        try {
          const { latitude, longitude } = await getGeolocation()
          const permission = await getPermissionStatus()

          if (permission === 'granted') {
            this.enableGeolocation({ latitude, longitude, radius: 40000 })
          }
        } catch (error) {
          console.error(error)
        }
      } else {
        this.disableGeolocation()
      }
    },
    /**
     * @function filterByOpening
     * @desc This method filter open restaurant
     * @returns {void}
     */
    filterByOpening() {
      this.isSelected.isOpen = !this.isSelected.isOpen

      if (this.isSelected.isOpen) this.updateOpenNow(true)
      else this.updateOpenNow(false)
    },
    /**
     * @function filterByRating
     * @desc Ths method filter restaurant by rating
     * @param {event} value Value of range slider
     * @returns {void}
     */
    filterByRating(value) {
      this.updateRating(value)
      this.fetchRestaurants()
    },
  },
}
</script>

<style scoped>
.container-options {
  width: 100%;
  margin-top: 70px;
}

.container-options .card-material .card-material-content {
  margin: 0 5px;
}

@media screen and (max-width: 1000px) {
  .container-options {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
  }

  .container-options .options button {
    width: 300px;
  }

  .container-options .card-material .card-material-content {
    margin: 5px 5px;
  }

  .container-options .options {
    margin: 20px 0;
  }
}

@media screen and (min-width: 1600px) {
  .container-options {
    justify-content: center !important;
  }

  .container-options .options {
    margin: 0 60px;
  }
}
</style>
