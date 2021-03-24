<template>
  <div class="card-material" :class="category.isSelected ? 'card-selected' : ''">
    <div class="card-material-content">
      <img
        :src="require(`../../assets/img/food/${category.food_logo}`)"
        :alt="category.food_logo"
      />
      <p>{{ category.food_name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfRestaurantsListCategories',
  props: {
    category: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>

<style scoped>
.card-material {
  background-color: transparent;
  box-shadow: none;
  border-radius: 10px;
  transition: 300ms ease;
  cursor: pointer;
}

.card-material:hover {
  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

.card-material .card-material-content img {
  width: 35px;
  margin: 0 5px;
}

.card-material .card-material-content p {
  margin: 0 5px;
  font-weight: 300;
}

.card-selected {
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
}

@media screen and (min-width: 1600px) {
  .card-material {
    margin: 0 60px;
  }
}
</style>
