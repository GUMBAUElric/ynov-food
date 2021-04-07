<template>
  <div class="d-flex slider">
    <h3>{{ range }}</h3>
    <input
      type="range"
      v-model="range"
      name=""
      min="0"
      max="5"
      step="0.5"
      @change="$emit('rangeValue', range)"
    />
    <i v-if="icon" :class="icon"></i>
  </div>
</template>

<script>
export default {
  name: 'yfSlider',
  data() {
    return {
      range: this.initialRange,
    }
  },
  props: {
    /** The initial range */
    initialRange: {
      type: String,
      default: '0',
    },
    /** Class icon */
    icon: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.slider input {
  width: 160px;
}

.slider h3,
.slider i {
  margin: 0 10px;
  width: 20px;
}

@media screen and (max-width: 1000px) {
  .container-options .options .slider input {
    width: 200px;
  }
}
</style>
