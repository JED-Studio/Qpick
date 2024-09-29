<script>
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
        title: 'Apple BYZ S852I',
        price: 2500,
        imageUrl: new URL('@/assets/Image (1).png', import.meta.url).href
      },
      {
        id: 2,
        title: 'Apple EarPods',
        price: 1300,
        imageUrl: new URL('@/assets/Image (2).png', import.meta.url).href
      },
      {
        id: 3,
        title: 'Apple EarPods',
        price: 400,
        imageUrl: new URL('@/assets/Image (3).png', import.meta.url).href
      },
      {
        id: 4,
        title: 'Apple BYZ S852I',
        price: 5000,
        imageUrl: new URL('@/assets/Image (4).png', import.meta.url).href
      },
      {
        id: 5,
        title: 'Apple EarPods',
        price: 3333,
        imageUrl: new URL('@/assets/Image (5).png', import.meta.url).href
      },
      {
        id: 6,
        title: 'Apple EarPods',
        price: 21342,
        imageUrl: new URL('@/assets/Image (6).png', import.meta.url).href
      }
    ])

    const items1 = ref([
      {
        id: 1,
        title: 'peta',
        price: 1434,
        imageUrl: new URL('@/assets/Image (1).png', import.meta.url).href
      },
      {
        id: 2,
        title: 'peta',
        price: 103,
        imageUrl: new URL('@/assets/Image (2).png', import.meta.url).href
      },
      {
        id: 3,
        title: 'peta',
        price: 1002,
        imageUrl: new URL('@/assets/Image (3).png', import.meta.url).href
      },
      {
        id: 4,
        title: 'peta',
        price: 1090,
        imageUrl: new URL('@/assets/Image (4).png', import.meta.url).href
      },
      {
        id: 5,
        title: 'peta',
        price: 100,
        imageUrl: new URL('@/assets/Image (5).png', import.meta.url).href
      },
      {
        id: 6,
        title: 'peta',
        price: 100,
        imageUrl: new URL('@/assets/Image (6).png', import.meta.url).href
      }
    ])

    return { items, items1 }
  }
})
</script>

<template>
  <div style="width: 100%; max-width: 1150px; margin: 0 auto; padding: 20px 20px">Наушники</div>
  <div class="flex flex-wrap justify-center" style="gap: 30px">
    <card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
    />
    <div style="width: 100%; max-width: 1150px; margin: 0 auto; padding: 20px 20px">
      Беспроводные наушники
    </div>
    <card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :price="item.price"
    />
  </div>
</template>
