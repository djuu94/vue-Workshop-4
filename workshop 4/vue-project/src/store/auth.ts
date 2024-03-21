// store/auth.ts
import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useAuthStore = defineStore('auth', {
  state: () => reactive({
    isLoggedIn: false,
  }),
  actions: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
});