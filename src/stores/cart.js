import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {

  // use API 

  const cart = ref([
    {
      title: 'Title 1',
      image: 'https://loremflickr.com/140/160',
      count: 1,
      price: 1000,
    },
    {
      title: 'Title 2',
      image: 'https://loremflickr.com/140/160',
      count: 2,
      price: 1000,
    },
    {
      title: 'Title 3',
      image: 'https://loremflickr.com/140/160',
      count: 1,
      price: 304,
    },
    {
      title: 'Title 4',
      image: 'https://loremflickr.com/140/160',
      count: 5,
      price: 123,
    },
    {
      title: 'Title 5',
      image: 'https://loremflickr.com/140/160',
      count: 1,
      price: 100,
    }
  ])

  const total = computed({
    get: () => {
      return cart.value.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0)
    }
  })

  return { cart, total }
})
