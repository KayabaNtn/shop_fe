import script from './index-DfoVhuPj.mjs';
import { resolveComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '@primeuix/utils/dom';
import '@primeuix/utils/zindex';
import './index-De0dg7Ws.mjs';
import '@primeuix/utils/object';
import './index-DpRrGZTR.mjs';
import '@primeuix/styled';
import '@primeuix/utils/uuid';
import './index-f6-L4oOs.mjs';
import './index-D21vFaAL.mjs';
import './index-Din928lO.mjs';
import '@primeuix/utils';
import '@primeuix/styles/galleria';
import './index-C319vlSQ.mjs';
import './index-BLn-pl6M.mjs';
import './index-2dA4pXcI.mjs';
import '@primeuix/styles/ripple';
import './index-CFvji5m2.mjs';
import './index--ctLNnjM.mjs';
import './index-CMv313tU.mjs';
import './index-B8dwdDfW.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import 'node:url';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/styles/base';

const _sfc_main$3 = {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isUserHoverProductCard: false
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
      const saleAmount = this.product.price * this.product.saleOff / 100;
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
    }
  },
  methods: {
    showMoreImg() {
      this.isUserHoverProductCard = !this.isUserHoverProductCard;
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Img = resolveComponent("Img");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="product-card-badge relative"><p class="badge-number-of-sale-off w-[50px] h-[50px] bg-green-400 flex items-center justify-center rounded-full absolute top-1 left-1"><strong>${ssrInterpolate($options.formattedSaleOff)}</strong></p>`);
  _push(ssrRenderComponent(_component_Img, {
    src: $props.product.thumbnail,
    class: ""
  }, null, _parent));
  _push(`<div style="${ssrRenderStyle($data.isUserHoverProductCard ? null : { display: "none" })}" class="absolute flex justify-center items-center my-3 bottom-0 left-[50%] translate-x-[-50%] bg-slate-500 rounded-full"><div class="flex justify-center items-center w-28"><i class="pi pi-search flex items-center justify-center w-10 h-10 text-xl mx-1 my-1 sm:hover:cursor-pointer"></i><i class="pi pi-shopping-bag flex items-center justify-center w-10 h-10 text-xl mx-1 my-1 sm:hover:cursor-pointer"></i></div></div></div><p class="px-5 py-2 text-center"><strong>${ssrInterpolate($props.product.name)}</strong></p><p class="${ssrRenderClass($options.priceClass)}">${ssrInterpolate($options.formattedPrice)}</p><p class="${ssrRenderClass($options.priceAfterSaleClass)}">${ssrInterpolate($options.priceAfterSale)}</p></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card/ProductCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProductCard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: { ProductCard },
  name: "HotProducts",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "\u1EA4m \u0110un Si\xEAu T\u1ED1c Th\u1EE7y Tinh Mitomo ST-220 1.8L, 1800W",
          price: "100000",
          saleOff: "10",
          img: "https://mitomo.com.vn/wp-content/uploads/2023/04/am-sieu-toc16-300x300.jpg",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2023/04/am-sieu-toc.png"
        },
        {
          id: 2,
          name: "M\xE1y V\u1EAFt Cam Mitomo VC-55 Pro Handle Citrus Juicer Vi\u1EC1n \u0110en",
          price: "2100000",
          saleOff: "15",
          img: "https://mitomo.com.vn/wp-content/uploads/2021/12/may-vat-cam-1-300x300.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2021/12/may-vat-cam-vc-55.png"
        },
        {
          id: 3,
          name: "M\xE1y \xC9p Tr\xE1i C\xE2y Ch\u1EADm Mitomo EC \u2013 55 M\xE0u Tr\u1EAFng, C\xF4ng su\u1EA5t 200W",
          price: "1200000",
          saleOff: "45",
          img: "https://mitomo.com.vn/wp-content/uploads/2021/12/2.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2021/12/7-11.png"
        },
        {
          id: 4,
          name: "\u1EA4m \u0111un n\u01B0\u1EDBc si\xEAu t\u1ED1c 3 l\u1EDBp cao c\u1EA5p Mitomo ST-631 1.7L, 1800W",
          price: "340000",
          saleOff: "15",
          img: "https://mitomo.com.vn/wp-content/uploads/2022/09/14-2-300x300.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2022/09/am-inox-2-lop-mitomo-bia-logo.png"
        }
      ]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProductCard = resolveComponent("ProductCard");
  _push(`<!--[--><h1 class="w-full mx-auto my-5 text-2xl text-center underline">S\u1EA3n ph\u1EA9m n\u1ED5i b\u1EADt</h1><div class="grid grid-cols-2 gap-5 p-2"><!--[-->`);
  ssrRenderList($data.products, (product) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_ProductCard, { product }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomePage/HotProducts.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HotProducts = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {
  components: { ProductCard },
  name: "FruitMachine",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "M\xE1y \xC9p Tr\xE1i C\xE2y Ch\u1EADm Mitomo Mitomo KJ3081 \u2013 C\xF4ng su\u1EA5t m\u1EA1nh m\u1EBD \u2013 Ki\u1EC7t b\xE3 t\u1EDBi 98%",
          price: "4200000",
          saleOff: "46",
          img: "https://mitomo.com.vn/wp-content/uploads/2025/06/may-ep-cham-mitomo-kj-3081-7.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2025/06/may-ep-cham-mitomo-kj-3081.png"
        },
        {
          id: 2,
          name: "M\xE1y \xC9p Tr\xE1i C\xE2y Nhanh C\xF4ng Su\u1EA5t Cao Mitomo KJ-3057",
          price: "2295000",
          saleOff: "22",
          img: "https://mitomo.com.vn/wp-content/uploads/2023/11/may-ep-nhanh-300x300.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2023/10/50.png"
        },
        {
          id: 3,
          name: "M\xE1y \xC9p Tr\xE1i C\xE2y Ch\u1EADm Mitomo EC \u2013 55 M\xE0u Tr\u1EAFng, C\xF4ng su\u1EA5t 200W",
          price: "1882000",
          saleOff: "47",
          img: "https://mitomo.com.vn/wp-content/uploads/2023/11/may-ep-cham-trang-300x300.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2021/12/10-3.png"
        },
        {
          id: 4,
          name: "M\xE1y \xC9p Tr\xE1i C\xE2y Ch\u1EADm Mitomo EC \u2013 55 M\xE0u \u0110en, C\xF4ng su\u1EA5t 200W",
          price: "1882000",
          saleOff: "47",
          img: "https://mitomo.com.vn/wp-content/uploads/2021/12/may-ep-den-300x300.png",
          thumbnail: "https://mitomo.com.vn/wp-content/uploads/2021/12/12-3.png"
        }
      ]
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ProductCard = resolveComponent("ProductCard");
  _push(`<!--[--><h1 class="w-full mx-auto my-5 text-2xl text-center underline">M\xE1y \xE9p tr\xE1i c\xE2y</h1><div class="grid grid-cols-2 gap-5 p-2"><!--[-->`);
  ssrRenderList($data.products, (product) => {
    _push(`<div>`);
    _push(ssrRenderComponent(_component_ProductCard, { product }, null, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HomePage/FruitMachine.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FruitMachine = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
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
      }
    ];
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Galleria = script;
  const _component_Img = resolveComponent("Img");
  const _component_HotProducts = resolveComponent("HotProducts");
  const _component_FruitMachine = resolveComponent("FruitMachine");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-97baec24>`);
  _push(ssrRenderComponent(_component_Galleria, {
    value: $data.images,
    responsiveOptions: $data.responsiveOptions,
    numVisible: 5,
    circular: true,
    containerStyle: "",
    class: "h-[250px] w-full slide-home-page-desktop",
    showItemNavigators: true,
    showThumbnails: false,
    autoPlay: true
  }, {
    item: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", slotProps.item.itemImageSrc)}${ssrRenderAttr("alt", slotProps.item.alt)} class="h-[250px] slide-home-page-desktop" style="${ssrRenderStyle({ "display": "block", "object-fit": "inherit", "width": "100%" })}" data-v-97baec24${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: slotProps.item.itemImageSrc,
            alt: slotProps.item.alt,
            class: "h-[250px] slide-home-page-desktop",
            style: { "display": "block", "object-fit": "inherit", "width": "100%" }
          }, null, 8, ["src", "alt"])
        ];
      }
    }),
    thumbnail: withCtx((slotProps, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", slotProps.item.thumbnailImageSrc)}${ssrRenderAttr("alt", slotProps.item.alt)} style="${ssrRenderStyle({ "display": "block", "object-fit": "inherit" })}" data-v-97baec24${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: slotProps.item.thumbnailImageSrc,
            alt: slotProps.item.alt,
            style: { "display": "block", "object-fit": "inherit" }
          }, null, 8, ["src", "alt"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Img, {
    src: "https://mitomo.com.vn/wp-content/uploads/2024/09/5-buoc-dang-ky-bao-hanh-1056-x-306-px-2.png",
    class: "w-full"
  }, null, _parent));
  _push(ssrRenderComponent(_component_HotProducts, null, null, _parent));
  _push(ssrRenderComponent(_component_FruitMachine, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-97baec24"]]);

export { index as default };
//# sourceMappingURL=index-D9E89zLR.mjs.map
