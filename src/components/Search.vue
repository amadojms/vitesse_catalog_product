<script setup lang="ts">
import { useProductStore } from '~/stores/products'

const productStore = useProductStore()
</script>

<template>
  <div mx-auto>
    <input v-model="productStore.filterProduct" type="text" btn placeholder="Buscar producto">
  </div>
</template>
