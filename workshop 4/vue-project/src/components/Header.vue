<template>
  <header>
    <h1>Header</h1>
    <button @click="toggleAuthentication">
      {{ isLoggedIn ? 'Logout' : 'Login' }}
    </button>
  </header>
</template>

<script setup>
import { useAuthStore } from '../store/auth';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(useAuthStore().isLoggedIn);
const router = useRouter();

watch(() => useAuthStore().isLoggedIn, (newValue) => {
  isLoggedIn.value = newValue;
});

const toggleAuthentication = () => {
  if (isLoggedIn.value) {
    useAuthStore().logout();
    console.log('logged out');
  } else {
    useAuthStore().login();
    console.log('logged in');
  }

  // Redirect to the appropriate route after login/logout
  const routePath = isLoggedIn.value ? '/loggedin' : '/loggedout';
  router.push(routePath);
};
</script>

<style scoped>
/* Add your header styles here */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
  width: 100%;
}

button {
  cursor: pointer;
  padding: 0.5rem;
}
h1 {
  color: black;
}
</style>