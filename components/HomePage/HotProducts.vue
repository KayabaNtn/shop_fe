<template>
  <h1 class="w-full mx-auto my-5 text-2xl text-center underline">Sản phẩm nổi bật</h1>
  <div class="grid grid-cols-2 gap-5 p-2">
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product"></ProductCard>
    </div>
  </div>
</template>

<script>
import ProductCard from "../Card/ProductCard.vue";
export default {
  components: { ProductCard },
  name: "HotProducts",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Ấm Đun Siêu Tốc Thủy Tinh Mitomo ST-220 1.8L, 1800W",
          price: "100000",
          saleOff: "10",
          img: "https://mitomo.com.vn/wp-content/uploads/2023/04/am-sieu-toc16-300x300.jpg",
          thumbnail:
            "https://mitomo.com.vn/wp-content/uploads/2023/04/am-sieu-toc.png"
        },
        {
          id: 2,
          name: "Máy Vắt Cam Mitomo VC-55 Pro Handle Citrus Juicer Viền Đen",
          price: "2100000",
          saleOff: "15",
          img: "https://mitomo.com.vn/wp-content/uploads/2021/12/may-vat-cam-1-300x300.png",
          thumbnail:
            "https://mitomo.com.vn/wp-content/uploads/2021/12/may-vat-cam-vc-55.png"
        },
        {
          id: 3,
          name: "Máy Ép Trái Cây Chậm Mitomo EC – 55 Màu Trắng, Công suất 200W",
          price: "1200000",
          saleOff: "45",
          img: "https://mitomo.com.vn/wp-content/uploads/2021/12/2.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2021/12/7-11.png"
        },
        {
          id: 4,
          name: "Ấm đun nước siêu tốc 3 lớp cao cấp Mitomo ST-631 1.7L, 1800W",
          price: "340000",
          saleOff: "15",
          img: "https://mitomo.com.vn/wp-content/uploads/2022/09/14-2-300x300.png",
          thumbnail:
            "https://mitomo.com.vn/wp-content/uploads/2022/09/am-inox-2-lop-mitomo-bia-logo.png"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
