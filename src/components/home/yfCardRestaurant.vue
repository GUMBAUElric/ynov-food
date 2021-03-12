<template>
  <div class="card__restaurant">
    <div class="container__card__restaurant">
      <div class="image_restaurant">
        <img
          src="https://s3-media3.fl.yelpcdn.com/bphoto/LiSESAyRJzf9m3CWPpeNpg/o.jpg"
          alt="image_restaurant"
        />
      </div>
      <div class="name_restaurant">
        <h3>La casa de papel</h3>
      </div>
      <div class="categorie_restaurant">
        <p>Italian</p>
      </div>
      <div class="rating_restaurant">
        <i class="fas fa-star" v-for="(item, idx) in 5" :key="idx"></i>
      </div>
      <div class="city_restaurant">
        <i class="fas fa-map-marker-alt"></i>
        <p>Lyon</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfCardRestaurant',
}
</script>

<style scoped>
.card__restaurant {
  margin: 40px 50px;
  border-radius: 20px;
  background-color: #fff;
}

.card__restaurant .container__card__restaurant {
  margin: 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card__restaurant .container__card__restaurant .image_restaurant img {
  width: 70px;
  height: 70px;
  margin-top: -50px;
  border-radius: 50%;
}

.card__restaurant .container__card__restaurant .name_restaurant {
  margin: 20px 0;
}

.card__restaurant .container__card__restaurant .rating_restaurant {
  margin: 20px 0;
}

.card__restaurant .container__card__restaurant .rating_restaurant i {
  margin: 0 5px;
}

.card__restaurant .container__card__restaurant .city_restaurant {
  display: flex;
  align-items: center;
}

.card__restaurant .container__card__restaurant .city_restaurant p {
  margin-left: 5px;
}
</style>
