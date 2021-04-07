<template>
  <div class="d-flex justify-content-center container">
    <div class="d-flex justify-content-center calendar">
      <vue-cal
        locale="fr"
        :disable-views="['years', 'year', 'day']"
        :events="events"
        :time-from="8 * 60"
        :time-to="24 * 60"
        :time-step="30"
        events-on-month-view="short"
        active-view="month"
        :on-event-click="onEventClick"
      />
    </div>
  </div>
</template>

<script>
/** Import */
import VueCal from 'vue-cal'
import { mapState } from 'vuex'

export default {
  name: 'Calendar',
  components: { VueCal },
  data() {
    return {
      events: [],
    }
  },
  computed: {
    ...mapState(['bookings']),
  },
  watch: {
    bookings() {
      this.handleEvents()
    },
  },
  methods: {
    /**
     * @function handleEvents
     * @desc Handle events data
     */
    handleEvents() {
      this.events = this.bookings
        .map(item => {
          const day = item.reservation.day.split('/')

          item.reservation.day = day.reverse().join('-')

          return item
        })
        .map(item => {
          const { reservation, restaurant_name } = item

          let time_end = parseInt(reservation.time.split(':')[0], 10) + 1

          time_end = `${time_end}:${reservation.time.split(':')[1]}`

          return {
            start: `${reservation.day} ${reservation.time}`,
            end: `${reservation.day} ${time_end}`,
            title: restaurant_name,
            class: 'reservation',
          }
        })
    },
    /**
     * @function onEventClick
     * @desc Push to restaurant details when booking is selected
     */
    onEventClick(event, e) {
      const bookingSelected = this.bookings.filter(item => item.restaurant_name === event.title)[0]

      this.$router.push({ name: 'RestaurantDetails', params: { id: bookingSelected['.key'] } })

      // Prevent navigating to narrower view (default vue-cal behavior).
      e.stopPropagation()
    },
  },
  created() {
    this.handleEvents()
  },
}
</script>

<style scoped>
.container {
  margin-top: 30px;
  height: 83vh;
}

.container .calendar {
  width: 98%;
  height: 100%;
}
</style>
