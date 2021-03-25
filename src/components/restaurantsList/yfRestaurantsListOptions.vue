<template>
  <div class="d-flex justify-content-around container-options">
    <div class="d-flex align-items-center options">
      <v-select
        class="search-bar"
        :options="auto_complete"
        v-model="search"
        @input="setSearch"
        @keyup.enter.native="setSearch"
        @input.native="setAutoComplete"
      >
        <template v-slot:no-options="{ search, searching }">
          <template v-if="searching">
            No results found for <em>{{ search }}</em
            >.
          </template>
          <em style="opacity: 0.5;" v-else>Start typing </em>
        </template>
      </v-select>
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
          <yfRestaurantsListOptionsSlider icon="fas fa-star" @rangeValue="range" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/** Import */
import yfRestaurantsListOptionsSlider from '@/components/restaurantsList/yfRestaurantsListOptionsSlider.vue'

export default {
  name: 'yfRestaurantsListOptions',
  components: {
    yfRestaurantsListOptionsSlider,
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
    filterByGeoLocation() {
      this.isSelected.aroundMe = !this.isSelected.aroundMe
    },
    filterByOpening() {
      this.isSelected.isOpen = !this.isSelected.isOpen
    },
    range(value) {
      console.log(value)
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
