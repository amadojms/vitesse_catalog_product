<script setup lang="ts">
import type { Product } from '~/models/Product'
import { useProductStore } from '~/stores/productStore'
const props = defineProps<{
  product: Product
}>()
const productStore = useProductStore()
</script>

<template>
  <div class="max-w-md py-4 px-8 bg-green-200 shadow-lg rounded-lg my-10">
    <div class="flex justify-center md:justify-end -mt-16">
      <img class="w-40 h-40 object-cover rounded-full border-2 border-indigo-500" :src="product.image">
    </div>
    <div>
      <h2 class="text-gray-800 text-3xl font-semibold">
        {{ product.name }}
      </h2>
      <p class="mt-2 text-gray-600">
        {{ product.description }}
      </p>
    </div>
    <div class="flex justify-end mt-4">
      <a href="#" class="text-xl font-medium text-indigo-500" @click="productStore.addProduct(product)">Agregar</a>
    </div>
    <div class="flex justify-end mt-4">
      <a href="#" class="text-xl font-medium text-indigo-500" @click="productStore.addProduct(product)">Agregar</a>
    </div>
  </div>
</template>
