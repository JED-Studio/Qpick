<script lang="ts">
import { defineComponent, inject } from 'vue'

export default defineComponent({
  props: {
    id: Number,
    title: String,
    imageUrl: String,
    price: Number
  },

  setup(props) {
    const addToBasket = inject('addToBasket') as (item: {
      id: number
      title: string
      imageUrl: string
      price: number
    }) => void

    const handleAddToBasket = () => {
      if (addToBasket) {
        addToBasket({
          id: props.id!,
          title: props.title!,
          imageUrl: props.imageUrl!,
          price: props.price!
        })
      }
    }
    return { handleAddToBasket }
  }
})
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
    style="width: 350px; height: 407px"
  >
    <div class="flex flex-col h-full">
      <div class="flex justify-center">
        <img :src="imageUrl" alt="Sneaker" />
      </div>
      <div class="flex justify-between mt-auto">
        <div class="flex flex-col gap-7">
          <span class="text-slate-950" style="font-size: 17px; font-weight: 600">{{ title }}</span>
          <div class="flex">
            <img src="/public/image/Vector.png" alt="" />
            4.9
          </div>
        </div>

        <div class="flex flex-col gap-7">
          <div>
            <div style="font-size: 17px; font-weight: 600; color: #ffa542">{{ price }}</div>
          </div>
          <div style="font-size: 17px; font-weight: 600" @click="handleAddToBasket">Купить</div>
        </div>
      </div>
    </div>
  </div>
</template>
