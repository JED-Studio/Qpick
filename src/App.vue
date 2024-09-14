<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import CardList from './components/CardList.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    CardList
  }
})
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>

  <RouterView />
  <div class="lok w-4/5 m-auto rounded-xl mt-14">
    <CardList />
  </div>
</template>

<style scoped></style>
