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
        price: 100,
        imageUrl: 'public/image/Image (1).png'
      },
      {
        id: 2,
        title: 'Apple EarPods',
        price: 100,
        imageUrl: 'public/image/Image (2).png'
      },
      {
        id: 3,
        title: 'Apple EarPods',
        price: 100,
        imageUrl: 'public/image/Image (3).png'
      },
      {
        id: 4,
        title: 'Apple BYZ S852I',
        price: 100,
        imageUrl: 'public/image/Image (4).png'
      },
      {
        id: 5,
        title: 'Apple EarPods',
        price: 100,
        imageUrl: 'public/image/Image (5).png'
      },
      {
        id: 6,
        title: 'Apple EarPods',
        price: 100,
        imageUrl: 'public/image/Image (6).png'
      }
    ])

    const items1 = ref([
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
