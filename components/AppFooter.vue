<template>
  <div class="p-4">
    <img src="https://mitomo.com.vn/wp-content/uploads/2017/07/banner-footer-1.jpg?id=13179" alt="">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <!-- COT 1 -->
      <div>
        <h1 class="pt-3"><strong>Liên hệ</strong></h1>
        <hr class="border-t-2 border-green-500 mb-4 w-[20%]">
        <p><strong> Công ty TNHH NhatNT </strong></p>
        <p>MST: 3101113968</p>
        <p>Giấy phép ĐKKD số: 3101113968</p>
        
        <h1 class="pt-3"><strong>Trụ sở văn phòng</strong></h1>
        <hr class="border-t-2 border-green-500 mb-4 w-[20%] pt-1">
        <div class="flex items-top" v-for="address in addresses" :key="address">
          <i class="pi pi-map-marker p-1 text-green-500"></i>
          <p> {{ address }} </p>
        </div>
        
        <div class="flex items-top pt-1">
          <i class="pi pi-phone p-1 text-green-500"></i>
          <p> 19001000 </p>
        </div>
        <div class="flex items-top pt-1">
          <i class="pi pi-mobile p-1 text-green-500"></i>
          <p>0999888777</p>
        </div>
        <div class="flex items-top pt-1">
          <i class="pi pi-facebook p-1 text-green-500"></i>
          <p>google.com</p>
        </div>
        <div class="flex items-top pt-1">
          <i class="pi pi-youtube p-1 text-green-500"></i>
          <p>google.com</p>
        </div>
        <div class="flex items-top pt-1">
          <i class="pi pi-envelope p-1 text-green-500"></i>
          <p>google.com</p>
        </div>
        
        <h1 class="pt-3"><strong>Chính sách khách hàng</strong></h1>
        <hr class="border-t-2 border-green-500 mb-4 w-[20%] pt-1">
        <p class="pt-1">Chính sách bảo mật thông tin</p>
        <p class="pt-1">Chính sách giao nhận hàng</p>
        <p class="pt-1">Chính sách đổi trả</p>
        <p class="pt-1">Chính sách thanh toán</p>
      </div>
      
      <!-- COT 2 -->
      <div>
        <h1 class="pt-3"><strong>Liên kết nhanh</strong></h1>
        <hr class="border-t-2 border-green-500 mb-4 w-[20%] pt-1">
        <p class="pt-1">Trang chủ</p>
        <p class="pt-1">Giới thiệu</p>
        <p class="pt-1">Sản phẩm</p>
        <p class="pt-1">Tin tức</p>
        <p class="pt-1">Liên hệ</p>
        
        <h1 class="pt-3"><strong>Hỗ trợ khách hàng</strong></h1>
        <hr class="border-t-2 border-green-500 mb-4 w-[20%] pt-1">
        <p class="pt-1">Đăng ký bảo hành</p>
        <p class="pt-1">Trung tâm bảo hành</p>
        <p class="pt-1">Chính sách bảo hành</p>
        <p class="pt-1">Chính sách giao nhận hàng</p>
        <p class="pt-1">Chính sách thanh toán</p>
        <p class="pt-1">Chính sách đổi trả</p>
        <p class="pt-1">Chính sách bảo mật thông tin</p>
        <p class="pt-1">Chính sách kiểm tra hàng</p>
      </div>
      
      <!-- COT 3 -->
      <div>
        <img src="https://mitomo.com.vn/wp-content/uploads/2022/08/logo_mitomo-1-e1660232504790-400x91.png" alt="" class="pt-1">
        <p class="pt-1">MITOMO – Trao giá trị thực Chuyên cung cấp các thiết bị điện tử, điện lạnh & gia dụng nhà bếp thông minh!</p>
        <img src="https://mitomo.com.vn/wp-content/uploads/2023/04/logoSaleNoti.png" alt="" class="pt-1">
        <p class="pt-1">MITOMO – Trao giá trị thực Chuyên cung cấp các thiết bị, dụng cụ nhà bếp thông minh!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      // You can add any data properties here if needed
      addresses: [
        'Đường số 1, KCN Việt Hương, Thuận An, Bình Dương',
        'Đường số 2, KCN Việt Hương, Thuận An, Bình Dương',
        'Đường số 3, KCN Việt Hương, Thuận An, Bình Dương'
      ]
    };
  },
  methods: {
    // You can add any methods here if needed
  }
}
</script>

<style scoped>

</style>
