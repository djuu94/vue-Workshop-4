// router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import LoggedIn from '../components/LoggedIn.vue';
import LoggedOut from '../components/LoggedOut.vue';
import Header from '../components/Header.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/', 
    name: 'Header',
    component: Header,
  },
  {
    path: '/loggedin',
    name: 'Loggedin',
    component: LoggedIn,
    meta: { requiresAuth: true },
  },
  {
    path: '/loggedout',
    name: 'Loggedout',
    component: LoggedOut,
    meta: { requiresAuth: false },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;