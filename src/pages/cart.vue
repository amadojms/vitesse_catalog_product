<script setup lang="ts">
import { useProductStore } from '~/stores/productStore'
import type { product } from '~/models/Product'
const productStore = useProductStore()
</script>

<template>
  <div text-left>
    <div i-twemoji-shopping-cart inline-block h-10 w-10 @click="productStore.goPage('cart')" />
    <div text-4xl font-bold font-sans pl-3 pb-3 inline-block>
      Carrito de compras
    </div>
  </div>
  <div flex flex-row>
    <div class="basis-2/3">
      <div v-for="(product, index) in productStore.cartProducts" :key="index" grid grid-cols-4 border-t border-gray200 pt-2 pb-2>
        <div>
          <img class="w-20 h-20 object-cover bg-gray-200 rounded border-indigo-500" :src="product.image">
        </div>
        <div>
          {{ product.name }}
        </div>
        <div>
          <input type="text" btn>
        </div>
        <div>
          <div i-carbon-trash-can inline-block h- w-7 @click="productStore.goPage('cart')" />
        </div>
      </div>
    </div>
    <div flex-1 bg-gray-200 class="basis-1/3">
      checkout
    </div>
  </div>
</template>
