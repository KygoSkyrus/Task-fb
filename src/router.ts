import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';
import { useUserStore } from './store';

const routes = [
  { path: '/', name: 'Login', component: Login },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      const userStore = useUserStore();
      if (!userStore.user) next('/');
      else next();
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
