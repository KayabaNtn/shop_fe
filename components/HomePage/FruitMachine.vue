<template>
  <h1 class="w-full mx-auto my-5 text-2xl text-center underline">Máy ép trái cây</h1>
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
  name: "FruitMachine",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Máy Ép Trái Cây Chậm Mitomo Mitomo KJ3081 – Công suất mạnh mẽ – Kiệt bã tới 98%",
          price: "4200000",
          saleOff: "46",
          img: "https://mitomo.com.vn/wp-content/uploads/2025/06/may-ep-cham-mitomo-kj-3081-7.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2025/06/may-ep-cham-mitomo-kj-3081.png"
        },
        {
          id: 2,
          name: "Máy Ép Trái Cây Nhanh Công Suất Cao Mitomo KJ-3057",
          price: "2295000",
          saleOff: "22",
          img: "https://mitomo.com.vn/wp-content/uploads/2023/11/may-ep-nhanh-300x300.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2023/10/50.png"
        },
        {
          id: 3,
          name: "Máy Ép Trái Cây Chậm Mitomo EC – 55 Màu Trắng, Công suất 200W",
          price: "1882000",
          saleOff: "47",
          img: "https://mitomo.com.vn/wp-content/uploads/2023/11/may-ep-cham-trang-300x300.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2021/12/10-3.png"
        },
        {
          id: 4,
          name: "Máy Ép Trái Cây Chậm Mitomo EC – 55 Màu Đen, Công suất 200W",
          price: "1882000",
          saleOff: "47",
          img: "https://mitomo.com.vn/wp-content/uploads/2021/12/may-ep-den-300x300.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2021/12/12-3.png"
        }
      ]
    };
  }
};

</script>

<style>

</style>