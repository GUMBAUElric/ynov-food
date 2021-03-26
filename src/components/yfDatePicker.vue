<template>
  <div class="d-flex align-items-center justify-content-center date-picker">
    <input id="bookingDay" type="text" />
    <i class="far fa-calendar-alt"></i>
  </div>
</template>

<script>
/** Import */
import flatpickr from 'flatpickr'
import { French } from 'flatpickr/dist/l10n/fr'

export default {
  name: 'yfDatePicker',
  mounted() {
    flatpickr('#bookingDay', {
      locale: French,
      dateFormat: 'd/m/Y',
    })
  },
}
</script>

<style scoped>
.date-picker {
  width: 220px;
  height: 25px;
  border-radius: 20px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.date-picker input {
  font-size: 0.9em;
  text-align: center;
}
</style>
