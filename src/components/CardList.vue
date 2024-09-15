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
        imageUrl: 'public/image/Image (1).png'
      },
      {
        id: 2,
        title: 'peta',
        price: 100,
        imageUrl: 'public/image/Image (2).png'
      },
      {
        id: 3,
        title: 'peta',
        price: 100,
        imageUrl: 'public/image/Image (3).png'
      },
      {
        id: 4,
        title: 'peta',
        price: 100,
        imageUrl: 'public/image/Image (4).png'
      },
      {
        id: 5,
        title: 'peta',
        price: 100,
        imageUrl: 'public/image/Image (5).png'
      },
      {
        id: 6,
        title: 'peta',
        price: 100,
        imageUrl: 'public/image/Image (6).png'
      }
    ])

    return { items }
  }
})
</script>

<template>
  <div class="flex flex-wrap justify-center gap-8">
    <card
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
    />
  </div>
</template>
