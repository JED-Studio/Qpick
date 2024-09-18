<script lang="ts">
import { defineComponent, ref } from 'vue'
import Basket from '@/components/Basket.vue'

export default defineComponent({
  components: {
    Basket
  }
})
</script>

<template>
  <div style="width: 100%; max-width: 1150px; margin: 0 auto; padding: 20px 20px">Корзина</div>
  <div
    class="flex justify-between"
    style="width: 100%; max-width: 1150px; margin: 0 auto; padding: 20px 20px"
  >
    <div style="max-width: 633px; width: 100%">
      <Basket />
    </div>
    <div
      class="relative bg-white border border-slate-100 rounded-3xl cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
      style="width: 350px; height: 120px"
    >
      <div class="flex flex-col justify-between" style="height: 100%">
        <div class="flex justify-between" style="padding: 21px 21px 15px 21px">
          <div>ИТОГО</div>
          <div>Р 2927</div>
        </div>
        <div class="flex justify-center p-5 bg-black text-white" style="border-radius: 20px">
          Перейти к оформлению
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
