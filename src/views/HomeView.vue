<script>
import CardList from '@/components/CardList.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    CardList
  }
})
</script>

<template>
  <div
    class="basket lok rounded-xl mt-14"
    style="width: 100%; max-width: 1150px; margin: 0 auto 20px auto; padding: 0px 20px"
  >
    <CardList />
  </div>
</template>
