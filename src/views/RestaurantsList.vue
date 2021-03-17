<template>
  <div class="container__restaurants__list">
    <div class="container__filter">
      <yfRestaurantsListFilter />
      <yfRestaurantsListSearch />
    </div>
    <div class="container__cards__categories">
      <yfRestaurantsListCardCategory
        v-for="(category, idx) in categories"
        :key="idx"
        :category="category"
        @click.native="setSelected(idx)"
      />
    </div>
    <div class="container__cards__restaurant">
      <yfRestaurantsListCardRestaurant
        v-for="item in restaurantsList"
        :key="item.id"
        :restaurant="item"
      />
    </div>
    <div class="container__footer">
      <yfRestaurantsListFooter />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import yfRestaurantsListFilter from '@/components/restaurantList/yfRestaurantsListFilter.vue'
import yfRestaurantsListSearch from '@/components/restaurantList/yfRestaurantsListSearch.vue'
import yfRestaurantsListCardCategory from '@/components/restaurantList/yfRestaurantsListCardCategory.vue'
import yfRestaurantsListCardRestaurant from '@/components/restaurantList/yfRestaurantsListCardRestaurant.vue'
import yfRestaurantsListFooter from '@/components/restaurantList/yfRestaurantsListFooter.vue'
import restaurantsList from '@/assets/json/restaurantsList.json'

export default {
  name: 'RestaurantsList',
  components: {
    yfRestaurantsListFilter,
    yfRestaurantsListSearch,
    yfRestaurantsListCardCategory,
    yfRestaurantsListCardRestaurant,
    yfRestaurantsListFooter,
  },
  data() {
    return {
      restaurantsList,
      categories: [
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
          food_name: 'Taco',
          food_logo: 'taco.svg',
          isSelected: false,
        },
        {
          food_name: 'Salade',
          food_logo: 'salad.svg',
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
      ],
    }
  },
  watch: {
    category() {
      // this.fetchRestaurants()
    },
    offset() {
      this.fetchRestaurants()
    },
  },
  computed: {
    ...mapState(['restaurants_list', 'offset', 'category']),
    getIndexSelectedCategory() {
      return this.categories.findIndex(category => category.isSelected === true)
    },
  },
  methods: {
    ...mapActions(['fetchRestaurants', 'updateCategory']),
    setSelected(idx) {
      const { food_name } = this.categories[idx]
      const idxSelectedCategory = this.getIndexSelectedCategory

      this.categories[idx].isSelected = !this.categories[idx].isSelected

      if (idxSelectedCategory !== -1) {
        this.categories[idxSelectedCategory].isSelected = false

        const foodName =
          this.categories[idxSelectedCategory].food_name === food_name ? '' : food_name

        this.updateCategory(foodName)
      } else this.updateCategory(food_name)
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

.container__restaurants__list .container__filter {
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
