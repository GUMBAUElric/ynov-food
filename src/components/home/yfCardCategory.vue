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
  background-color: #d0d0d4;
  transition: 300ms ease;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(166, 173, 201, 0.2);
}

.card__category:hover {
  background-color: #fdbe0c;
  cursor: pointer;
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
