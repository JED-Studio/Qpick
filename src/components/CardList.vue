<script lang="ts">
import { defineComponent, ref } from 'vue'
import Card from './Card.vue'

export default defineComponent({
  components: {
    Card
  },

  setup() {
    const items = ref([
      {
        id: 1,
        title: 'peta',
        price: 100,
        imageUrl: 'https://picsum.photos/200/300'
      },
      {
        id: 2,
        title: 'peta',
        price: 100,
        imageUrl: 'https://picsum.photos/200/300'
      },
      {
        id: 3,
        title: 'peta',
        price: 100,
        imageUrl: 'https://picsum.photos/200/300'
      },
      {
        id: 4,
        title: 'peta',
        price: 100,
        imageUrl: 'https://picsum.photos/200/300'
      },
      {
        id: 5,
        title: 'peta',
        price: 100,
        imageUrl: 'https://picsum.photos/200/300'
      }
    ])

    return { items }
  }
})
</script>

<template>
  <div class="flex flex-wrap justify-center gap-8">
    <card v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>
