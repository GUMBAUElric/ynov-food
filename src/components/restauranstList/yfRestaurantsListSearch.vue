<template>
  <div class="search_bar">
    <v-select
      class="style-chooser"
      :options="auto_complete"
      v-model="search"
      @input="setSearch"
      @keyup.enter.native="setSearch"
      @input.native="setAutoComplete"
    >
      <template v-slot:no-options="{ search, searching }">
        <template v-if="searching">
          No results found for <em>{{ search }}</em
          >.
        </template>
        <em style="opacity: 0.5;" v-else>Start typing </em>
      </template>
    </v-select>
  </div>
</template>

<script>
/** Import */
import { mapActions, mapState } from 'vuex'

export default {
  name: 'yfRestaurantsListSearch',
  data() {
    return {
      search: '',
      timer: null,
    }
  },
  watch: {
    search(newValue) {
      if (newValue === '' || newValue === null) this.resetSearching()
    },
  },
  computed: {
    ...mapState(['auto_complete']),
  },
  methods: {
    ...mapActions(['fetchAutoComplete', 'resetSearching', 'updateTerm']),
    /**
     * @function setAtTyping
     * @desc Set autocomplete when typing
     * @returns {void}
     */
    setAutoComplete(e) {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }

      this.timer = setTimeout(() => {
        const { value } = e.target
        this.search = value
        if (this.search !== '') this.fetchAutoComplete(this.search)
      }, 1000)
    },
    /**
     * @function setAtClick
     * @desc Set autocomplete when click on suggestion
     * @returns {void}
     */
    setSearch(value) {
      this.search = value
      if (this.search !== '') this.updateTerm(this.search)
    },
  },
}
</script>

<style scoped>
.search_bar {
  height: 40px;
  margin: 40px 60px 0 60px;
  display: flex;
  align-items: center;
}
</style>
