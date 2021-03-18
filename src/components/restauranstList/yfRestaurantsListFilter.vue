<template>
  <div class="filter">
    <div class="container__filter">
      <div class="aroud-me">
        <input type="checkbox" id="aroundMe" name="aroundMe" />
        <label for="aroundMe">Autour de moi</label>
      </div>
      <div class="is-open">
        <input type="checkbox" id="isOpen" name="isOpen" />
        <label for="isOpen">Restaurants ouvert</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantsListFilter',
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
