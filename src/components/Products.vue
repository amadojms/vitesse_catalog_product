
<script setup lang="ts">
import type { Product } from '~/models/Product';
// import type { CardProduct } from '~/components/CardProduct.vue';
import products_json from '~/assets/products.json';

const props = defineProps<{
  products?: Product,
}>()

// const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div class="">
    <template v-for="(p, i) in products_json" :key="i">
      <card-product :product="p"></card-product>
    </template>
  </div>
</template>