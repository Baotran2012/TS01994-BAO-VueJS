<template>
  <div class="profile-header d-flex align-items-center mb-5">
    <img src="https://via.placeholder.com/150" class="rounded-circle me-5" width="150" height="150">
    <div>
      <div class="d-flex align-items-center gap-3 mb-3">
        <h4 class="mb-0">nguoidung_123</h4>
        <button class="btn btn-light border btn-sm fw-bold">Chỉnh sửa trang cá nhân</button>
      </div>
      <div class="d-flex gap-4">
        <span><strong>10</strong> bài viết</span>
        <span><strong>150</strong> người theo dõi</span>
      </div>
    </div>
  </div>

  <hr>

  <div class="row g-2">
    <div v-for="n in 9" :key="n" class="col-4">
      <div class="ratio ratio-1x1 border">
        <img :src="'https://picsum.photos/300/300?random=' + n" class="img-fluid object-fit-cover">
      </div>
    </div>
  </div>
</template>