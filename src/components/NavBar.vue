<script setup lang="ts">
import { useProductStore } from '~/stores/productStore'

const productStore = useProductStore()
</script>

<template>
  <div grid grid-cols-2>
    <Search />
    <!-- icono de carrito de compras -->
    <div>
      <div i-twemoji-shopping-cart inline-block absolute h-10 w-10 @click="productStore.goPage('cart')" />
      <span badge relative ml-7>{{ productStore.cartProducts.length }}</span>
    </div>
  </div>
</template>
