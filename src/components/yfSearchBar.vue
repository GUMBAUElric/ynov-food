<template>
  <v-select
    class="search-bar"
    :options="auto_complete"
    v-model="search"
    @input="$emit('searchValue', { value: search, isTyping: false })"
    @input.native="setAutoComplete"
  >
    <template v-slot:no-options="{ search, searching }">
      <template v-if="searching">
        Aucun résultat pour <em>{{ search }}</em
        >.
      </template>
      <em style="opacity: 0.5;" v-else>Commencer la recherche </em>
    </template>
  </v-select>
</template>

<script>
export default {
  name: 'yfSearchBar',
  data() {
    return {
      search: sessionStorage.getItem(this.keySessionStorage) || '',
      timer: null,
    }
  },
  props: {
    /** Array of auto complete value */
    auto_complete: {
      type: Array,
      default: () => {
        return []
      },
    },
    /** The default value */
    keySessionStorage: {
      type: String,
      default: '',
    },
  },
  methods: {
    /**
     * @function setAtTyping
     * @desc Emit value after 1 second
     */
    setAutoComplete(e) {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.timer = setTimeout(() => {
        const { value } = e.target
        this.$emit('searchValue', { value, typingDelay: true })
        this.search = value
      }, 1000)
    },
  },
}
</script>

<style scoped></style>
