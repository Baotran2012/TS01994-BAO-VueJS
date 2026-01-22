import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Giả lập kiểm tra đăng nhập (Authentication Guard)
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('user'); 
  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;