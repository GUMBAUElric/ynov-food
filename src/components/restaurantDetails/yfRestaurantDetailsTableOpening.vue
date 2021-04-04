<template>
  <div class="d-flex align-items-flex-start table-opening">
    <table class="styled-table" v-if="includesMiddayAndEvening">
      <thead>
        <tr>
          <th>Jour</th>
          <th>Midi</th>
          <th>Soir</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, idx) in openingTime"
          :key="idx"
          :class="currentDay === idx ? 'active-row' : ''"
        >
          <td>
            <i v-if="currentDay === idx ? 'active-row' : ''" class="fal fa-hand-point-right"></i>
            {{ day[idx] }}
          </td>
          <td>{{ item.midday }}</td>
          <td colspan="2">{{ item.evening }}</td>
        </tr>
      </tbody>
    </table>
    <table class="styled-table" v-else>
      <thead>
        <tr>
          <th>Jour</th>
          <th>Horaire</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, idx) in openingTime"
          :key="idx"
          :class="currentDay === idx ? 'active-row' : ''"
        >
          <td>
            <i v-if="currentDay === idx ? 'active-row' : ''" class="fal fa-hand-point-right"></i>
            {{ day[idx] }}
          </td>
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantDetailsTableOpening',
  data() {
    return {
      day: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    }
  },
  computed: {
    /**
     * @computed currentDay
     * @desc Get the current date
     * @returns {boolean}
     */
    currentDay() {
      return new Date().getDay() === 0 ? 6 : new Date().getDay() - 1
    },
  },
  props: {
    /** Array of opening time */
    openingTime: {
      type: Array,
      required: true,
      default: () => {
        return []
      },
    },
    /** If includes midday and evening */
    includesMiddayAndEvening: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
.table-opening .styled-table {
  border-collapse: collapse;
  font-size: 0.9em;
  min-width: 400px;
  margin-top: 150px;
  font-family: sans-serif;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  font-size: 1em;
  transition: 300ms ease;
}

.table-opening .styled-table:hover {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.table-opening .styled-table thead tr {
  background-color: var(--primary-color);
  color: #ffffff;
  text-align: left;
  text-align: center;
}

.table-opening .styled-table th,
.table-opening .styled-table td {
  padding: 15px 27px;
  text-align: center;
}

.table-opening .styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.table-opening .styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.table-opening .styled-table tbody tr.active-row {
  font-weight: bold;
  color: var(--primary-color);
}

.table-opening .styled-table tbody tr td {
  position: relative;
}

.table-opening .styled-table tbody tr td i {
  position: absolute;
  left: 10px;
}

@media screen and (max-width: 1280px) {
  .table-opening .styled-table {
    margin-top: 0px;
  }
}
</style>
