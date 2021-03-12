<template>
  <div class="container__search__bar">
    <div class="search_bar">
      <input type="text" placeholder="Search food, restaurant, ..." />
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yfSearchBar',
}
</script>

<style scoped>
.container__search__bar {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container__search__bar .search_bar {
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  background-color: #fdbe0c;
}

.container__search__bar .search_bar input {
  height: 100%;
  width: 160px;
  margin: 10px 10px;
  border-color: transparent;
  background-color: transparent;
  color: var(--text-color);
}

.container__search__bar .search_bar i {
  margin-right: 20px;
  margin-left: 10px;
  color: var(--text-color);
}
</style>
