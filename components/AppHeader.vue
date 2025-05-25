<template>
  <div class="h-[60px]">
    <div class="header-desktop flex flex-nowrap justify-between h-full">
      <img
        class="w-40 h-full"
        src="https://mitomo.com.vn/wp-content/uploads/2022/08/logo-new.png"
        alt=""
      >
      <div class="flex flex-nowrap lg:mr-10">
        <Menubar
          :model="menuItems"
          class="header-menu border-none rounded-none h-full menubar-link-responsive order-3 ml-3 lg:order-1 lg:mr-3"
        />
        <i class="pi pi-search flex items-center justify-center text-black w-10 h-10 mt-[10px] text-xl mx-3 order-1 hover:cursor-pointer lg:order-2"></i>
        <OverlayBadge class="header-badge order-2 lg:order-3" value="2" size="small">
          <i class="pi pi-shopping-bag flex items-center justify-center text-black w-10 h-10 mt-[10px] text-xl mx-1 hover:cursor-pointer"></i>
        </OverlayBadge>
      </div>
    </div>
    <div class="header-mobile" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          label: 'GIỚI THIỆU',
          items: [
            {
              label: 'Giới thiệu',
            },
            {
              label: 'Đánh giá',
            },
            {
              label: 'Chứng nhận',
            },
          ],
        },
        {
          label: 'SẢN PHẨM',
          items: [
            {
              label: 'Đồ gia dụng bếp',
              items: [
                {
                  label: 'Máy ép trái cây',
                },
                {
                  label: 'Máy làm sữa hạt - xay sinh tố',
                },
                {
                  label: 'Máy vắt cam',
                },
                {
                  label: 'Ấm đun siêu tốc',
                },
                {
                  label: 'Máy xay thịt',
                },
              ],
            },
            {
              label: 'Đồ dùng nấu bếp',
              items: [
                {
                  label: 'Nồi áp suất',
                },
                {
                  label: 'Bộ dao làm bếp',
                },
                {
                  label: 'Thớt',
                },
                {
                  label: 'Bộ nồi chảo',
                },
                {
                  label: 'Dụng cụ nấu ăn',
                },
              ],
            },
            {
              label: 'Bàn ủi',
              items: [
                {
                  label: 'Bàn ủi hơi nước',
                },
                {
                  label: 'Bàn ủi khô',
                },
              ],
            },
            {
              label: 'Quạt',
              items: [
                {
                  label: 'Quat đứng',
                },
                {
                  label: 'Quạt treo tường',
                },
              ],
            },
            {
              label: 'Bình nước/Hộp cơm giữ nhiệt',
              items: [
                {
                  label: 'Hộp cơm giữ nhiệt',
                },
                {
                  label: 'Bình nước',
                },
              ],
            },
            {
              label: 'Nồi chiên không dầu',
              items: [
                {
                  label: 'Nồi điện tử',
                },
                {
                  label: 'Nồi cơ',
                },
              ],
            },
            {
              label: 'Máy bào đá',
              items: [
                {
                  label: 'Máy bào đá công suất cao',
                },
              ],
            },
            {
              label: 'Đồ mẹ và bé',
              items: [
                {
                  label: 'Máy hâm sữa đơn',
                },
                {
                  label: 'Máy hâm sữa đôi',
                },
                {
                  label: 'Máy hâm sữa tiệt trùng',
                },
                {
                  label: 'Máy sấy khô tiệt trùng',
                },
              ],
            },
          ],
        },
        {
          label: 'CHÍNH SÁCH BẢO HÀNH',
          items: [
            {
              label: 'Nhà phân phối',
            },
            {
              label: 'Đại lý',
            },
            {
              label: 'Cộng tác viên',
            },
          ],
        },
        {
          label: 'ĐẠI LÝ',
          items: [
            {
              label: 'Đăng ký bảo hành',
            },
            {
              label: 'Trung tâm bảo hành',
            },
            {
              label: 'Chính sách bảo hành',
            },
          ],
        },
        {
          label: 'LIÊN HỆ',
        },
      ],
    }
  },
}
</script>

<style>
@media screen and (min-width: 1100px) {
  .header-menu
    > .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: 15px !important;
  }
}
.header-badge > .p-badge-circle {
  color: black;
  font-size: 1em;
  transform: translate(-5%, 45%) !important;
}
/* @media (min-width: 430px) and (max-width: 767px) { */
@media (min-width: 430px) and (max-width: 1023px) {
  .menubar-link-responsive.p-menubar-mobile .p-menubar-root-list {
    width: 100vw !important;
    left: calc(-100vw + 100%) !important;
  }
}
</style>
<!-- .menubar-link-responsive .p-menubar-submenu {
  width: 100vw !important;
  left: calc(-100vw + 100%) !important;
} -->
