<template>
  <div class="card__category">
    <div class="container__card__category">
      <div class="food_logo">
        <img src="../../assets/img/food/burger.svg" alt="" />
      </div>
      <div class="food_name">
        Burger
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfCardCategory',
}
</script>

<style scoped>
.card__category {
  margin: 10px 20px;
  border-radius: 20px;
  transition: 300ms ease;
  background-color: #fff;
}

.card__category:hover {
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
