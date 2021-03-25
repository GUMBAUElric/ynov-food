<template>
  <div class="d-flex flex-column justify-content-center categories">
    <div class="title">
      <h1>Catégories</h1>
    </div>
    <div class="d-flex flex-wrap justify-content-around align-items-center container">
      <yfRestaurantsListCardCategory
        v-for="(item, idx) in categories"
        :key="idx"
        :category="item"
        @click.native="setSelected(idx)"
      />
    </div>
  </div>
</template>

<script>
/** Import */
import yfRestaurantsListCardCategory from '@/components/restaurantsList/yfRestaurantsListCardCategory.vue'

export default {
  name: 'yfRestaurantsListCategories',
  components: {
    yfRestaurantsListCardCategory,
  },
  data() {
    return {
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
          food_logo: 'muffin.svg',
          isSelected: false,
        },
      ],
    }
  },
  computed: {
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

        console.log(foodName)

        // this.updateTerm(foodName)
      } else {
        // this.updateTerm(food_name)
      }
    },
  },
}
</script>

<style scoped>
.categories {
  width: 100%;
}

.categories .title {
  position: relative;
  margin: 50px;
}

.categories .title::before {
  content: '';
  position: absolute;
  width: 7px;
  height: 7px;
  bottom: 5px;
  border-radius: 50%;
  left: -10px;
  background-color: var(--primary-color);
}

.categories .title h1 {
  font-size: 1.8em;
  font-weight: 300;
}

.categories .container {
  width: 100%;
}

@media screen and (min-width: 1800px) {
  .categories {
    width: 1700px;
  }
}
</style>
