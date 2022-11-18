import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Product } from '~/models/Product'
import products_json from '~/assets/products.json'

export const useProductStore = defineStore('products', () => {
  const router = useRouter()

  const filterProduct = ref('')
  const products = ref(new Array<Product>())
  const productSelected = ref<Product>()
  const cartProducts = ref(new Array<Product>())

  // TODO: llamar servicio de los productos
  products.value = products_json
  const productsFiltered = computed(() => products.value.filter(product => product.name.toLowerCase().includes(filterProduct.value)))

  function addProduct(product: Product) {
    cartProducts.value.push(product)
  }

  function goPage(route: any) {
    console.log(route)
    if (route)
      router.push(`/${encodeURIComponent(route)}`)
  }

  return {
    filterProduct,
    productsFiltered,
    cartProducts,
    addProduct,
    goPage,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
