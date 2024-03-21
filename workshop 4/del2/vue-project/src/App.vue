<template>
  <div id="app">
    <div class="products-wrapper">
      <h1>Product List</h1>
      <div class="product-box" v-for="product in filteredProducts" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>Price: {{ product.price }}</p>
        <button @click="addProductToCart(product)">Add to Cart</button>
      </div>
    </div>
    <h1>Cart</h1>
    <div class="cart-box" v-for="product in cartProducts" :key="product.id">
      <h2>{{ product.name }}</h2>
      <p>Price: {{ product.price }}</p>
      <button @click="removeProductFromCart(product.id)">Remove</button>
    </div>
    <p>Total Price: {{ totalPrice }}</p>
    <h1>Filter Products</h1>
    <input v-model="priceFilter" placeholder="Price filter" type="number">
  </div>
</template>

<style scoped>
.products-wrapper{
  
  display:flex;
}
.product-box, .cart-box {
 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 20px;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
<script lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useProductStore } from './stores/productStore';
import { useCartStore } from './stores/cartStore';

interface Product {
  id: string;
  name: string;
  price: number;
}

export default {
  setup() {
    const productStore = useProductStore();
    const cartStore = useCartStore();
    const newProduct = ref<Product>({ id: '', name: '', price: 0 });
    const priceFilter = ref<number>(0);

    const fetchProducts = async () => {
      const response = await fetch('../public/db.json');
      const data: Product[] = await response.json();
      productStore.setProducts(data);
    };

    const addProduct = () => {
      newProduct.value.id = Date.now().toString();
      productStore.addProduct(newProduct.value);
      newProduct.value = { id: '', name: '', price: 0 };
    };

    const addProductToCart = (product: Product) => {
      cartStore.addProduct(product);
    };

    const removeProductFromCart = (id: string) => {
      cartStore.removeProduct(id);
    };

    const filteredProducts = computed(() => {
      return productStore.products.filter(product => product.price >= priceFilter.value);
    });

    const cartProducts = computed(() => {
      return cartStore.products;
    });

    const totalPrice = computed(() => {
      return cartStore.products.reduce((total, product) => total + product.price, 0);
    });

    onMounted(fetchProducts);

    return {
      products: productStore.products,
      addProduct,
      newProduct,
      addProductToCart,
      removeProductFromCart,
      cartProducts,
      totalPrice,
      priceFilter,
      filteredProducts
    };
  }
  
};

</script>