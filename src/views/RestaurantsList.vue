<template>
  <div class="container__restaurants__list">
    <div class="container__filter">
      <yfRestaurantsListFilter />
      <yfRestaurantsListSearch />
      <yfRestaurantsListSlider />
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
        v-for="item in restaurants_list"
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
import yfRestaurantsListFilter from '@/components/restauranstList/yfRestaurantsListFilter.vue'
import yfRestaurantsListSearch from '@/components/restauranstList/yfRestaurantsListSearch.vue'
import yfRestaurantsListSlider from '@/components/restauranstList/yfRestaurantsListSlider.vue'
import yfRestaurantsListCardCategory from '@/components/restauranstList/yfRestaurantsListCardCategory.vue'
import yfRestaurantsListCardRestaurant from '@/components/restauranstList/yfRestaurantsListCardRestaurant.vue'
import yfRestaurantsListFooter from '@/components/restauranstList/yfRestaurantsListFooter.vue'
import restaurantsList from '@/assets/json/restaurantsList.json'

export default {
  name: 'RestaurantsList',
  components: {
    yfRestaurantsListFilter,
    yfRestaurantsListSearch,
    yfRestaurantsListSlider,
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
  computed: {
    ...mapState(['restaurants_list']),
    /**
     * @computed getIndexSelectedCategory
     * @desc Find index selected category
     * @returns {number}
     */
    getIndexSelectedCategory() {
      return this.categories.findIndex(category => category.isSelected === true)
    },
  },
  methods: {
    ...mapActions(['fetchRestaurants', 'updateTerm']),
    /**
     * @computed setSelected
     * @desc This method set category selected
     * @param {number} idx The index of selected category
     * @returns {void}
     */
    setSelected(idx) {
      const { food_name } = this.categories[idx]
      const idxSelectedCategory = this.getIndexSelectedCategory

      this.categories[idx].isSelected = !this.categories[idx].isSelected

      if (idxSelectedCategory !== -1) {
        this.categories[idxSelectedCategory].isSelected = false

        const foodName =
          this.categories[idxSelectedCategory].food_name === food_name ? '' : food_name

        this.updateTerm(foodName)
      } else this.updateTerm(food_name)
    },
  },
  mounted() {
    this.fetchRestaurants()
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
