<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true
    },
    onRemove: {
      type: Function,
      required: true
    },
    onQuantityChange: {
      type: Function,
      required: true
    }
  },

  setup(props) {
    const quantity = ref(1) // состояние количества товара

    const increaseQuantity = () => {
      quantity.value++
      props.onQuantityChange(props.item.id, quantity.value)
    }

    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--
        props.onQuantityChange(props.item.id, quantity.value)
      }
    }

    return { quantity, increaseQuantity, decreaseQuantity }
  }
})
</script>

<template>
  <div class="" style="width: 100%; max-width: 1150px; margin: 0 auto 20px auto">
    <div
      class="relative bg-white border border-slate-100 rounded-3xl p-4 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
      style="max-width: 633px; width: 100%; height: 218px"
    >
      <div class="flex gap-14 h-full justify-between">
        <div class="flex items-center">
          <div class="flex flex-col justify-center items-center">
            <img width="136" :src="item.imageUrl" alt="Sneaker" />
            <div class="flex gap-4 justify-center">
              <div><img @click="decreaseQuantity" src="/public/svg/-.svg" alt="" /></div>
              <div>{{ quantity }}</div>
              <div><img @click="increaseQuantity" src="/public/svg/+.svg" alt="" /></div>
            </div>
          </div>
          <div>
            <div>{{ item.title }}</div>
            <div>{{ item.price }}</div>
          </div>
        </div>

        <div class="flex flex-col justify-between items-center">
          <div class="flex">
            <img @click="onRemove(item.id)" src="/public/svg/unstall.svg" alt="" />
          </div>

          <div>
            <div>{{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
