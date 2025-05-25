<template>
  <div>
    <Galleria
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      :circular="true"
      containerStyle=""
      class="h-[250px] w-full slide-home-page-desktop"
      :showItemNavigators="true"
      :showThumbnails="false"
      :autoPlay="true"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          class="h-[250px] slide-home-page-desktop"
          style="display: block; object-fit: inherit; width: 100%;"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block; object-fit: inherit"
        />
      </template>
    </Galleria>
    <Img src="https://mitomo.com.vn/wp-content/uploads/2024/09/5-buoc-dang-ky-bao-hanh-1056-x-306-px-2.png" class="w-full"></Img>
    
    <HotProducts/>
    <FruitMachine/>
  </div> 
</template>

<script>
import HotProducts from '~/components/HomePage/HotProducts.vue';
import FruitMachine from '~/components/HomePage/FruitMachine.vue'

const HEADER_HEIGHT = 60;

export default {
  components: { HotProducts, FruitMachine },
  data() {
    return {
      images: null,
      responsiveOptions: [
        {
          breakpoint: "991px",
          numVisible: 4
        },
        {
          breakpoint: "767px",
          numVisible: 3
        },
        {
          breakpoint: "575px",
          numVisible: 1
        }
      ]
    };
  },
  mounted() {
    this.images = [
      {
        itemImageSrc: "https://picsum.photos/id/237/1920/1080",
        alt: "Image 1"
      },
      {
        itemImageSrc: "https://picsum.photos/seed/picsum/1920/1080",
        alt: "Image 1"
      },
    ];
  }
};
</script>

<style scoped>
.p-galleria {
  border-radius: 0px !important;
}
@media screen and (min-width: 640px) and (max-width: 960px) {
  .slide-home-page-desktop {
    height: 40vh;
  }
}
@media screen and (min-width: 961px) {
  .slide-home-page-desktop {
    height: calc(100vh - var(--header-height, 60px));
  }
}
</style>
