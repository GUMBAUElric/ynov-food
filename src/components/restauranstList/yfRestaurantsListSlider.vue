<template>
  <div class="range">
    <div class="field">
      <div class="value">{{ range }}</div>
      <input type="range" min="0" max="5" v-model="range" />
      <i class="fas fa-star"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantsListSlider',
  data() {
    return {
      range: 0,
    }
  },
}
</script>

<style scoped>
.range {
  display: flex;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
}

.range .field {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.range .field input {
  margin: 0 20px;
  height: 3px;
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #ddd;
}
</style>
