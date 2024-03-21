// Remove the duplicate import statement for 'defineStore'
// import { defineStore } from 'pinia';

interface Product {
  id: string;
  name: string;
  price: number;
}

export const useProductStore = defineStore({
id: 'productStore',
state: (): { products: Product[] } => ({
  products: []
}),
actions: {
  setProducts(products: Product[]) {
    this.products = products;
  },
  addProduct(product: Product) {
    this.products.push(product);
  }
}
});

// cartStore.ts
import { defineStore } from 'pinia';

interface Product {
id: string;
name: string;
price: number;
}

export const useCartStore = defineStore({
id: 'cartStore',
state: (): { products: Product[] } => ({
  products: []
}),
actions: {
  addProduct(product: Product) {
    this.products.push(product);
  },
  removeProduct(productId: string) {
    this.products = this.products.filter(product => product.id !== productId);
  }
}
});