<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
    imageUrl: String,
    price: Number
  }
})
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
    style="width: 350px; height: 407px"
  >
    <img class="absolute top-3 left-8" />

    <img :src="imageUrl" alt="Sneaker" />
    <p class="mt-2">{{ title }}</p>

    <div class="flex justify-between mt-5">
      <div class="flex flex-col">
        <span class="text-slate-400">Цена:{{ price }}</span>
        <b>lol</b>
      </div>

      <img alt="Plus" />
    </div>
  </div>
</template>
