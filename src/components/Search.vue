<script setup lang="ts">
import { useProductStore } from '~/stores/productStore'

const productStore = useProductStore()
</script>

<template>
  <div>
    <input v-model="productStore.filterProduct" type="text" btn placeholder="Buscar producto aloe">
  </div>
</template>
