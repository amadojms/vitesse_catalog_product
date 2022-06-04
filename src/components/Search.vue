<script setup lang="ts">
import type { Product } from '~/models/Product'
// import type { CardProduct } from '~/components/CardProduct.vue';
import products_json from '~/assets/products.json'

const props = defineProps<{
  products?: Product
}>()

// const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <!-- codigo chido -->
  <div mx-auto>
    <input type="text" btn placeholder="Buscar producto">
  </div>
</template>
