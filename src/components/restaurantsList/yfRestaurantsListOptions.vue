<template>
  <div class="d-flex justify-content-around container-options">
    <div class="d-flex align-items-center options">
      <yfRestaurantsListOptionsSearch />
    </div>
    <div class="options">
      <button
        class="btn btn-primary"
        :class="geolocationIsEnable ? 'btn-primary-selected' : ''"
        @click="updateGeolocationIsEnable"
      >
        <i class="far fa-compass"></i>
        <span>Autour de moi</span>
      </button>
    </div>
    <div class="options">
      <button
        class="btn btn-primary"
        :class="params.open_now ? 'btn-primary-selected' : ''"
        @click="updateOpenNow"
      >
        <i class="far fa-door-open"></i>
        <span>Restaurant ouvert</span>
      </button>
    </div>
    <div class="options card-material">
      <div class="card-material-content">
        <div class="card-material-body">
          <yfSlider icon="fas fa-star" :initialRange="rating" @rangeValue="updateRating" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/** Import */
import { mapActions, mapState } from 'vuex'
import yfSlider from '@/components/yfSlider.vue'
import yfRestaurantsListOptionsSearch from '@/components/restaurantsList/yfRestaurantsListOptionsSearch.vue'
import Geolocation from '@/assets/utils/Geolocation'

export default {
  name: 'yfRestaurantsListOptions',
  inject: ['notyf'],
  components: {
    yfSlider,
    yfRestaurantsListOptionsSearch,
  },
  data() {
    return {
      geolocation: Geolocation(),
    }
  },
  computed: {
    ...mapState(['params', 'geolocationIsEnable', 'rating']),
  },
  watch: {
    async geolocationIsEnable(newValue) {
      if (newValue) {
        try {
          const { latitude, longitude } = await this.geolocation.findMe()
          this.enableGeolocation({ latitude, longitude, radius: 40000 })
        } catch (error) {
          console.error(error)
          this.notyf.error('Géolocalisation impossible')
          this.updateGeolocationIsEnable(false)
        }
      } else {
        this.disableGeolocation()
      }
    },
  },
  methods: {
    ...mapActions([
      'fetchRestaurants',
      'enableGeolocation',
      'disableGeolocation',
      'updateGeolocationIsEnable',
      'updateOpenNow',
      'updateRating',
    ]),
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
