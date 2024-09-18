<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Footer
  }
})
</script>

<template>
  <div class="page" style="display: flex; flex-direction: column; min-height: 100vh">
    <div
      class="flex justify-between items-center pt-4"
      style="width: 100%; max-width: 1150px; margin: 0 auto; padding: 20px 20px"
    >
      <RouterLink to="/"> <h1>Qpick</h1></RouterLink>

      <div class="flex gap-11 items-center">
        <RouterLink to="/favorites"><img src="/public/svg/Vector (1).svg" alt="" /></RouterLink>
        <RouterLink to="/basket"><img src="/public/svg/Vector.svg" alt="" /></RouterLink>
      </div>
    </div>

    <RouterView />
  </div>
  <Footer />
</template>

<style scoped></style>
