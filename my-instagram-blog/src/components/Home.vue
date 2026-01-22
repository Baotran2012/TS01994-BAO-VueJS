<template>
  <div class="home-feed pt-3">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
    
    <div class="text-center py-5 text-muted">
      <i class="bi bi-check-circle fs-1"></i>
      <p>Bạn đã xem hết tất cả bài viết.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PostCard from '../components/PostCard.vue';

// Dữ liệu mẫu (Mock Data) để hiển thị giao diện
const posts = ref([
  {
    id: 1,
    username: 'vuejs_fan',
    userAvatar: 'https://i.pravatar.cc/150?u=1',
    postImage: 'https://picsum.photos/600/600?random=11',
    likes: '1,250',
    caption: 'Học VueJS thật thú vị! 🚀 #vuejs #bootstrap #coding',
    time: '2 GIỜ TRƯỚC',
    comments: [
      { user: 'dev_master', text: 'Giao diện đẹp quá bạn ơi!' },
      { user: 'design_lover', text: 'Nhìn rất giống Instagram thật.' }
    ]
  },
  {
    id: 2,
    username: 'bootstrap_pro',
    userAvatar: 'https://i.pravatar.cc/150?u=2',
    postImage: 'https://picsum.photos/600/600?random=12',
    likes: '856',
    caption: 'Kết hợp Bootstrap 5 giúp layout nhanh hơn bao giờ hết.',
    time: '5 GIỜ TRƯỚC',
    comments: [
      { user: 'user_99', text: 'Đúng vậy, rất tiện lợi.' }
    ]
  }
]);
</script>