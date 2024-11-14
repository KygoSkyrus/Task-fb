import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = !!localStorage.getItem('user');

  if (to.name === 'Dashboard' && !isLoggedIn) {
    next({ name: 'Login' });
  } else if (to.name === 'Login' && isLoggedIn) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
});

export default router;