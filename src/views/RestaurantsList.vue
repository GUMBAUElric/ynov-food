<template>
  <section class="d-flex flex-column align-items-center restaurants-list">
    <div class="d-flex flex-wrap justify-content-around container-filter">
      <yfRestaurantsListOptions />
      <yfRestaurantsListSearch />
      <yfRestaurantsListSlider />
    </div>
    <div class="d-flex flex-wrap justify-content-center container-categories">
      <yfRestaurantsListCardCategory
        v-for="(category, idx) in categories"
        :key="idx"
        :category="category"
        @click.native="setSelected(idx)"
      />
    </div>
    <div class="d-flex flex-wrap justify-content-center container-restaurants">
      <yfRestaurantsListCardRestaurant
        v-for="item in restaurantsList"
        :key="item.id"
        :restaurant="item"
      />
    </div>
    <div class="footer">
      <yfRestaurantsListPagination />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import yfRestaurantsListOptions from '@/components/restauranstList/yfRestaurantsListOptions.vue'
import yfRestaurantsListSearch from '@/components/restauranstList/yfRestaurantsListSearch.vue'
import yfRestaurantsListSlider from '@/components/restauranstList/yfRestaurantsListSlider.vue'
import yfRestaurantsListCardCategory from '@/components/restauranstList/yfRestaurantsListCardCategory.vue'
import yfRestaurantsListCardRestaurant from '@/components/restauranstList/yfRestaurantsListCardRestaurant.vue'
import yfRestaurantsListPagination from '@/components/restauranstList/yfRestaurantsListPagination.vue'
import restaurantsList from '@/assets/json/restaurantsList.json'

export default {
  name: 'RestaurantsList',
  components: {
    yfRestaurantsListOptions,
    yfRestaurantsListSearch,
    yfRestaurantsListSlider,
    yfRestaurantsListCardCategory,
    yfRestaurantsListCardRestaurant,
    yfRestaurantsListPagination,
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
    // this.fetchRestaurants()
  },
}
</script>

<style scoped>
.restaurants-list {
  width: 100%;
}

.restaurants-list .container-filter {
  width: 80%;
  height: 20%;
}

.restaurants-list .container-categories {
  width: 80%;
  margin: 60px 0;
}

.restaurants-list .container-restaurants {
  width: 100%;
  height: 80%;
}

.restaurants-list .footer {
  width: 100%;
}

@media screen and (max-width: 750px) {
  .restaurants-list .container-filter {
    flex-direction: column;
    align-items: center;
  }
}

@media screen and (min-width: 1800px) {
  .restaurants-list .container-restaurants {
    width: 1700px;
  }
}
</style>
