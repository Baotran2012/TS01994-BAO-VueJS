<template>
  <div class="card mb-4 border shadow-none rounded-3 mx-auto" style="max-width: 470px;">
    <div class="card-header bg-white border-0 d-flex align-items-center py-2 px-3">
      <img :src="post.userAvatar" class="rounded-circle border me-2" width="32" height="32" style="object-fit: cover;">
      <span class="fw-bold small">{{ post.username }}</span>
    </div>

    <img :src="post.postImage" class="img-fluid w-100" alt="Post image">

    <div class="card-body p-3">
      <div class="d-flex gap-3 mb-2 fs-4">
        <i class="bi bi-heart"></i>
        <i class="bi bi-chat"></i>
        <i class="bi bi-send"></i>
      </div>
      <p class="fw-bold small mb-1">{{ post.likes }} lượt thích</p>
      <p class="small mb-1">
        <span class="fw-bold">{{ post.username }}</span> {{ post.caption }}
      </p>
    </div>
  </div>
</template>

<script setup>
// ĐỊNH NGHĨA PROPS Ở ĐÂY LÀ HẾT LỖI
const props = defineProps(['post']);
</script>