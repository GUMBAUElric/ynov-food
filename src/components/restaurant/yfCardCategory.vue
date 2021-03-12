<template>
  <div class="card__category" :class="category.isSelected ? 'active' : ''">
    <div class="container__card__category">
      <div class="food_logo">
        <img :src="require(`../../assets/img/food/${category.food_logo}`)" alt="" />
      </div>
      <div class="food_name">
        {{ category.food_name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfCardCategory',
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card__category {
  height: 70px;
  margin: 10px 20px;
  border-radius: 20px;
  transition: 300ms ease;
  background-color: #fff;
  overflow: hidden;
}

.active {
  height: 100px;
  background-color: #fdbe0c;
}

.card__category:hover {
  height: 100px;
  cursor: pointer;
  background-color: #fdbe0c;
}

.card__category .container__card__category {
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card__category .container__card__category .food_logo img {
  width: 40px;
}

.card__category .container__card__category .food_name {
  margin-top: 20px;
}
</style>
