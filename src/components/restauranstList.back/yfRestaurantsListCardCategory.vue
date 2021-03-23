<template>
  <div class="card-category" :class="category.isSelected ? 'active' : ''">
    <div class="d-flex flex-column align-items-center container">
      <div class="food-logo">
        <img :src="require(`../../assets/img/food/${category.food_logo}`)" alt="" />
      </div>
      <div class="food-name">
        {{ category.food_name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantsListCardCategory',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-category {
  height: 70px;
  margin: 10px 20px;
  border-radius: 20px;
  transition: 300ms ease;
  background-color: #fff;
  overflow: hidden;
}

.active {
  height: 100px;
  background-color: var(--primary-color);
}

.card-category:hover {
  height: 100px;
  cursor: pointer;
  background-color: var(--primary-color);
}

.card-category .container {
  margin: 10px 20px;
}

.card-category .container .food-logo img {
  width: 40px;
}

.card-category .container .food-name {
  margin-top: 20px;
}
</style>
