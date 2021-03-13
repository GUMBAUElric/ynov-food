<template>
  <div class="container__home">
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
      <yfCardRestaurant v-for="(item, idx) in 10" :key="idx" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import yfSearchBar from '@/components/restaurantList/yfRestaurantsListSearchBar.vue'
import yfCardCategory from '@/components/restaurantList/yfRestaurantsListCardCategory.vue'
import yfCardRestaurant from '@/components/restaurantList/yfRestaurantsListCardRestaurant.vue'

export default {
  name: 'RestaurantsList',
  components: {
    yfSearchBar,
    yfCardCategory,
    yfCardRestaurant,
  },
  data() {
    return {
      categories: [
        {
          food_name: 'All',
          food_logo: 'burger.svg',
          isSelected: true,
        },
        {
          food_name: 'burger',
          food_logo: 'burger.svg',
          isSelected: false,
        },
        {
          food_name: 'burger',
          food_logo: 'burger.svg',
          isSelected: false,
        },
        {
          food_name: 'burger',
          food_logo: 'burger.svg',
          isSelected: false,
        },
        {
          food_name: 'burger',
          food_logo: 'burger.svg',
          isSelected: false,
        },
        {
          food_name: 'burger',
          food_logo: 'burger.svg',
          isSelected: false,
        },
        {
          food_name: 'burger',
          food_logo: 'burger.svg',
          isSelected: false,
        },
        {
          food_name: 'burger',
          food_logo: 'burger.svg',
          isSelected: false,
        },
      ],
    }
  },
  computed: {
    getIndexSelectedCategory() {
      return this.categories.findIndex(category => category.isSelected === true)
    },
  },
  methods: {
    setSelected(idx) {
      this.categories[this.getIndexSelectedCategory].isSelected = false
      this.categories[idx].isSelected = true
    },
  },
}
</script>

<style scoped>
.container__home {
  width: 100%;
}

.container__home .container__search__bar {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container__home .container__cards__categories {
  width: 100%;
  margin: 60px 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.container__home .container__cards__restaurant {
  width: 100%;
  height: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
