<template>
  <div class="filter">
    <div class="container__filter">
      <div class="aroud-me">
        <input
          type="checkbox"
          id="aroundMe"
          name="aroundMe"
          v-model="filter.aroudMe"
          @change="filterByGeoLocation"
        />
        <label for="aroundMe">Autour de moi</label>
      </div>
      <div class="is-open">
        <input
          type="checkbox"
          id="isOpen"
          name="isOpen"
          v-model="filter.isOpen"
          @change="filterByOpening"
        />
        <label for="isOpen">Restaurants ouvert</label>
      </div>
    </div>
  </div>
</template>

<script>
/** Import */
import { mapActions } from 'vuex'
import Geolocation from '@/assets/modules/Geolocation'

const { getPermissionStatus, getGeolocation } = Geolocation()

export default {
  name: 'yfRestaurantsListFilter',
  data() {
    return {
      filter: {
        aroudMe: false,
        isOpen: false,
      },
    }
  },
  methods: {
    ...mapActions(['fetchRestaurants', 'enableGeolocation', 'disableGeolocation', 'updateOpenNow']),
    /**
     * @function filterByGeoLocation
     * @desc This method filter restaurant by latitute and longitude
     * @returns {void}
     */
    async filterByGeoLocation() {
      if (this.filter.aroudMe) {
        try {
          const permission = await getPermissionStatus()

          if (permission === 'granted') {
            const { latitude, longitude } = await getGeolocation()
            this.enableGeolocation({ latitude, longitude, radius: 40000 })
          }
        } catch (error) {
          console.error(error)
        }
      } else this.disableGeolocation()
    },
    /**
     * @function filterByOpening
     * @desc This method filter open restaurant
     * @returns {void}
     */
    filterByOpening() {
      if (this.filter.isOpen) this.updateOpenNow(true)
      else this.updateOpenNow(false)
    },
  },
}
</script>

<style scoped>
.filter {
  height: 40px;
  border-radius: 20px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  color: #faf9fb;
}

.filter .container__filter {
  margin: 15px 20px;
  display: flex;
  flex-direction: column;
}

.filter .container__filter .is-open {
  margin-top: 10px;
}
</style>
