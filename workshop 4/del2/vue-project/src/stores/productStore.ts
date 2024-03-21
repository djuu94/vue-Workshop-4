import { defineStore } from 'pinia';

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
    },
    removeProduct(productId: string) {
      const index = this.products.findIndex((product: Product) => product.id === productId);
      if (index !== -1) this.products.splice(index, 1);
    }
  }
});