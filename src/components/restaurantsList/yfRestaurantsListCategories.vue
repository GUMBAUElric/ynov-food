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
import { mapActions } from 'vuex'
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
      idxSelectedCategory: sessionStorage.getItem('indexOfSelectedCategory') || -1,
    }
  },
  computed: {
    /**
     * @computed
     * @desc Check if category is selected
     * @returns {boolean}
     */
    categoryIsSelected() {
      return this.idxSelectedCategory !== -1
    },
  },
  methods: {
    ...mapActions(['updateTerm']),
    /**
     * @computed setSelected
     * @desc This method set category selected
     * @param {number} idx The index of selected category
     * @returns {void}
     */
    setSelected(idx) {
      const { food_name } = this.categories[idx]

      if (this.idxSelectedCategory !== -1)
        this.categories[this.idxSelectedCategory].isSelected = false

      if (this.idxSelectedCategory !== idx.toString()) {
        sessionStorage.setItem('indexOfSelectedCategory', idx)
        this.idxSelectedCategory = sessionStorage.getItem('indexOfSelectedCategory')
        this.categories[idx].isSelected = true
        this.updateTerm(food_name)
      } else {
        sessionStorage.removeItem('indexOfSelectedCategory')
        this.updateTerm('')
      }
    },
  },
  created() {
    if (this.categoryIsSelected) {
      this.categories[this.idxSelectedCategory].isSelected = true
    }
  },
}
</script>

<style scoped>
.categories {
  width: 100%;
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
