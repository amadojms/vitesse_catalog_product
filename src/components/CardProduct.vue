<script setup lang="ts">
import type { Product } from '~/models/Product';
const props = defineProps<{
  product: Product
}>()
</script>

<template>
  <div pt-10 bg-blend-color mt-5 bg-green-500 hover:bg-green-700 border-radius-10>
    <v-card>{{product.name}}</v-card>
    
  </div>
</template>