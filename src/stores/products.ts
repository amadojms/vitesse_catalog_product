import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Product } from '~/models/Product'
import products_json from '~/assets/products.json'

export const useProductStore = defineStore('products', () => {
  const filterProduct = ref('')
  const products = ref(new Array<Product>())

  // TODO: llamar servicio de los productos
  products.value = products_json
  const productsFiltered = computed(() => products.value.filter(product => product.name.toLowerCase().includes(filterProduct.value)))

  return {
    filterProduct,
    productsFiltered,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
