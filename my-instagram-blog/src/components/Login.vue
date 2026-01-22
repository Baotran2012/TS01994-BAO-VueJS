<template>
  <div class="card p-4 shadow-sm border text-center">
    <h2 class="fw-bold mb-4">Instagram</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" class="form-control mb-2 bg-light" placeholder="Email">
      <input v-model="password" type="password" class="form-control mb-3 bg-light" placeholder="Mật khẩu">
      <button class="btn btn-primary w-100 fw-bold" type="submit">Đăng nhập</button>
    </form>
    <div class="mt-4 text-muted">
      Bạn chưa có tài khoản? <a href="#" class="text-primary text-decoration-none fw-bold">Đăng ký</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
  if (email.value && password.value) {
    localStorage.setItem('user', JSON.stringify({ email: email.value }));
    router.push('/');
  }
};
</script>