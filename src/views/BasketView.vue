<script lang="ts">
import { defineComponent, inject, ref, computed } from 'vue'
import Basket from '@/components/Basket.vue'

export default defineComponent({
  components: {
    Basket
  },

  setup() {
    const basket = inject('basket') as {
      id: number
      title: string
      imageUrl: string
      price: number
    }[]

    const quantities = ref<{ [key: number]: number }>({}) // Хранит количество для каждого товара
    const handleQuantityChange = (id: number, newQuantity: number) => {
      quantities.value[id] = newQuantity
    }

    const removeFromBasket = inject('removeFromBasket') as (id: number) => void
    const handleRemove = (id: number) => {
      if (removeFromBasket) {
        removeFromBasket(id)
      }
    }

    const totalPrice = computed(() => {
      return basket.reduce((sum, item) => {
        const quantity = quantities.value[item.id] || 1
        return sum + item.price * quantity
      }, 0)
    })

    return { basket, handleRemove, handleQuantityChange, totalPrice }
  }
})
</script>

<template>
  <div style="width: 100%; max-width: 1150px; margin: 0 auto; padding: 20px 20px">Корзина</div>
  <div
    class="flex justify-between"
    style="width: 100%; max-width: 1150px; margin: 0 auto; padding: 20px 20px"
  >
    <div v-if="basket.length" style="max-width: 633px; width: 100%">
      <div v-for="item in basket" :key="item.id">
        <Basket :item="item" :on-remove="handleRemove" :on-quantity-change="handleQuantityChange" />
      </div>
    </div>
    <div v-else>Корзина пуста</div>
    <div
      class="relative bg-white border border-slate-100 rounded-3xl cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
      style="width: 350px; height: 120px"
    >
      <div class="flex flex-col justify-between" style="height: 100%">
        <div class="flex justify-between" style="padding: 21px 21px 15px 21px">
          <div>ИТОГО</div>
          <div>Р {{ totalPrice }}</div>
        </div>
        <div class="flex justify-center p-5 bg-black text-white" style="border-radius: 20px">
          Перейти к оформлению
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
