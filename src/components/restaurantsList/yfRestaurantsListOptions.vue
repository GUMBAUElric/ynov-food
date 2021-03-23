<template>
  <div class="d-flex  justify-content-around container-options">
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
    <div class="card-material options">
      <div class="card-material-content justify-content-center">
        <i class="far fa-compass"></i>
        <p>Autour de moi</p>
      </div>
    </div>
    <div class="card-material options">
      <div class="card-material-content justify-content-center">
        <i class="fal fa-door-open"></i>
        <p>Restaurant ouvert</p>
      </div>
    </div>
    <div class="card-material options">
      <div class="card-material-content justify-content-center">
        <input type="range" name="" min="0" max="5" />
        <i class="fas fa-star"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantsListOptions',
}
</script>

<style scoped>
.container-options {
  width: 100%;
  margin: 70px 0;
}

.container-options .options .card-material-content i {
  margin: 0px 5px;
}

.container-options .options .card-material-content p {
  margin: 0px 5px;
}

.container-options .options .card-material-content input {
  width: 150px;
}

@media screen and (max-width: 1000px) {
  .container-options {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
  }

  .container-options .card-material {
    width: 300px;
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
