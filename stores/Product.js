import { defineStore } from 'pinia'

export const productStore = defineStore('productStore', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Product A',
        price: 100,
        description: 'Description of Product A',
        imageUrl: 'https://example.com/product-a.jpg'
      },
      {
        id: 2,
        name: 'Product B',
        price: 150,
        description: 'Description of Product B',
        imageUrl: 'https://example.com/product-b.jpg'
      },
      {
        id: 3,
        name: 'Product C',
        price: 200,
        description: 'Description of Product C',
        imageUrl: 'https://example.com/product-c.jpg'
      }
    ]
  }),
  actions: {}
})
