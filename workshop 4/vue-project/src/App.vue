<template>
  <div id="app">
    <Header></Header>
    <div>
      <router-view v-if="isLoggedIn" name="loggedin">
        <LoggedIn></LoggedIn>
      </router-view>

      <router-view v-else name="loggedout">
        <LoggedOut></LoggedOut>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useAuthStore } from './store/auth';
import LoggedIn from './components/LoggedIn.vue';
import LoggedOut from './components/LoggedOut.vue';
import Header from './components/Header.vue';

const isLoggedIn = ref(useAuthStore().isLoggedIn);

watch(() => useAuthStore().isLoggedIn, (newValue) => {
  isLoggedIn.value = newValue;
});
</script>