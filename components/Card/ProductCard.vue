<template>
  <div>
    <!-- <OverlayBadge class="product-card-badge relative" :value="formattedSaleOff" severity="warn">
      <Img :src="product.thumbnail" class=""></Img>
      <div class="absolute hidden justify-center items-center my-3 bottom-0 left-[50%] translate-x-[-50%] bg-slate-500 rounded-full">
        <div class="hidden">
          <div class="flex justify-center items-center w-28">
            <i class="pi pi-search flex items-center justify-center w-10 h-10 text-xl mx-1 my-1 sm:hover:cursor-pointer"></i>
            <i class="pi pi-shopping-bag flex items-center justify-center w-10 h-10 text-xl mx-1 my-1 sm:hover:cursor-pointer"></i>
          </div>
        </div>
      </div>
    </OverlayBadge> -->
    
    <div class="product-card-badge relative" @mouseenter="showMoreImg" @mouseleave="showMoreImg">
      <p class="badge-number-of-sale-off w-[50px] h-[50px] bg-green-400 flex items-center justify-center rounded-full absolute top-1 left-1"> <strong> {{ formattedSaleOff }} </strong> </p>
      <Img :src="product.thumbnail" class=""></Img>
      <div v-show="isUserHoverProductCard" class="absolute flex justify-center items-center my-3 bottom-0 left-[50%] translate-x-[-50%] bg-slate-500 rounded-full">
        <div class="flex justify-center items-center w-28">
          <i class="pi pi-search flex items-center justify-center w-10 h-10 text-xl mx-1 my-1 sm:hover:cursor-pointer"></i>
          <i class="pi pi-shopping-bag flex items-center justify-center w-10 h-10 text-xl mx-1 my-1 sm:hover:cursor-pointer"></i>
        </div>
      </div>
    </div>
    
    <p class="px-5 py-2 text-center"> <strong> {{ product.name }} </strong> </p>
    <p :class="priceClass"> {{ formattedPrice }} </p>
    <p :class="priceAfterSaleClass"> {{ priceAfterSale }} </p>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isUserHoverProductCard: false,
    };
  },
  computed: {
    formattedPrice() {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
      }).format(this.product.price);
    },
    priceAfterSale() {
      const saleAmount = (this.product.price * this.product.saleOff) / 100;
      const price = this.product.price - saleAmount;
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND"
      }).format(parseInt(price));
    },
    formattedSaleOff() {
      return this.product.saleOff ? `-${this.product.saleOff}%` : "";
    },
    priceClass() {
      return this.product.saleOff ? "pt-1 text-center line-through" : "";
    },
    priceAfterSaleClass() {
      return this.product.saleOff ? "pb-1 text-center" : "py-1 text-center hidden";
    },
  },
  methods: {
    showMoreImg() {
      this.isUserHoverProductCard = !this.isUserHoverProductCard;
    }
  }
};
</script>

<style>
.product-card-badge > .p-badge-circle, .p-badge {
  color: black;
  font-size: 0.8em;
  transform: translate(-280%, 20%) !important;
}
</style>
