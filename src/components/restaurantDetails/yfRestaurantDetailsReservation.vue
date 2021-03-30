<template>
  <div class="d-flex flex-column container-reservation">
    <div class="title">
      <h1>Réservation</h1>
    </div>
    <div class="d-flex justify-content-around content">
      <yfRestaurantDetailsTableOpening
        :openingTime="openingTime"
        :includesMiddayAndEvening="includesMiddayAndEvening"
      />
      <yfRestaurantDetailsBooking />
    </div>
  </div>
</template>

<script>
/** Import */
import { mapState } from 'vuex'
import yfRestaurantDetailsTableOpening from '@/components/restaurantDetails/yfRestaurantDetailsTableOpening.vue'
import yfRestaurantDetailsBooking from '@/components/restaurantDetails/yfRestaurantDetailsBooking.vue'

export default {
  name: 'yfRestaurantDetailsReservation',
  components: {
    yfRestaurantDetailsTableOpening,
    yfRestaurantDetailsBooking,
  },
  data() {
    return {
      openingTime: [],
    }
  },
  computed: {
    ...mapState(['restaurant_details']),
    /**
     * @computed includesMiddayAndEvening
     * @desc Check if includes midday and evening
     * @returns {boolean}
     */
    includesMiddayAndEvening() {
      return this.restaurant_details.hours[0].open.length === 14
    },
  },
  methods: {
    /**
     * @function handleOpeningmiddayAndEvening
     * @desc Handle opening time with midday and evening
     */
    handleOpeningmiddayAndEvening() {
      const hours = this.restaurant_details.hours[0].open

      this.openingTime = hours.map(item => {
        const { day, start, end } = item

        return {
          day,
          time: `${start.slice(0, 2)}h${start.slice(2)} - ${end.slice(0, 2)}h${end.slice(2)}`,
        }
      })

      let timeParsed = []

      for (let i = 0; i < this.openingTime.length; i += 1) {
        timeParsed = [
          ...timeParsed,
          { midday: this.openingTime[i].time, evening: this.openingTime[i + 1].time },
        ]
        i += 1
      }

      this.openingTime = timeParsed
    },
    /**
     * @function handleDay
     * @desc Handle opening time without midday and evening
     */
    handleDay() {
      const hours = this.restaurant_details.hours[0].open

      this.openingTime = hours.map(item => {
        const { day, start, end } = item

        return {
          day,
          time: `${start.slice(0, 2)}h${start.slice(2)} - ${end.slice(0, 2)}h${end.slice(2)}`,
        }
      })
    },
  },
  created() {
    if (this.includesMiddayAndEvening) this.handleOpeningmiddayAndEvening()
    else this.handleDay()
  },
}
</script>

<style scoped>
.container-reservation {
  width: 100%;
  margin: 30px 0;
}

.container-reservation .title {
  margin: 0;
}

.container-reservation .content {
  width: 100%;
  margin-top: 20px;
}

@media screen and (max-width: 1280px) {
  .container-reservation .content {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (min-width: 1600px) {
  .container-reservation .content {
    width: 90%;
  }
}
</style>
