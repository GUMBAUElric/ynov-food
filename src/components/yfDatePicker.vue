<template>
  <div class="d-flex align-items-center justify-content-center date-picker">
    <input id="bookingDay" type="text" v-model="date" @input="$emit('dateSelected', date)" />
    <i class="far fa-calendar-alt"></i>
  </div>
</template>

<script>
/** Import */
import flatpickr from 'flatpickr'
import { French } from 'flatpickr/dist/l10n/fr'

export default {
  name: 'yfDatePicker',
  data() {
    return {
      date: this.defaultDate,
    }
  },
  props: {
    /** The default date */
    defaultDate: {
      type: String,
      default: '',
    },
  },
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
  border-radius: 10px;
  height: 25px;
  width: 200px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
  font-size: 1em;
}

.date-picker input {
  font-size: 0.9em;
  text-align: center;
}
</style>
