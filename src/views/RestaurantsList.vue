<template>
  <section class="d-flex flex-column align-items-center restaurants-list">
    <div class="d-flex flex-column align-items-center header">
      <yfRestaurantsListTagLine />
      <yfRestaurantsListOptions />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex'
import yfRestaurantsListTagLine from '@/components/restaurantsList/yfRestaurantsListTagLine.vue'
import yfRestaurantsListOptions from '@/components/restaurantsList/yfRestaurantsListOptions.vue'
import restaurantsList from '@/assets/json/restaurantsList.json'

export default {
  name: 'RestaurantsList',
  components: {
    yfRestaurantsListTagLine,
    yfRestaurantsListOptions,
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

.restaurants-list .header {
  width: 95%;
}

@media screen and (min-width: 1800px) {
  .restaurants-list .container-restaurants {
    width: 1700px;
  }
}
</style>
