<template>
  <div class="container__restaurants__list">
    <div class="container__search__bar">
      <yfSearchBar />
    </div>
    <div class="container__cards__categories">
      <yfCardCategory
        v-for="(category, idx) in categories"
        :key="idx"
        :category="category"
        @click.native="setSelected(idx)"
      />
    </div>
    <div class="container__cards__restaurant">
      <yfCardRestaurant v-for="item in restaurantsList" :key="item.id" :restaurant="item" />
    </div>
    <div class="container__footer">
      <yfRestaurantsListFooter />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import yfSearchBar from '@/components/restaurantList/yfRestaurantsListSearchBar.vue'
import yfCardCategory from '@/components/restaurantList/yfRestaurantsListCardCategory.vue'
import yfCardRestaurant from '@/components/restaurantList/yfRestaurantsListCardRestaurant.vue'
import yfRestaurantsListFooter from '@/components/restaurantList/yfRestaurantsListFooter.vue'
import restaurantsList from '@/assets/json/restaurantsList.json'

export default {
  name: 'RestaurantsList',
  components: {
    yfSearchBar,
    yfCardCategory,
    yfCardRestaurant,
    yfRestaurantsListFooter,
  },
  data() {
    return {
      restaurantsList,
      categories: [
        {
          food_name: 'All',
          food_logo: 'all.svg',
          isSelected: true,
        },
        {
          food_name: 'Burger',
          food_logo: 'burger.svg',
          isSelected: false,
        },
        {
          food_name: 'Pizza',
          food_logo: 'pizza.svg',
          isSelected: false,
        },
        {
          food_name: 'Sushi',
          food_logo: 'sushi.svg',
          isSelected: false,
        },
        {
          food_name: 'Dessert',
          food_logo: 'dessert.svg',
          isSelected: false,
        },
        {
          food_name: 'Favoris',
          food_logo: 'favorite.svg',
          isSelected: false,
        },
        {
          food_name: 'Around me',
          food_logo: 'pin.svg',
          isSelected: false,
        },
        {
          food_name: 'Reserverd',
          food_logo: 'reserved.svg',
          isSelected: false,
        },
      ],
    }
  },
  computed: {
    ...mapState(['restaurants_list']),
    getIndexSelectedCategory() {
      return this.categories.findIndex(category => category.isSelected === true)
    },
  },
  methods: {
    ...mapActions(['fetchRestaurants']),
    setSelected(idx) {
      this.categories[this.getIndexSelectedCategory].isSelected = false
      this.categories[idx].isSelected = true
    },
  },
  mounted() {
    // this.fetchRestaurants()
  },
}
</script>

<style scoped>
.container__restaurants__list {
  width: 100%;
}

.container__restaurants__list .container__search__bar {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container__restaurants__list .container__cards__categories {
  width: 100%;
  margin: 60px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.container__restaurants__list .container__cards__restaurant {
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}

.container__restaurants__list .container__footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
