<template>
  <div class="container-fluid">
    <div class="row">
      <nav class="col-md-3 col-lg-2 d-flex flex-column bg-white border-end vh-100 sticky-top p-3">
        <h2 class="fw-bold mb-5 mt-3 px-3" style="font-family: sans-serif; letter-spacing: -1px;">
          Instagram
        </h2>

        <ul class="nav nav-pills flex-column mb-auto w-100">
          <li class="nav-item mb-2">
            <router-link to="/" class="nav-link text-dark d-flex align-items-center gap-3 py-3 px-3 custom-link">
              <i class="bi bi-house-door-fill fs-4"></i>
              <span class="fs-6">Trang chủ</span>
            </router-link>
          </li>
          <li class="nav-item mb-2">
            <router-link to="/profile" class="nav-link text-dark d-flex align-items-center gap-3 py-3 px-3 custom-link">
              <i class="bi bi-person-circle fs-4"></i>
              <span class="fs-6">Cá nhân</span>
            </router-link>
          </li>
          <li class="nav-item mb-2">
            <router-link to="/login" class="nav-link text-dark d-flex align-items-center gap-3 py-3 px-3 custom-link">
              <i class="bi bi-box-arrow-in-right fs-4"></i>
              <span class="fs-6">Đăng nhập</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <main class="col bg-light min-vh-100">
        <div class="container py-4">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* Xóa các gạch chân mặc định và định dạng link */
.custom-link {
  border-radius: 8px;
  transition: background 0.2s ease;
}

/* Hiệu ứng khi di chuột qua giống Instagram */
.custom-link:hover {
  background-color: #f2f2f2 !important;
}

/* Giữ icon và chữ luôn trên 1 hàng, không cho xuống dòng */
.nav-link {
  white-space: nowrap;
}

/* Làm nổi bật link khi đang ở trang đó */
.router-link-active {
  font-weight: bold;
}
</style>