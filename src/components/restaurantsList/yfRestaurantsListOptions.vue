<template>
  <div class="d-flex justify-content-around container-options">
    <div class="d-flex align-items-center options">
      <yfRestaurantsListOptionsSearch
        :auto_complete="auto_complete"
        :defaultValue="search"
        @searchValue="handleValue"
        @searchValueAtClick="handleValueAtClick"
      />
    </div>
    <div class="options">
      <button
        class="btn btn-primary"
        :class="geolocationIsEnable ? 'btn-primary-selected' : ''"
        @click="handleGeolocation"
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
          <yfSlider icon="fas fa-star" :initialRange="rating" @rangeValue="handleRating" />
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
      geolocationIsEnable: sessionStorage.getItem('geolocationIsEnable') === 'true',
      rating: sessionStorage.getItem('rating') || '0',
      search: sessionStorage.getItem('search') || '',
    }
  },
  computed: {
    ...mapState(['params', 'auto_complete']),
  },
  methods: {
    ...mapActions([
      'fetchRestaurants',
      'fetchAutoComplete',
      'enableGeolocation',
      'disableGeolocation',
      'updateOpenNow',
      'updateAutoComplete',
      'resetSearching',
      'updateTerm',
    ]),
    /**
     * @function handleGeolocation
     * @desc Handle the user geolocation
     */
    async handleGeolocation() {
      if (!this.geolocationIsEnable) {
        sessionStorage.setItem('geolocationIsEnable', true)
        this.geolocationIsEnable = true
        try {
          const { latitude, longitude } = await this.geolocation.findMe()
          this.enableGeolocation({ latitude, longitude, radius: 40000 })
        } catch (error) {
          console.error(error)
          this.notyf.error('Géolocalisation impossible')
          sessionStorage.setItem('geolocationIsEnable', false)
          this.geolocationIsEnable = false
        }
      } else {
        sessionStorage.setItem('geolocationIsEnable', false)
        this.geolocationIsEnable = false
        this.disableGeolocation()
      }
    },
    /**
     * @function checkIfGeolocationNeedToBeTrigger
     * @desc Trigger geolocation if needed
     */
    async checkIfGeolocationNeedToBeTrigger() {
      if (this.geolocationIsEnable) {
        try {
          const { latitude, longitude } = await this.geolocation.findMe()
          this.enableGeolocation({ latitude, longitude, radius: 40000 })
        } catch (error) {
          console.error(error)
          this.notyf.error('Géolocalisation impossible')
        }
      }
    },
    /**
     * @function handleRating
     * @desc Handle rating restaurant
     */
    handleRating(value) {
      this.rating = value
      sessionStorage.setItem('rating', value)
      this.fetchRestaurants()
    },
    /**
     * @function handleValue
     * @desc Set autocomplete when typing
     */
    handleValue(value) {
      this.search = value

      if (value === '') {
        this.updateAutoComplete([])
        return
      }

      this.fetchAutoComplete(value)
    },
    /**
     * @function handleValueAtClick
     * @desc Filter restaurant with search
     */
    handleValueAtClick(value) {
      if (value === null || value === '') {
        sessionStorage.removeItem('search')
        this.resetSearching()
        return
      }

      this.updateTerm(value)
      this.search = value

      sessionStorage.setItem('search', value)
    },
  },
  created() {
    this.checkIfGeolocationNeedToBeTrigger()
    if (this.search !== '') this.updateTerm(this.search)
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
