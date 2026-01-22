<template>
  <div class="card mb-4 border-0 border-bottom rounded-0">
    <div class="d-flex align-items-center p-2">
      <img src="https://picsum.photos/50/50" class="rounded-circle border me-2" width="32" height="32">
      <span class="fw-bold small">username_app</span>
      <span class="text-muted ms-2 small">• 1 giờ</span>
    </div>

    <div class="bg-light">
      <img src="https://picsum.photos/600/600" class="img-fluid w-100 shadow-sm" alt="Post content">
    </div>

    <div class="p-3">
      <div class="d-flex gap-3 mb-2 fs-4">
        <i class="bi bi-heart hover-opacity cursor-pointer"></i>
        <i class="bi bi-chat hover-opacity cursor-pointer"></i>
        <i class="bi bi-send hover-opacity cursor-pointer"></i>
      </div>
      
      <p class="fw-bold small mb-1">1.234 lượt thích</p>
      
      <p class="small mb-1">
        <span class="fw-bold">username_app</span> Đây là nội dung bài viết mẫu trên giao diện Instagram được xây dựng bằng VueJS và Bootstrap 5...
      </p>
      
      <p class="text-muted small cursor-pointer">Xem tất cả 50 bình luận</p>
      
      <input type="text" class="form-control form-control-sm border-0 p-0 shadow-none" placeholder="Thêm bình luận...">
    </div>
  </div>
</template>

<style scoped>
.cursor-pointer { cursor: pointer; }
.hover-opacity:hover { opacity: 0.6; }
</style>