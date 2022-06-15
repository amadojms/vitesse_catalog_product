<script setup lang="ts">
// import type { Product } from '~/models/Product'
// import products_json from '~/assets/products.json'
import { useProductStore } from '~/stores/productStore'
const productStore = useProductStore()
</script>

<template mx-auto>
  <div class="grid grid-cols-3 justify-items-stretch gap-5">
    <template v-for="(p, i) in productStore.productsFiltered" :key="i">
      <card-product :product="p" />
    </template>
  </div>
</template>
